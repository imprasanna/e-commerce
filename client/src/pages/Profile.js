import React from "react";
import Login from "./Login";

const Profile = () => {
  return (
    <>
      <div className="w-full">
        <p className="text-center pt-4">
          <span className="text-xl font-semibold border-b-[3px] border-black pb-1">
            My Account
          </span>
        </p>

        <Login />
      </div>
    </>
  );
};

export default Profile;
