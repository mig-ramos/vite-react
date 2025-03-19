import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home/index.tsx";
import { About } from "./components/About/index.tsx";
import { Menu } from "./components/Menu/index.tsx";
import { Post } from "./components/Post/index.tsx";
import { Redirect } from "./components/Redirect/index.tsx";
import { NotFound } from "./components/NotFound/index.tsx";
import { Postagem } from "./components/Postagem/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/posts/:id" element={<Post />} /> */}
        <Route path="/posts" element={<Post />}>
          <Route path=":id" element={<Postagem />} />
        </Route>
        <Route path="/redirect" element={<Redirect />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
