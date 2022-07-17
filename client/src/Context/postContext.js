import { createContext, useReducer, useState } from "react";
import { postReducer } from "../Reducer/postReducer";
import {
  apiURL,
  ADD_POST,
  DELETE_POST,
  UPDATE_POST,
  FIND_POST,
} from "./constants";
import axios from "axios";

export const PostContext = createContext();
const PostContextProvider = ({ children }) => {
  // state post
  const [postState, dispatch] = useReducer(postReducer, {
    post: null,
    posts: [],
    postLoanding: true,
  });

  const [togle, settogle] = useState(false);

  const setTogle = () => {
    settogle(!togle);
  };
  const [togleUpdateMoadal, settogleUpdateModal] = useState(false);
  const setModal = () => {
    settogleUpdateModal(!togleUpdateMoadal);
  };
  // find  info of post when user click item
  const findpost = (postid) => {
    const post = postState.posts.find((post) => post._id === postid);
    dispatch({
      type: FIND_POST,
      payload: post,
    });
  };
  // update post
  const updatePost = async (postupdate) => {
    try {
      const response = await axios.put(
        `${apiURL}/post/${postupdate._id}`,
        postupdate
      );
      if (response.data.success) {
        dispatch({
          type: UPDATE_POST,
          payload: response.data.post,
        });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "sever lỗi" };
    }
  };
  // Get all post
  const getPost = async () => {
    try {
      const response = await axios.get(`${apiURL}/post`);
      if (response.data.success) {
        dispatch({
          type: "POST_LOADING_SUCCESS",
          payload: response.data.posts,
        });
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Lỗi sever" };
    }
  };

  // delete post
  const deletePost = async (postId) => {
    try {
      const response = await axios.delete(`${apiURL}/post/${postId}`);
      if (response.data.success) {
        dispatch({
          type: DELETE_POST,
          payload: postId,
        });
      }
    } catch (error) {
      console.log(error);
      alert("Bạn không có quyền xóa bài viết của người khác");
    }
  };
  // add Post
  const addPost = async (newpost) => {
    try {
      const response = await axios.post(`${apiURL}/post`, newpost);
      if (response.data.success) {
        dispatch({
          type: ADD_POST,
          payload: response.data.post,
        });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "sever lỗi" };
    }
  };
  const PostContextData = {
    postState,
    getPost,
    togle,
    setTogle,
    addPost,
    deletePost,
    updatePost,
    findpost,
    togleUpdateMoadal,
    setModal,
  };

  return (
    <PostContext.Provider value={PostContextData}>
      {children}
    </PostContext.Provider>
  );
};
export default PostContextProvider;
