import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

beforeEach(() => {
  render(<App />)
})
//a function that will find all the inputElement
const typeIntoForm = ({ email, password, confirmPassword }) => {
  const emailInputElement = screen.getByRole('textbox', { name: /email/i })
  const passwordInputElement = screen.getByLabelText('Password')
  const confirmPasswordInputElement = screen.getByLabelText(/Confirm password/i)
  if (email) {
    userEvent.type(emailInputElement, email)
  }
  if (password) {
    userEvent.type(passwordInputElement, password)
  }
  if (confirmPassword) {
    userEvent.type(confirmPasswordInputElement, confirmPassword)
  }
  //need to return those consts to be able to use them in the tests because they are only scoped in this fuction
  return {
    emailInputElement,
    passwordInputElement,
    confirmPasswordInputElement,
  }
}
const clickOnSubmitButton = () => {
  const submitButtonElement = screen.getByRole('button', {
    name: /submit/i,
  })
  userEvent.click(submitButtonElement)
}

describe ("classic forms functions block", ()=>{
  test('inputs should be initially empty', () => {
    expect(screen.getByRole('textbox').value).toBe('')
    expect(screen.getByLabelText('Password').value).toBe('')
    expect(screen.getByLabelText(/Confirm password/i).value).toBe('')
  })
  test('should be able to type an email', () => {
    const { emailInputElement } = typeIntoForm({ email: 'siwar@gmail.com' })
    expect(emailInputElement.value).toBe('siwar@gmail.com')
  })
  test('should be able to type a password', () => {
    const { passwordInputElement } = typeIntoForm({ password: 'siwar' })
    expect(passwordInputElement.value).toBe('siwar')
  })
  test('should be able to type a confirm password', () => {
    const { confirmPasswordInputElement } = typeIntoForm({
      confirmPassword: 'siwar',
    })
    expect(confirmPasswordInputElement.value).toBe('siwar')
  })
})


describe ("error handeling block", ()=>{
  test('should show error msg for invalid email', () => {
    //emailErrorElement will return null that's why we will reinitalise it again after the btn click
    //make sure that the msg error is not displaying before the event
    expect(
      screen.queryByText(/the email input is invalid/i),
    ).not.toBeInTheDocument()
    //impliment the email input
    typeIntoForm({ email: 'siwargmail.com' })
    //after click this is what should happen
    clickOnSubmitButton()
    expect(screen.queryByText(/the email input is invalid/i)).toBeInTheDocument()
  })
  test('show password err  if password less than 5 charac', () => {
    //first add valid email
    //impliment the email input
    typeIntoForm({ email: 'siwar@gmail.com' })
    //pt wrong password
    typeIntoForm({ password: '1234' })
    //make sure the error message doesn't show before click
    expect(
      screen.queryByText(/the password should have at least 5 charachters/i),
    ).not.toBeInTheDocument()
    //click on btn
    clickOnSubmitButton()
    expect(
      screen.queryByText(/the password should have at least 5 charachters/i),
    ).toBeInTheDocument()
  })
  test("show password err if confirm password doesn't match with password", () => {
    //first add valid email and valid password
    typeIntoForm({ email: 'siwar@gmail.com', password: '12345' })
    const confirmPasswordInputElement = screen.getByLabelText(/Confirm password/i)
    //make sure the error message doesn't show before click
    expect(
      screen.queryByText(/the passwords don't match/i),
    ).not.toBeInTheDocument()
    //type invalid confrim password
    userEvent.type(confirmPasswordInputElement, '123456')
    //click on btn
    clickOnSubmitButton()
    expect(screen.queryByText(/the passwords don't match/i)).toBeInTheDocument()
  })
  test('should show no error msg if every input is valid', () => {
    typeIntoForm({
      email: 'siwar@gmail.com',
      password: '12345',
      confirmPassword: '12345',
    })
    clickOnSubmitButton()
    //expect that these messages are not shown
    expect(
      screen.queryByText(/the email input is invalid/i),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(/the password should have at least 5 charachters/i),
    ).not.toBeInTheDocument()
    expect(
      screen.queryByText(/the passwords don't match/i),
    ).not.toBeInTheDocument()
  }) 
})



