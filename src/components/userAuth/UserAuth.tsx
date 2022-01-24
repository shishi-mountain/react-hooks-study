import React from "react";
import AuthButton from "./AuthBotton";
import AuthDisplay from "./AuthDisplay";

const UserAuth: React.VFC = () => {
  return (
    <div>
      <h4>ユーザー認証</h4>
      <AuthButton />
      <AuthDisplay />
    </div>
  );
};

export default UserAuth;
