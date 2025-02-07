import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Chatbot from "./Chatbot"; // Import the Chatbot component
import Login from "./auth/Login"; // Import the Login component
import Signup from "./auth/Signup"; // Import the Signup component
import Sidebar from "./Sidebar"; // Import the Sidebar component

const root = createRoot(document.getElementById("root")!); // Ensure you target the root div
root.render(
  <HashRouter>
    <div style={{ display: "flex" }}>
      <Sidebar
        openCopilotWindow={() => {}} // Implement your function
        openAboutWindow={() => {}} // Implement your function
        setOpenSettingWindow={() => {}} // Implement your function
      />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>
      </div>
    </div>
  </HashRouter>
);
