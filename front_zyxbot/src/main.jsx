import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import Login from "./routes/Login";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Registro from "./routes/Registro";
import Chat from "./routes/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/registro",
    element: <Registro />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/chat",
    element: <Chat/> ,
    errorElement: <ErrorPage />,
  },

  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
