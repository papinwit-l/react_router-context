import React from "react";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Header from "../pages/Header";
import Product from "../pages/Product";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/login",
//     element: <Login />,
//   },
//   {
//     path: "*",
//     element: <NotFound />,
//   },
// ]);

const guestRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      //   { index: true, element: <Home /> },
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "login", element: <Login /> },
      { path: "product/:id", element: <Product /> },
      { path: "*", element: <Navigate to="/" /> },
    ],
  },
]);

function AppRouter() {
  return <RouterProvider router={guestRouter} />;
}

export default AppRouter;
