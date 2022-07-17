import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/author/Login";
import Author from "./views/Author";
import ThemeContext from "./Context/author";
import AuthorContextProvier from "./Context/author";
import PageBlog from "./views/PageBlog";
import Info from "./views/Info";
import PostContextProvider from "./Context/postContext";

function App() {
  return (
    <div className="App">
      <AuthorContextProvier>
        <PostContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Author authorRoute="login" />} />
            <Route
              path="/register"
              element={<Author authorRoute="register" />}
            />
            <Route path="/blog" element={<PageBlog />} />
            <Route path="/blog/info" element={<Info />} />
          </Routes>
        </PostContextProvider>
      </AuthorContextProvier>
    </div>
  );
}

export default App;
