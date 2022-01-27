import React from 'react'
import './write.css'
const Write = () => {
  return (
    <div className='write'>
      <img
        className='writeImg'
        src='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8d2ViJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        alt='write images'
      />
      <form className='writeForm'>
        <div className='writeFormGroup'>
          <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
          </label>
          <input type='file' id='fileInput' style={{ display: 'none' }} />
          <input
            type='text'
            className='writeInput'
            placeholder='Title'
            autoFocus={true}
          />
        </div>
        <div className='writeFormGroup'>
          <textarea
            placeholder='Tell your story.....'
            className='writeInput writeText'
          ></textarea>
        </div>
        <button className='writeSubmit'>Publish</button>
      </form>
    </div>
  )
}

export default Write
