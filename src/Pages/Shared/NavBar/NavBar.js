import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
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
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : undefined
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-orange-600" : undefined
          }
        >
          Services
        </NavLink>
      </li>
      {user?.uid && (
        <>
          <li>
            <NavLink
              to="/myReviews"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : undefined
              }
            >
              My Reviews
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/addService"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : undefined
              }
            >
              Add Service
            </NavLink>
          </li>
        </>
      )}
    </>
  );

  const profileItems = (
    <>
      {user?.uid ? (
        <>
          <li>
            <button
              onClick={hangleLogOut}
              className="btn btn-outline btn-primary normal-case btn-md text-white"
            >
              Log Out
            </button>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : undefined
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive ? "text-orange-600" : undefined
              }
            >
              Register
            </NavLink>
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
        <ul className="menu menu-horizontal p-0">{profileItems}</ul>
      </div>
    </div>
  );
};

export default NavBar;
