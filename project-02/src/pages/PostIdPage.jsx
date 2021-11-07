import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { PostService } from './../API/PostService';
import { Loader } from './../components/UI/loader/Loader';


const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  const [fetchById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [fetchComments, isCommentsLoading, errorComments] = useFetching(async (id) => {
    const response = await PostService.getComments(id);
    setComments(response.data);
  });

  useEffect(() => {
    fetchById(params.id);
    fetchComments(params.id);
  }, []);

  return (
    <div>
      <h1>Страница поста {params.id}</h1>
      {isLoading
        ? <Loader />
        : <div>{post.id}) {post.title}</div>
      }
      <h1>Комментарии</h1>
      {isCommentsLoading
        ? <Loader />
        : <div style={{ margin: '10px 0' }}>
          {comments.map((comment) => {
            return <article key={comment.id}>
              <h3>{comment.email}</h3>
              <div>{comment.body}</div>
            </article>;
          })}
        </div>

      }
    </div>
  );
};

export { PostIdPage };
