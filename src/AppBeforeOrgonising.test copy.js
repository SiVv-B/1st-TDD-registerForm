// import { render, screen } from '@testing-library/react'
// import userEvent from '@testing-library/user-event'
// import App from './App'




// test('inputs should be initially empty', () => {
//   render(<App />)
//   const emailInputElement = screen.getByRole('textbox')
//   const passwordInputElement = screen.getByLabelText('Password')
//   const confirmPasswordInputElement = screen.getByLabelText
//   (/Confirm password/i)
//   expect(emailInputElement.value).toBe('')
//   expect(passwordInputElement.value).toBe('')
//   expect(confirmPasswordInputElement.value).toBe('')
// })

// test('should be able to type an email', () => {
//   render(<App />)
//   const emailInputElement = screen.getByRole('textbox', {
//     name: /email/i,
//   })
//   userEvent.type(emailInputElement, 'siwar@gmail.com')
//   expect(emailInputElement.value).toBe('siwar@gmail.com')
// })

// test('should be able to type a password', () => {
//   render(<App />)
//   const passwordInputElement = screen.getByLabelText('Password')
//   userEvent.type(passwordInputElement, 'siwar')
//   expect(passwordInputElement.value).toBe('siwar')
// })

// test('should be able to type a password', () => {
//   render(<App />)
//   const confirmPasswordInputElement = screen.getByLabelText(/Confirm password/i)
//   userEvent.type(confirmPasswordInputElement, 'siwar')
//   expect(confirmPasswordInputElement.value).toBe('siwar')
// })

// test('should show error msg for invalid email', () => {
//   render(<App />)
//   //emailErrorElement will return null that's why we will reinitalise it again after the btn click
//   const emailErrorElement = screen.queryByText
//   (/the email input is invalid/i)
  
//   const emailInputElement = screen.getByRole('textbox', {
//     name: /email/i,
//   })

//   const submitButtonElement = screen.getByRole('button', {
//     name: /submit/i,
//   })
// //make sure that the msg error is not displaying before the event
//   expect(emailErrorElement).not.toBeInTheDocument()
  
//   userEvent.type(emailInputElement, 'siwargmail.com')

//   userEvent.click(submitButtonElement)

//   const emailErrorElementAgain = screen.queryByText
//   (/the email input is invalid/i)

//   expect(emailErrorElementAgain).toBeInTheDocument()
// })


// test ("show password err  if password less than 5 charac", ()=>{
//   render(<App/>)
//   //first add valid email
//   const emailInputElement = screen.getByRole('textbox', {
//     name: /email/i,
//   })
//   userEvent.type(emailInputElement, 'siwar@gmail.com')
  
//   //make sure to input password
//   const passwordInputElement = screen.getByLabelText('Password')
//   const passwordErrorElement = screen.queryByText
//   (/the password should have at least 5 charachters/i)
//   //make sure the error message doesn't show before click
//   expect(passwordErrorElement).not.toBeInTheDocument()

//   //simulate password less than 5 charac
//   userEvent.type(passwordErrorElement,'1234')

//   //click on btn
//   const submitButtonElement =screen.getByRole('button', {
//   name:/submit/i,
//   })
// userEvent.click(submitButtonElement)

// const passwordErrorElementAgain = screen.queryByText
// (/the password should have at least 5 charachters/i)
// expect(passwordErrorElementAgain).toBeInTheDocument()
// })



// test ("show password err  if confirm password doesn't match with password", ()=>{
//   render(<App/>)
//   //first add valid email
//   const emailInputElement = screen.getByRole('textbox', {
//     name: /email/i,
//   })
//   userEvent.type(emailInputElement, 'siwar@gmail.com')
  
//   //make sure to input password and confirm password
//   const passwordInputElement = screen.getByLabelText('Password')
//   const confirmPasswordInputElement = screen.getByLabelText
//   (/Confirm password/i)

//   const confirmPasswordErrorElement = screen.queryByText
//   (/the passwords don't match/i)
//   //make sure the error message doesn't show before click
//   expect(confirmPasswordErrorElement).not.toBeInTheDocument()

//   //type a valid password 
//   userEvent.type(passwordInputElement,'12345')
  
//   //type invalid confrim password 
//   userEvent.type(confirmPasswordInputElement,'123456')

//   //click on btn
//   const submitButtonElement =screen.getByRole('button', {
//   name:/submit/i,
//   })
// userEvent.click(submitButtonElement)

// const confirmPasswordErrorElementAgain = screen.queryByText
// (/the passwords don't match/i)
// expect(confirmPasswordErrorElementAgain).toBeInTheDocument()
// })



// test ("should show no error msg if every input is valid", ()=>{
//   render(<App/>)
//   const emailInputElement = screen.getByRole('textbox', {
//     name: /email/i })
//   userEvent.type(emailInputElement, 'siwar@gmail.com')
  
//   const passwordInputElement = screen.getByLabelText('Password')
//   userEvent.type(passwordInputElement,'12345')
  
//   const confirmPasswordInputElement = screen.getByLabelText
//   (/Confirm password/i)
//   userEvent.type(confirmPasswordInputElement,'12345')

//   const submitButtonElement =screen.getByRole('button', {
//   name:/submit/i})
// userEvent.click(submitButtonElement)

// //expect that these messages are not shown
// const emailErrorElement = screen.queryByText
// (/the email input is invalid/i)
// const passwordErrorElementAgain = screen.queryByText
// (/the password should have at least 5 charachters/i)
// const confirmPasswordErrorElementAgain = screen.queryByText
// (/the passwords don't match/i)
// expect(emailErrorElement).not.toBeInTheDocument()
// expect(passwordErrorElementAgain).not.toBeInTheDocument()
// expect(confirmPasswordErrorElementAgain).not.toBeInTheDocument()
// })