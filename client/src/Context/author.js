import React, { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";
import { authReduce } from "../Reducer/reducerAuth";
import { apiURL, LOCAL_STORAGE_TOKEN_NAME } from "./constants";

import setAuth from "../untils/setAuth";
export const AuthorContext = createContext();
const AuthorContextProvier = ({ children }) => {
  const [author, dispatch] = useReducer(authReduce, {
    authLoading: true,
    isAuthenticated: false,
    user: null,
  });

  //check
  const loadUser = async () => {
    if (localStorage[LOCAL_STORAGE_TOKEN_NAME]) {
      setAuth(localStorage[LOCAL_STORAGE_TOKEN_NAME]);
    }
    try {
      const response = await axios.get(`${apiURL}/auth`);
      if (response.data.success) {
        dispatch({
          type: "SET_AUTH",
          payload: {
            isAuthenticated: true,
            user: response.data.user,
          },
        });
      }
    } catch (error) {
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
      setAuth(null);
      dispatch({
        type: "SET_AUTH",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };
  useEffect(() => loadUser, []);
  //login
  const loginUser = async (userForm) => {
    try {
      const response = await axios.post(`${apiURL}/auth/login`, userForm);
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  //logout

  //reggister
  const registerUser = async (registerForm) => {
    try {
      const response = await axios.post(
        `${apiURL}/auth/register`,
        registerForm
      );
      if (response.data.success) {
        localStorage.setItem(
          LOCAL_STORAGE_TOKEN_NAME,
          response.data.accessToken
        );
      }
      return response.data;
    } catch (error) {
      if (error.response.data) return error.response.data;
      else return { success: false, message: error.message };
    }
  };
  const LogUser = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_NAME);
    dispatch({
      type: "SET_AUTH",
      payload: { isAuthenticated: false, user: null },
    });
  };
  const authContextData = {
    loginUser,
    author,
    registerUser,
    LogUser,
    loadUser,
  };

  return (
    <AuthorContext.Provider value={authContextData}>
      {children}
    </AuthorContext.Provider>
  );
};
export default AuthorContextProvier;
