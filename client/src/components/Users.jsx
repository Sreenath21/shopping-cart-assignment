import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchUsers } from "../features/users/UserSlice";

const Users = () => {
  const { loading, data: users, error } = useSelector((state) => state.users);
  console.log(loading, users, error);

  return (
    <div>
      <a href="/">Back to home</a>Users
    </div>
  );
};

export const DataLoader = async () => {
  const dispatch = useDispatch();
  console.log("fetch");
  dispatch(fetchUsers());
  return null;
};

export default Users;
