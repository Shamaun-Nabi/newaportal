import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import News from "../components/News";
import Layout from "../Layout/Layout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/category",
        element: <Category />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);
