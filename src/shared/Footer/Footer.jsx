import React from "react";
import { Link } from "react-router-dom";
import {ImFacebook, ImInstagram, ImTwitter} from 'react-icons/im';

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/blog" className="link link-hover">Blog</Link>
        <Link to="/login" className="link link-hover">Login</Link>
        <Link to="/register" className="link link-hover">Register</Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <a>
            <ImFacebook size={30}/>
          </a>
          <a>
            <ImInstagram size={30}/>
          </a>
          <a>
            <ImTwitter size={30}/>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by Tasty Recipes Co.</p>
      </div>
    </footer>
  );
};

export default Footer;
