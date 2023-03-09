import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DataFetch from "./anisulIslam/components/DataFetch";
import App from "./App";
import {
  CounterContextProvider,
  initState,
} from "./devGray/components/hooks/context/CounterContext";
import Reducer from "./devGray/components/hooks/Reducer";
import Ref from "./devGray/components/hooks/Ref";
import AnisulIslamHome from "./devGray/components/pages/homePage/AnisulIslamHome";
import HomePage from "./devGray/components/pages/homePage/HomePage";
import ProjectPages from "./projects/components/pages/ProjectPages";

type StatusType = "SUCCESSES" | "ERROR";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "devgray",
        element: <HomePage />,
      },
      {
        path: "anisul",
        element: <AnisulIslamHome />,
      },
    ],
  },
  {
    path: "fetch",
    element: (
      <DataFetch
        BTNStyle={{ color: "red", background: "black" }}
        status="SUCCESSES"
      />
    ),
  },

  {
    path: "ref",
    element: <Ref />,
  },
  {
    path: "home",
    element: <ProjectPages />,
  },
  {
    path: "reducer",
    element: (
      <CounterContextProvider
        count={initState.count}
        inputText={initState.inputText}
      >
        <Reducer />
      </CounterContextProvider>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
