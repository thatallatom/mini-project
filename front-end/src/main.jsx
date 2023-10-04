import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About.tsx";
import Blog from "./components/Blog.tsx";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";
import Register from "./components/Register.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Blog",
    element: <Blog />,
  },
  {
    path: "Home",
    element: <Home />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "Login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
