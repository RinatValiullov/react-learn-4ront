import React from 'react';
import { Button } from './UI/button/Button';

const Post = ({ post, number, remove }) => {
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>{number}. {post.title}</strong>
          <div>
            {post.body}
          </div>
        </div>
        <div className="post__btn">
          <Button onClick={() => remove(post)}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
