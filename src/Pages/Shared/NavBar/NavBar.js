import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/logo-i.png";
import { AuthContext } from "../../../Contexts/UserContext";

const NavBar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const hangleLogOut = () => {
    userLogout()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  const menuItems = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      {user?.uid ? (
        <>
          <li>
            <button
              onClick={hangleLogOut}
              className="btn btn-primary text-white"
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          {" "}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="flex items-center normal-case">
          <img src={logo} alt="" className="h-10 md:h-14 lg:h-18" />
          <p className="ml-2 text-xs md:text-xl">Mom's Kitchen</p>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end">
        <Link href="/" className="btn btn-sm normal-case md:btn-md">
          Our Blog
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
