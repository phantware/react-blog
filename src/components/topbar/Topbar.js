import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import './topbar.css'

const Topbar = () => {
  const { user, dispatch } = useContext(Context)

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }
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
          <li className='topListItem' onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className='toRight'>
        {user ? (
          <img className='topImage' src={user.profilePic} alt='laptop' />
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
