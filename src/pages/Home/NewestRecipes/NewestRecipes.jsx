import React from "react";
import { Link } from "react-router-dom";
import image1 from "../../../assets/Home/Texas-Style-Beef-Brisket.jpg";
import image2 from "../../../assets/Home/All-American-Banana-Split.jpg";
import image3 from "../../../assets/Home/Golden-Apple-Pie.jpg";

const NewestRecipes = () => {
  return (
    <section className="bg-blue-500">
      <div className="container mx-auto">
        <h2 className="text-center text-3xl text-white font-bold mb-5 pt-10 pb-5 uppercase">
          Newest Recipes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5">
          <div className="rounded-md bg-white p-5 border md:-mb-10 shadow-md">
            <img
              src={image1}
              alt="Texas-Style Beef Brisket"
              className="w-full h-52 rounded-md object-cover"
            />
            <div className="mt-3 space-y-3">
            <h3 className="text-xl font-semibold ">Texas-Style Beef Brisket</h3>
            <h4 className="font-semibold text-gray-200 text-3xl">Gordon Ramsay</h4>
            <Link
              to="https://tasty-recipes-margub.web.app/chef/7525bbe3632d/recipes"
              className="btn btn-primary bg-orange-500 border-orange-500 hover:border-orange-500 hover:bg-orange-600"
            >
              View Recipe
            </Link>
            </div>
          </div>
          <div className="rounded-md bg-white p-5 border md:-mb-10 shadow-md">
            <img
              src={image2}
              alt="Texas-Style Beef Brisket"
              className="w-full h-52 rounded-md object-cover"
            />
            <div className="mt-3 space-y-3">
            <h3 className="text-xl font-semibold ">All-American Banana Split</h3>
            <h4 className="font-semibold text-gray-200 text-3xl">Mario Batali</h4>
            <Link
              to="https://tasty-recipes-margub.web.app/chef/7525bbe3632d/recipes"
              className="btn btn-primary bg-orange-500 border-orange-500 hover:border-orange-500 hover:bg-orange-600"
            >
              View Recipe
            </Link>
            </div>
          </div>
          <div className="rounded-md bg-white p-5 border md:-mb-10 shadow-md">
            <img
              src={image3}
              alt="Texas-Style Beef Brisket"
              className="w-full h-52 rounded-md object-cover"
            />
            <div className="mt-3 space-y-3">
            <h3 className="text-xl font-semibold">Golden Apple Pie</h3>
            <h4 className="font-semibold text-gray-200 text-3xl">Ina Garten</h4>
            <Link
              to="https://tasty-recipes-margub.web.app/chef/7525bbe3632d/recipes"
              className="btn btn-primary bg-orange-500 border-orange-500 hover:border-orange-500 hover:bg-orange-600"
            >
              View Recipe
            </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewestRecipes;
