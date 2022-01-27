import React from 'react'
import './post.css'

const Post = () => {
  return (
    <div className='post'>
      <img
        className='postImg'
        src='https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2ViJTIwbG9nb3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
        alt='post images'
      />
      <div className='postInfo'>
        <div className='postCats'>
          <span className='postCat'>Music</span>
          <span className='postCat'>Life</span>
        </div>
        <span className='postTitle'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime,
          officia!
        </span>
        <hr />
        <span className='postDate'>1 hour ago </span>
      </div>
      <p className='postDesc'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam veritatis
        minus cumque veniam quo magnam atque perferendis ipsam quisquam dolorum
        necessitatibus voluptatibus amet odit ex laboriosam sunt repellendus
        officiis possimus, alias et ab. Qui distinctio quas pariatur id nam,
        incidunt velit aliquam hic soluta eaque ex quis placeat impedit
        perferendis adipisci eius nihil quaerat unde quam nobis perspiciatis
        tenetur. Recusandae eveniet expedita at facere aspernatur laudantium!
        Sit error, magnam quas debitis enim iure reprehenderit numquam ipsum
        nesciunt rerum, odit perspiciatis voluptatibus facilis cumque ratione!
        Doloremque quae enim sequi soluta quis!
      </p>
    </div>
  )
}

export default Post
