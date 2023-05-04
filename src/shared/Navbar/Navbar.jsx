import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut().catch(err => console.log(err.message))
  }
  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-orange-400" : ""
                  }
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "bg-orange-500" : ""
                  }
                  to="/blog"
                >
                  Blog
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <NavLink to="/" className="btn btn-ghost normal-case text-xl">
            Tasty Recipes
          </NavLink>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-hover">
              <div className="avatar relative mt-2" tabIndex={0}>
                <div className="w-10 rounded-full ring ring-info ring-offset-base-100 ring-offset-2">
                  <img
                    src={
                      user.photoURL ||
                      "https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
                    }
                    alt="user photo"
                  />
                  <div className="opacity-0 username transition absolute right-0 top-full w-fit p-3 rounded-md bg-info text-white font-bold"></div>
                </div>
              </div>
              <ul
                tabIndex={0}
                className="opacity-0 absolute -left-40 menu p-2 shadow bg-gray-100 rounded-box w-52"
              >
                <li>
                  <a>{user.displayName || "User"}</a>
                </li>
                <li>
                  <button onClick={handleLogOut}>Sign Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <NavLink to="/login" className="btn btn-ghost btn-circle">
              <FiLogIn size={20} />
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
