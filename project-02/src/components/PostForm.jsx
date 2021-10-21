import React, { useState } from 'react';
import { Input } from './UI/input/Input';
import { Button } from './UI/button/Button';

export const PostForm = ({ create }) => {
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (evt) => {
    evt.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({ title: "", body: "" });
  };

  return (
    <form>
      <Input
        value={post.title}
        onChange={(evt) => setPost({ ...post, title: evt.target.value })}
        type="text"
        placeholder="Name of post"
      />
      <Input
        value={post.body}
        onChange={(evt) => setPost({ ...post, body: evt.target.value })}
        type="text"
        placeholder="Description of post"
      />
      <Button onClick={addNewPost}>Create post</Button>
    </form>
  );
};
