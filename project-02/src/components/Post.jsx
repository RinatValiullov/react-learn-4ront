import React from 'react'

const Post = ({post}) => {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>{post.id} {post.title}</strong>
          <div>
            {post.body}
          </div>
        </div>
        <div className="post__btn">
          <button>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Post
