import { About } from "../pages/About";
import { Posts } from "../pages/Posts";
import { PostIdPage } from "../pages/PostIdPage";

const routes = [
  { path: "/about", component: About, exact: true },
  { path: "/posts", component: Posts, exact: true },
  { path: "/posts/:id", component: PostIdPage, exact: true }
];

export { routes };
