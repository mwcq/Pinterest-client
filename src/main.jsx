import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import HomePage from "./routes/homepage/homepage.jsx";
import PostPage from "./routes/postpage/postpage.jsx";
import CreatePage from "./routes/createPage/createPage.jsx";
import AuthPage from "./routes/authPage/authPage.jsx";
import ProFilePage from "./routes/proFilePage/proFilePage.jsx";
import SearchPage from "./routes/searchPage/searchPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./layouts/mainLayout.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/pin/:id" element={<PostPage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/:username" element={<ProFilePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
