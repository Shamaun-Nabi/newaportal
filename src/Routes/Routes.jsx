import axios from "axios";
import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import DetailNews from "../components/DetailNews";
import Footer from "../components/Footer";
import News from "../components/News";
import Layout from "../Layout/Layout";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/category/${params.id}`),
      },

      {
        path: "/news/:id",
        element: <DetailNews />,
        loader: ({ params }) =>
          axios.get(`http://localhost:3000/news/${params.id}`),
      },
      {
        path: "/",
        element: <Category />,
        loader: ({ params }) => axios.get(`http://localhost:3000/news`),
      },
    ],
  },
]);
