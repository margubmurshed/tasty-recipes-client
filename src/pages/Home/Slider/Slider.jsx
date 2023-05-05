import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { info } from "../../../assets/Home/slider";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
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
          {info.map(({ id, name, profession, photoUrl, recipeReview }) => (
            <SwiperSlide key={id}>
              <div className="text-center border rounded-md p-5">
                <img
                  src={photoUrl}
                  alt="mane"
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-5"
                />
                <p>{recipeReview}</p>
                <div className="mt-5">
                  <h3 className="font-semibold text-xl">{name}</h3>
                  <p>{profession}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
