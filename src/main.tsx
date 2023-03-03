import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Reducer from "./components/hooks/Reducer";
import Ref from "./components/hooks/Ref";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "ref",
    element: <Ref />,
  },
  {
    path: "reducer",
    element: <Reducer />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
