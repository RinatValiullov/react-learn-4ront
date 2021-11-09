import React, { useEffect, useState, useRef } from "react";
import { PostService } from "./../API/PostService";
import { PostFilter } from "./../components/PostFilter";
import { PostForm } from "./../components/PostForm";
import { PostList } from "./../components/PostList";
import { Button } from "./../components/UI/button/Button";
import { Loader } from "./../components/UI/loader/Loader";
import { Modal } from "./../components/UI/modal/Modal";
import { Pagination } from "./../components/UI/pagination/Pagination";
import { useFetching } from "./../hooks/useFetching";
import { usePosts } from "./../hooks/usePosts";
import "./../styles/App.css";
import { getPageCount } from "./../utils/pages";
import { useObserver } from './../hooks/useObserver';
import { MySelect } from './../components/UI/select/MySelect';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPostst = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const changePage = (page) => {
    setPage(page);
  };

  return (
    <div className="App">
      <Button style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </Button>
      <Modal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </Modal>
      <hr style={{ margin: "15px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={value => setLimit(value)}
        defaultOption="Количество элементов"
        options={[
          { value: 5, name: '5' },
          { value: 10, name: '10' },
          { value: 15, name: '15' },
          { value: -1, name: 'Все посты' },
        ]}
      />
      {postError &&
        <h1>Error ${postError}</h1>
      }
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPostst}
        title="Список постов"
      />
      <div ref={lastElement} style={{ height: 30, background: 'green' }} />
      {isPostsLoading &&
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
          }}
        >
          <Loader />
        </div>
      }

      <Pagination page={page} changePage={changePage} totalPages={totalPages} />
    </div>
  );
};

export { Posts };
