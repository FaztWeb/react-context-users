import React, { useReducer } from "react";
import axios from "axios";

import UserContext from "./UserContext";
import UserReducer from "./UserReducer";

import { GET_USERS, GET_PROFILE } from "../types";

const UserState = (props) => {
  const initialState = {
    users: [],
    selectedUser: null,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const getUsers = async () => {
    try {
      const res = await axios.get("https://reqres.in/api/users");
      const data = res.data.data;
      dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const getProfile = async (id) => {
    try {
      const res = await axios.get("https://reqres.in/api/users/" + id);
      const { data }= res;
      dispatch({ type: GET_PROFILE, payload: data.data });
    } catch (error) {}
  };

  return (
    <UserContext.Provider
      value={{
        users: state.users,
        selectedUser: state.selectedUser,
        getUsers,
        getProfile,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
