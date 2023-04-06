import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/main";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <MainLayout />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
