import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

const Topbar = () => {
  const user = false
  return (
    <div className='topbar'>
      <div className='toLeft'>
        <i className='topIcon fab fa-facebook-square'></i>
        <i className='topIcon fab fa-twitter-square'></i>
        <i className='topIcon fab fa-pinterest-square'></i>
        <i className='topIcon fab fa-instagram-square'></i>
      </div>
      <div className='toCenter'>
        <ul className='topList'>
          <li className='topListItem'>
            <Link to='/' className='link'>
              HOME
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/about' className='link'>
              ABOUT
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/contact' className='link'>
              CONTACT
            </Link>
          </li>
          <li className='topListItem'>
            <Link to='/write' className='link'>
              WRITE
            </Link>
          </li>
          <li className='topListItem'>{user && 'LOGOUT'}</li>
        </ul>
      </div>
      <div className='toRight'>
        {user ? (
          <img
            className='topImage'
            src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
            alt='laptop'
          />
        ) : (
          <ul className='topList'>
            <li className='topListItem'>
              <Link className='link' to='/login'>
                LOGIN
              </Link>
            </li>
            <li className='topListItem'>
              <Link className='link' to='/register'>
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  )
}

export default Topbar
