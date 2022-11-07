import React from "react";
import { FaGoogle, FaGithubSquare } from "react-icons/fa";

const SocialLogin = () => {
  return (
    <div className="flex justify-center">
      <button>
        <FaGithubSquare className="text-3xl text-slate-600 pr-1 mx-1"></FaGithubSquare>
      </button>
      <button>
        <FaGoogle
          className="bg-slate-600 text-white p-1 rounded mx-1"
          style={{ fontSize: "26px" }}
        ></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
