import React, { useEffect } from "react";
import Banner from "../Layout/Banner";
import Navbar from "../Layout/Navbar";
import { PostContext } from "../Context/postContext";
import { useContext } from "react";
import { AuthorContext } from "../Context/author";
import { Link } from "react-router-dom";
import ListPost from "../Layout/ListPost";
import Footer from "../Layout/Footer";
import ModalPost from "../Components/ModalPost";
import ModalUpdate from "../Components/ModalUpdate";

function PageBlog() {
  const { author } = useContext(AuthorContext);
  console.log(author);

  const {
    postState: { posts, postLoanding, post },
    getPost,
    togle,
    setTogle,
    togleUpdateMoadal,
  } = useContext(PostContext);
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="relative">
      {togleUpdateMoadal && <ModalUpdate nameuser={author.user.username} />}
      {togle && <ModalPost nameuser={author.user.username} />}
      <Navbar />
      <div className="text-center my-[35px]">
        <h2 className="font-mono text-[1.6rem] py-[20px] ">
          Learn React & Node
        </h2>
        <ul className="lg:w-[10%] justify-center flex  lg:justify-between mx-auto text-[1.4rem]">
          <Link to="/">
            <li className="underline inline hover:text-green-500">Home</li>
          </Link>
          <span className="mx-5">|</span>
          <li
            onClick={setTogle}
            className=" hover:text-violet-500 cursor-pointer underline inline"
          >
            Write
          </li>
        </ul>
      </div>
      <Banner />

      <ListPost posts={posts} />
      <Footer />
    </div>
  );
}

export default PageBlog;
