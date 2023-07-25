import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './index.css'
import RootLayout from './routes/RootLayout.jsx'
import NewPost, {action as newPostAction} from './routes/NewPost.jsx'
import Posts, {loader as postsLoaders} from './routes/Posts.jsx'
import PostDetails, {loader as postDetailsLoader} from "./routes/PostDetails"
const router = createBrowserRouter([
  {
    path: "/", element: <RootLayout />, children: [
      {
        path: "/", element: <Posts />, loader: postsLoaders, children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction},
          { path: "/:id", element: <PostDetails />, loader: postDetailsLoader}
        ]
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
