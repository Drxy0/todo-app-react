import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles.css";
import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { MainPage } from "./pages/MainPage";
import { TaskPages } from "./pages/TaskPage";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/list/:listId",
    element: <TaskPages />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
