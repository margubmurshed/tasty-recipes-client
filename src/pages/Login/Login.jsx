import React from "react";
import photo from "../../assets/login/photo1.jpg";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { Link } from "react-router-dom";

const Login = () => {
  const handleLogin = (event) => {
    event.preventDefault();
  }
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      <div className="card flex-shrink-0 w-full px-10">
        <div className="card-body">
          <div className="pt-5">
            <h2 className="text-3xl font-semibold">Welcome Back!</h2>
            <p className="text-gray-400">
              Login with your email address and password
            </p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                name="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="mt-6">
              <button className="btn btn-success px-8 capitalize rounded-none">
                Login
              </button>
            </div>
          </form>
          <Link to="/register" className="mt-5">
            New to this website?
            <span className="text-success font-semibold ml-2">Register now</span>
          </Link>
          <div className="flex flex-wrap gap-3 mt-5">
            <button className="btn btn-info w-full md:w-fit flex items-center gap-2">
              <BsGoogle size={20} /> <span>Login with Google</span>
            </button>
            <button className="btn w-full md:w-fit flex items-center gap-2">
              <BsGithub size={20} /> <span>Login with Github</span>
            </button>
          </div>
        </div>
      </div>
      <div className="hidden md:block">
        <img
          src={photo}
          className="w-full object-cover"
          style={{ height: "calc(100vh - 64px)" }}
        />
      </div>
    </div>
  );
};

export default Login;
