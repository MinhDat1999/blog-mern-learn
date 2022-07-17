import React, { useContext, useEffect, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { PostContext } from "../Context/postContext";

const ModalUpdate = () => {
  const {
    setModal,
    updatePost,
    postState: { post },
  } = useContext(PostContext);
  const [updateitem, setupdateitem] = useState(post);
  const { title, content, attachment, _id } = updateitem;
  useEffect(() => {
    setupdateitem(post);
  }, [post]);
  const handlefile = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    console.log(base64);
    setupdateitem({
      _id: _id,
      title: title,
      content: content,
      attachment: base64,
    });
  };
  // submit
  const SubmitItem = async (e) => {
    e.preventDefault();

    const { success, message } = await updatePost(updateitem);
    if (!success) {
      alert("Bạn không có quyển sửa bài viết của người khác");
    }
    setModal();
  };
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
  const changeupdate = (e) => {
    setupdateitem({
      ...updateitem,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div className="w-full h-full z-20 bg-[#0000008f]  fixed flex justify-center ">
      <div
        className="h-[700px] overflow-hidden w-[90%] mt-3
        bg-white shadow-2xl shadow-black rounded-2xl"
      >
        <AiFillCloseCircle
          className="text-4xl float-right cursor-pointer"
          onClick={setModal}
        />
        <h1 className="text-center py-5 text-2xl font-mono ">
          ✏️Edit Your Blog
        </h1>
        <form
          action=""
          className="lg:w-3/4 mx-auto h-full  p-[2rem]"
          onSubmit={SubmitItem}
        >
          <div className="py-4">
            <label htmlFor="titlepost" className="block">
              Title:
            </label>
            <input
              onChange={changeupdate}
              name="title"
              required
              value={title}
              id="titlepost"
              type="text"
              className="w-full px-2 outline-none  border-b-2 border-gray-400"
            />
          </div>
          <div>
            <label htmlFor="content" className="block">
              Content:
            </label>
            <textarea
              onChange={changeupdate}
              name="content"
              value={content}
              className="w-full p-[2.5rem] my-4 border-2 border-gray-400 outline-none"
            ></textarea>
          </div>
          <div className="flex  items-center">
            <img
              src={attachment}
              alt=""
              className="w-[200px] h-[150px] object-cover object-center mr-3"
            />
            <input type="file" onChange={(e) => handlefile(e)} />
          </div>

          <div className="mt-5">
            <button
              type="submit"
              className="inline-block w-full lg:w-[6rem] bg-black h-[3rem] text-white text-lg float-right "
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalUpdate;
