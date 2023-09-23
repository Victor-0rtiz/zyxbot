import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
