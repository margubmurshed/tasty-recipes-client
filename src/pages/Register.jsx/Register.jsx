import React, { useContext, useState } from "react";
import photo from "../../assets/register/photo1.jpg";
import {AuthContext} from '../../providers/AuthProvider'
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");
  const {user, createUser, setProfileInfo} = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    const photourl = form.photourl.value;
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
      setError("Email is not valid");
      return
    }
    if(password.length < 6) {
      setError("Password length can not be less than 6 characters");
      return
    }
    createUser(email, password)
    .then(() => {
      form.reset();
      setProfileInfo(name, photourl).then(() => navigate(from))
    })
    .catch(err => setError(err.message))
  };

  if(user) return <Navigate to="/"/>
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:h-image-fixed relative">
      <div className="hidden md:block">
        <img src={photo} className="w-full object-cover h-image-fixed" />
      </div>
      <div className="card flex-shrink-0 w-full md:px-10 md:overflow-y-auto">
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
                required
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
                required
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
                required
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
                required
              />
            </div>
            <div className="mt-6">
              <button className="btn btn-error px-8 capitalize rounded-none" type="submit">
                Register
              </button>
            </div>
          </form>
          <Link to="/login" state={{from}} className="mt-5">
            Already an user?
            <span className="text-error font-semibold ml-2">Login now</span>
          </Link>
        </div>
      </div>
      {error && (
        <div className="toast toast-top toast-end absolute top-0 right-0" onClick={() => setError("")}>
          <div className="alert alert-error">
            <div>
              <span>{error}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
