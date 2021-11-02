import React, { useState, useEffect } from "react";
import { PostForm } from "./components/PostForm";
import { PostList } from "./components/PostList";
import { PostFilter } from "./components/PostFilter";
import { Button } from "./components/UI/button/Button";
import { Modal } from "./components/UI/modal/Modal";
import "./styles/App.css";
import { usePosts } from "./hooks/usePosts";
import { useFetching } from "./hooks/useFetching";
import { PostService } from "./API/PostService";
import { Loader } from "./components/UI/loader/Loader";
import { getPageCount, getPagesArray } from "./utils/pages";

const App = () => {
  const [posts, setPosts] = useState([]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPostst = usePosts(posts, filter.sort, filter.query);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const pagesArray = getPagesArray(totalPages);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page);
    setPosts(response.data);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
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
      {postError && <h1>Error ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px"
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPostst}
          title="Список постов"
        />
      )}
      <div className="page__wrapper">
        {pagesArray.map((pageItem) => {
          return (
            <span
              key={pageItem}
              className={page === pageItem ? "page page__current" : "page"}
              onClick={() => setPage(pageItem)}
            >
              {pageItem}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default App;
