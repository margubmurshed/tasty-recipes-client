import React from "react";
import Hero from "./Hero/Hero";
import Chefs from "./Chefs/Chefs";
import Image1 from "../../assets/Home/photo1.jpg";
import Man from "../../assets/Home/man.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
const Home = () => {
  return (
    <div>
      <Hero />
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
      <Chefs />
      <div className="container mx-auto my-16">
        <h2 className="text-4xl text-center font-semibold md:flex md:flex-col mb-3">
          What People Say
        </h2>
        <div className="py-5">
          <Swiper
            spaceBetween={40}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            modules={[Pagination]}
            pagination={{
              clickable: true,
            }}
          >
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <SwiperSlide key={num}>
                <div className="text-center border rounded-md p-5">
                  <img src={Man} alt="mane" className="w-24 h-24 rounded-full object-cover mx-auto mb-5" />
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Quod deleniti minima, dolore placeat ab quisquam laborum
                    doloribus facere quis, eos odit nemo? Nobis, officiis
                    numquam. Odio esse nisi accusantium perspiciatis.
                  </p>
                  <div className="mt-5">
                    <h3 className="font-semibold text-xl">Marcus Stoinis</h3>
                    <p>Student</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Home;
