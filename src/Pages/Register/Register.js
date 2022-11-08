import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import useTitle from "../../Hooks/useTitle";
import registerLogo from "../../Assets/Icons/register.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import { AuthContext } from "../../Contexts/UserContext";

const Register = () => {
  useTitle("Register");
  const { register, updateUserInfo } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.form?.user || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, email, password);

    register(email, password)
      .then(() => {
        setErrorMessage("");
        handleUpdateUserInfo(name);
        toast.success("Succefully Registered");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setErrorMessage(error.message);
        toast.error("Failed to Register");
      });
  };

  const handleUpdateUserInfo = (name) => {
    updateUserInfo({ displayName: name })
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero">
      <div className="hero-content grid md:grid-cols-2 gap-10 flex-col lg:flex-row mt-2 md:mt-28">
        <div className="flex justify-center">
          <img src={registerLogo} className="w-3/4" alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body w-full">
            <h2 className="text-4xl font-bold text-center">Register</h2>
            <p className="text-xs text-red-500 text-center">{errorMessage}</p>
            <form onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
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
            <p className="text-center">Sign Up with</p>
            <SocialLogin></SocialLogin>
            <p className="text-center">
              Already have an account?
              <Link to="/login" className="text-red-600 ml-1">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
