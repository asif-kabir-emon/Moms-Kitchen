import React, { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";
import loginLogo from "../../Assets/Images/login.webp";
import { Link } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Contexts/UserContext";

const Login = () => {
  useTitle("Login");
  const { emailpasswordLogin } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleUserLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    emailpasswordLogin(email, password)
      .then((result) => {
        const user = result.user;
        setErrorMessage("");
        const currentUser = {
          email: user.email,
        };
        fetch(`https://moms-kitchen-service-server.vercel.app/jwt`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("token", data.token);
            toast.success("Successfully Login");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error("Failed to Login");
      });
  };

  return (
    <div className="hero">
      <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row mt-2 md:mt-28">
        <div className="hidden md:block">
          <img src={loginLogo} className="w-full" alt="" />
        </div>
        <div className="card w-96 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body w-full">
            <h2 className="text-4xl font-bold text-center">Login</h2>
            <p className="text-xs text-red-500 text-center">{errorMessage}</p>
            <form onSubmit={handleUserLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                {/* <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <div className="divider">Or</div>
            <p className="text-center">Log In with</p>
            <SocialLogin></SocialLogin>
            <p className="text-center">
              Don't have an account?
              <Link to="/register" className="text-red-600 ml-1">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
