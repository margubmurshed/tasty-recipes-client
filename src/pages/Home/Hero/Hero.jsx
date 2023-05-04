import React from "react";
import Image1 from "../../../assets/Home/photo1.jpg";
import BGImg from "../../../assets/Home/hero-background-image.png";

const Hero = () => {
  return (
    <>
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
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5 border">
        <div>
          <img
            src={Image1}
            alt="image"
            className="w-full object-cover"
            style={{ maxHeight: 400 }}
          />
        </div>
        <div className="flex flex-col justify-center p-5">
          <h2 className="text-3xl md:text-5xl font-semibold md:flex md:flex-col mb-3">
            <span>One thousand flavors</span> <span>in one place.</span>
          </h2>
          <p>
            Tortor scelerisque feugiat nibh ridiculus nisi si. Enim penatibus ac
            sed primis convallis fames taciti dolor tempor. Faucibus morbi
            posuere sagittis turpis class vivamus penatibus ornare mollis donec
            scelerisque. Tortor scelerisque feugiat nibh ridiculus nisi si. Enim
            penatibus ac sed primis convallis fames taciti dolor tempor.
            Faucibus morbi posuere sagittis turpis class vivamus penatibus
            ornare mollis donec scelerisque.
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;
