import React from 'react'
import SinglePost from '../../singlePost/SinglePost'
import Sidebar from '../../sidebar/Sidebar'
import './single.css'
const Single = () => {
  return (
    <div className='single'>
      <SinglePost />
      <Sidebar />
    </div>
  )
}

export default Single
