import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { PostService } from './../API/PostService';
import { Loader } from './../components/UI/loader/Loader';


const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});

  const [fetchById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  useEffect(() => {
    fetchById(params.id);
  }, []);

  return (
    <div>
      <h1>Страница поста {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}) {post.title}</div>
      }

    </div>
  );
};

export { PostIdPage };
