import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { FaGoogle, FaGithubSquare } from "react-icons/fa";
import { AuthContext } from "../../../Contexts/UserContext";

const SocialLogin = () => {
  const { googleLogin, githubLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const hangleGitHubLogin = () => {
    githubLogin()
      .then((result) => {
        // console.log(result.user);
        toast.success("Successfully Login");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(`${error.message}`);
      });
  };
  const hangleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        fetch(`http://localhost:4000/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            localStorage.setItem("token", data.token);
            toast.success("Successfully Login");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        toast.error("Failed to Login");
        console.log(error.message);
      });
  };

  return (
    <div className="flex justify-center">
      <button onClick={hangleGitHubLogin}>
        <FaGithubSquare className="text-3xl text-slate-600 pr-1 mx-1"></FaGithubSquare>
      </button>
      <button onClick={hangleGoogleLogin}>
        <FaGoogle
          className="bg-slate-600 text-white p-1 rounded mx-1"
          style={{ fontSize: "26px" }}
        ></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
