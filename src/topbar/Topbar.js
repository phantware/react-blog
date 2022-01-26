import React from 'react'
import './topbar.css'

const Topbar = () => {
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
          <li className='topListItem'>HOME</li>
          <li className='topListItem'>ABOUT</li>
          <li className='topListItem'>CONTACT</li>
          <li className='topListItem'>WRITE</li>
          <li className='topListItem'>LOGOUT</li>
        </ul>
      </div>
      <div className='toRight'>
        <img
          className='topImage'
          src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
          alt='laptop'
        />
        <i className='topSearchIcon fas fa-search'></i>
      </div>
    </div>
  )
}

export default Topbar
