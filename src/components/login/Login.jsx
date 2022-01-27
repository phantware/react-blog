import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './login.css'

const Login = () => {
  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <form className='loginForm'>
        <label>Email</label>
        <input
          type='text'
          className='loginInput'
          placeholder='Enter your email'
        />
        <label>Password</label>
        <input
          type='password'
          className='loginInput'
          placeholder='Enter your password'
        />
        <label>Email</label>
        <button className='loginButton'>Login</button>
      </form>
      <button className='loginRegisterButton'>
        <Link className='link' to='/register'>
          REGISTER
        </Link>
      </button>
    </div>
  )
}

export default Login
