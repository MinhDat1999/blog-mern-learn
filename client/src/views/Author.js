import React from "react";
import Login from "../Components/author/Login";
import Register from "../Components/author/Register";
import { AuthorContext } from "../Context/author";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function Author({ authorRoute }) {
  const {
    author: { authLoading, isAuthenticated },
  } = useContext(AuthorContext);

  let body;
  console.log(authLoading, isAuthenticated);
  if (authLoading) {
    body = (
      <div className="w-full h-screen flex items-center justify-center">
        <svg className="spinner" viewBox="0 0 50 50">
          <circle
            className="path"
            cx="25"
            cy="25"
            r="20"
            fill="none"
            stroke-width="5"
          ></circle>
        </svg>
      </div>
    );
  } else if (isAuthenticated) {
    console.log("xong");
    return <Navigate to="/blog" />;
  } else {
    body = (
      <>
        {authorRoute === "login" && <Login />}
        {authorRoute === "register" && <Register />}
      </>
    );
  }

  return <>{body}</>;
}

export default Author;
