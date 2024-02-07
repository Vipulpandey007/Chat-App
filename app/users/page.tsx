"use client";
import { signOut } from "next-auth/react";

const Users = () => {
  return <button onClick={() => signOut()}>Signout</button>;
};
export default Users;
