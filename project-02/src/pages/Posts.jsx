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

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPostst = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const lastElement = useRef();
  const observer = useRef();
  console.log(lastElement);

  const [fetchPosts, isPostsLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useEffect(() => {
    if (isPostsLoading) return;
    if (observer.current) observer.current.disconnect();
    const options = {
      root: document
    };
    const callback = function (entries, observer) {
      if (entries[0].isIntersecting && page < totalPages) {
        console.log(page);
        setPage(page + 1);
      }
    };
    observer.current = new IntersectionObserver(callback, options);
    observer.current.observe(lastElement.current);
  }, [isPostsLoading]);

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page]);

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
