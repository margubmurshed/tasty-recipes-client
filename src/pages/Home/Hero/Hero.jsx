import React from 'react';
import BGImg from "../../../assets/Home/hero-background-image.png";

const Hero = () => {
    return (
        <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${BGImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              It is even better than an expensive cookery book
            </h1>
            <p className="mb-5">
              Learn how to make your favorite restaurant’s dishes
            </p>
          </div>
        </div>
      </div>
    );
};

export default Hero;