import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "tw-elements";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/Routes";
import AuthProviderContext from "./contexts/AuthProviderContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviderContext>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AuthProviderContext>
  </React.StrictMode>
);
