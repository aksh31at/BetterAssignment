import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import socketIO from "socket.io-client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ChatPage from "./pages/ChatPage.jsx";
import Home from "./pages/Home.jsx";
const socket = socketIO.connect("http://localhost:4000");
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home socket={socket} />} />
      <Route path="/chat" element={<ChatPage socket={socket} />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
