import React from "react";
import photo from "../../assets/register/photo1.jpg";
import { Link } from "react-router-dom";

const Register = () => {
  const handleRegister = (event) => {
    event.preventDefault();
  };
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 md:h-image-fixed"
    >
      <div className="hidden md:block">
        <img
          src={photo}
          className="w-full object-cover h-image-fixed"
        />
      </div>
      <div className="card flex-shrink-0 w-full px-10 md:overflow-y-auto">
        <div className="card-body">
          <div className="pt-5">
            <h2 className="text-3xl font-semibold">
              Welcome to a Tasty World!
            </h2>
            <p className="text-gray-400">
              Register with your email address and password
            </p>
          </div>
          <form onSubmit={handleRegister}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                placeholder="Photo URL"
                name="photourl"
                className="input input-bordered"
              />
            </div>
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
            </div>
            <div className="mt-6">
              <button className="btn btn-error px-8 capitalize rounded-none">
                Register
              </button>
            </div>
          </form>
          <Link to="/login" className="mt-5">
            Already an user?
            <span className="text-error font-semibold ml-2">Login now</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
