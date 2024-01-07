import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard/Dashboard";
import Login from "../Components/Login/Login";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider
      router={router}
    />
  );