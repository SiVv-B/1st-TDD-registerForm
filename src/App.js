import logo from './logo.svg'
import './App.css'
import { useState } from 'react'
import validator from 'validator'
function App() {

  const [signUp, setSignUp] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })
 
  const [error, setError] = useState('')
 
 
  const handleChange = (e) => {
    e.preventDefault()
    setSignUp({
      ...signUp,
      [e.target.name]: e.target.value,
    })
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (!validator.isEmail(signUp.email)) {
      return setError('The email input is invalid')
    }
    if(signUp.password.length < 5){
      return setError('The password should have at least 5 charachters')
    }
    if (signUp.password !== signUp.confirmPassword) {
      setError("The passwords don't match")
    }
  }



  return (
    <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={signUp.email}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
            value={signUp.password}
            onChange={handleChange}
          ></input>
        </div>
        <div className="mb-3">
          <label htmlFor="confirm-password" className="form-label">
            Confirm password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            className="form-control"
            value={signUp.confirmPassword}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}

export default App
