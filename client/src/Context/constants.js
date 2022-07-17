export const apiURL =
  process.env.NODE_ENV !== "production"
    ? "https://boiling-anchorage-62774.herokuapp.com/api"
    : "http://localhost:5001/api";

export const LOCAL_STORAGE_TOKEN_NAME = "token-user";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const FIND_POST = "FIND_POST";
