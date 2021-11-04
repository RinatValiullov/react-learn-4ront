import React from 'react';
import { Button } from './UI/button/Button';
import { useHistory } from 'react-router-dom';

const Post = ({ post, number, remove }) => {
  const router = useHistory();
  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>{post.id}. {post.title}</strong>
          <div>
            {post.body}
          </div>
        </div>
        <div className="post__btn">
          <Button onClick={() => router.push(`/posts/${post.id}`)}>Open</Button>
          <Button onClick={() => remove(post)}>Delete</Button>
        </div>
      </div>
    </div>
  );
};

export default Post;
