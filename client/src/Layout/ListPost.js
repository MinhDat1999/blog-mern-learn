import React, { useContext } from "react";
import CardMedia from "@mui/material/CardMedia";
import { AiFillDelete } from "react-icons/ai";
import { PostContext } from "../Context/postContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import Boxleft from "../Components/Boxleft";

const ListPost = ({ posts }) => {
  let navigate = useNavigate();
  let vlName;
  const { deletePost, findpost, setModal } = useContext(PostContext);
  const infoblog = (postId) => {
    findpost(postId);
    navigate("/blog/info");
  };

  const editpost = (postid) => {
    setModal();
    console.log(postid);
    findpost(postid);
    let a = findpost(postid);
    console.log(a);
  };
  let day;
  console.log(posts);

  return (
    <div className="md:h-full flex items-center text-gray-600 list-post ">
      <div className="container px-5 py-24 mx-auto ">
        {posts.length !== 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-5  bg-white hotpost  ">
            <div className="col-span-4 lg:col-span-3 min-h-[660px] pt-[2rem]  ">
              <div className="px-5 w-full box-newstpost ">
                <div className="h-[400px]  overflow-hidden  ">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 ">
                    <img
                      src={posts[posts.length - 1].attachment}
                      alt=""
                      className=" w-full  object-center h-[400px] hiden lg:block"
                    />
                    <div
                      className="col-span-2 
                    pl-4 leading-7
                  "
                    >
                      <h2 className="text-center text-3xl pt-7 pb-1 title-info">
                        {posts[posts.length - 1].title}
                      </h2>
                      <span className="text-center block p-3">
                        Author:{posts[posts.length - 1].author}
                      </span>
                      <p className="overflow-hidden top-post indent-10 px-2  ">
                        {posts[posts.length - 1].content}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 gap-x-5  min-h-[500px] mt-8 ">
                  <div className="h-[300px] mb-5 relative flex items-center justify-center text-white ">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4WeyhKti831WXvZJGeU2Lbb4dHcbk5_t5Vg&usqp=CAU"
                      alt=""
                      className=" w-full h-[300px]"
                    />
                    <div className="absolute text-center topbox-item w-[85%] h-[85%]  bg-[#0000004d]">
                      <h3 className="text-center text-2xl p-3 ">
                        {posts[posts.length - 2].title}
                      </h3>

                      <p className="mt-4 text-center">
                        {posts[posts.length - 2].content}
                      </p>
                      <span className=" mt-4 block italic">
                        Author:{posts[posts.length - 2].author}
                      </span>
                    </div>
                  </div>
                  <div className="h-[300px] relative flex items-center justify-center text-white ">
                    <img
                      src="https://vietrektravel.com/ckeditor/plugins/fileman/Uploads/vietrel-travel/bai-viet/ky-quan-thien-nhien-the-gioi-tai-viet-nam/ky-quan-thien-nhien-vinh-ha-long-hai-phong.jpg"
                      alt=""
                      className="h-[300px] w-full "
                    />
                    <div className="absolute text-center topbox-item w-[85%] h-[85%]  bg-[#0000004d]">
                      <h3 className="text-center text-2xl p-3 ">
                        {posts[posts.length - 3].title}
                      </h3>

                      <p className="mt-4 text-center">
                        {posts[posts.length - 3].content}
                      </p>
                      <span className=" mt-4 block italic">
                        Author:{posts[posts.length - 3].author}
                      </span>
                    </div>
                  </div>
                  <div className="h-[300px] relative flex items-center justify-center text-white overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt=""
                      className="h-[300px]  w-full"
                    />
                    <div className="absolute text-center topbox-item w-[85%] h-[85%]  bg-[#0000004d]">
                      <h3 className="text-center text-2xl p-3 ">
                        {posts[posts.length - 3].title}
                      </h3>

                      <p className="mt-4 text-center">
                        {posts[posts.length - 3].content}
                      </p>
                      <span className=" mt-4 block italic">
                        Author:{posts[posts.length - 3].author}
                      </span>
                    </div>
                  </div>
                  <div className="h-[300px] text-center relative flex items-center justify-center text-white  mb-5">
                    <img
                      src="https://img4.thuthuatphanmem.vn/uploads/2019/12/16/anh-nen-thien-nhien-4k_024350402.jpg"
                      alt=""
                      className="h-[300px] w-full"
                    />
                    <div className="absolute topbox-item w-[85%] h-[85%]  bg-[#0000004d]">
                      <h3 className="text-center text-2xl p-3 ">
                        {posts[posts.length - 4].title}
                      </h3>

                      <p className=" mt-4 text-center">
                        Author:{posts[posts.length - 4].content}
                      </p>
                      <span className=" mt-4 block italic">
                        Author:{posts[posts.length - 4].author}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Boxleft />
          </div>
        )}
        <div className="text-center my-12">
          <h1 className="text-4xl md:6xl text-gray-700 font-semibold">
            All Blog
          </h1>
        </div>

        <div className="flex flex-wrap -m-4 lg:px-[3.2rem]">
          {posts.map((blg) => {
            return (
              <div
                className="p-4 sm:w-1/2 lg:w-1/3 w-full blog-item bg-white"
                key={blg._id}
              >
                <div className="h-full border-2  border-gray-300 border-opacity-60 rounded-3xl overflow-hidden">
                  <div className="title px-6 py-2 flex items-center ">
                    <div
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE50XUNVmCwLBsiboW_ezv-O6FK2KRmh38SQ&usqp=CAU"
                      alt="avataruser"
                      className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-500"
                    >
                      <span className="text-white uppercase">
                        {(vlName = blg.author[0])}
                      </span>
                    </div>
                    <span className="text-lg ml-3 ">{blg.author}</span>
                  </div>

                  <img
                    className="lg:h-72 md:h-48  w-full object-cover object-center"
                    src={blg.attachment}
                  />
                  <div className="p-6   transition duration-300 ease-linear">
                    <div className="flex items-center justify-end text-rose-800">
                      <h2>{(day = new Date(blg.createdAt).toDateString())}</h2>
                    </div>
                    <h1 className="text-2xl card-title font-semibold mb-2">
                      {blg.title}
                    </h1>
                    <p className="leading-relaxed mb-4   postitem-content  ">
                      {blg.content}
                    </p>
                  </div>
                  <div
                    className=" hover:underline  bg-slate-100
                    flex items-center flex-wrap justify-between border-t-2 cursor-pointer p-6"
                  >
                    <span
                      onClick={infoblog.bind(this, blg._id)}
                      className="hover:text-blue-700"
                    >
                      Read more
                    </span>
                    <div className="flex items-center   ">
                      <AiFillDelete
                        onClick={deletePost.bind(this, blg._id)}
                        className="text-[2rem] cursor-pointer hover:text-black"
                      />
                      <FaEdit
                        onClick={editpost.bind(this, blg._id)}
                        className="text-[1.5rem] cursor-pointer hover:text-cyan-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ListPost;
