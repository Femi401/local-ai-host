import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Chatbot from "./Chatbot"; // Import the Chatbot component
import Login from "./auth/Login"; // Import the Login component

const root = createRoot(document.getElementById("root")!); // Ensure you target the root div
root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/chatbot" element={<Chatbot />} />
    </Routes>
  </HashRouter>
);
