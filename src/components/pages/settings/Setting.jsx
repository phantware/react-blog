import React from 'react'
import './setting.css'
import Sidebar from '../../../components/sidebar/Sidebar'

const Setting = () => {
  return (
    <div className='settings'>
      <div className='settingsWrapper'>
        <div className='settingsTitle'>
          <span className='settingsUpdateTitle'>Update Your Account</span>
          <span className='settingsDeleteTitle'>Delete Account</span>
        </div>
        <form className='settingsForm'>
          <label>Profile Picture</label>
          <div className='settingsPP'>
            <img
              src='https://images.unsplash.com/photo-1616469832301-ffaeadc68cf3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYiUyMGxvZ298ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              alt='profile images'
            />
            <label htmlFor='fileInput'>
              <i className='settingsPPIcon far fa-user-circle'></i>
            </label>
            <input type='file' id='fileInput' style={{ display: 'none' }} />
          </div>
          <label>Username</label>
          <input type='text' placeholder='Phantware' />
          <label>Email</label>
          <input type='email' placeholder='phantmoney2011@gmail.com' />
          <label>Password</label>
          <input type='password' />
          <button className='settingsSubmit'>Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  )
}

export default Setting
