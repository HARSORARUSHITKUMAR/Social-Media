import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import CreatePost, { postSubmit } from "./components/CreatePost";
import PostList, { postLoader } from "./components/PostList";

const router = createBrowserRouter([
  {
    path: "/", element: <App />, 
    children: [
      { path: "/", element: <PostList />,loader:postLoader },
      { path: "/create-post", element: <CreatePost />, action: postSubmit }
    ]
  }

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
reportWebVitals();
