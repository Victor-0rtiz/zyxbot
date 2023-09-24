import React from "react";
import ReactDOM from "react-dom/client";
import ErrorPage from "./routes/ErrorPage";
import Home from "./routes/Home";
import "./index.css";


import { createBrowserRouter, RouterProvider, BrowserRouter, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.render(
  <BrowserRouter basename="/zyxbot/front">
    <Route exact path="/" component={Home} />
    {/* ... */}
  </BrowserRouter>,
  document.getElementById("root")
);