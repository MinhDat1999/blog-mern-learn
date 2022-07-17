import React from "react";
import { PostContext } from "../Context/postContext";
import { useContext } from "react";
import Navbar from "../Layout/Navbar";
import Boxleft from "../Components/Boxleft";

const Info = () => {
  const {
    postState: { post },
  } = useContext(PostContext);
  console.log(post);
  let day;
  return (
    <div className="w-full mx-auto">
      <Navbar />
      <div className=" w-full   h-screen">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-1     ">
          <div className="col-span-4 lg:col-span-3 min-h-[660px] pt-[2rem]  ">
            <div className="px-5 w-full ">
              <img
                src={post.attachment}
                alt=""
                className="w-full h-[330px] object-cover object-center rounded-lg"
              />
              <h1 className="title-info text-4xl py-10 text-center">
                {post.title}
              </h1>
              <div className="flex items-center justify-between w-full  text-amber-800 font-serif">
                <span>Author: {post.author}</span>
                <span>
                  Date: {(day = new Date(post.createdAt).toDateString())}
                </span>
              </div>
              <p className="info-text">{post.content}</p>
            </div>
          </div>
          <Boxleft />
        </div>
      </div>
    </div>
  );
};

export default Info;
