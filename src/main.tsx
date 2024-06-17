import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/header.tsx";
import Story from "./Components/story.tsx";
import Secret from "./Components/Secret.tsx";
import NPC from "./Components/npc.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/story",
    element: <Story></Story>
  },
  {
    path: "/secret",
    element: <Secret></Secret>
  },
  {
    path: "/npc",
    element: <NPC></NPC>
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
