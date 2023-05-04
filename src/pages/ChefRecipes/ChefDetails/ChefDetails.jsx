import React from "react";
import ChefRecipeHeroBG from "../../../assets/ChefRecipes/hero-background.jpg";
import { SiStarship } from "react-icons/si";
import { MdFoodBank } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";

const ChefDetails = ({chefDetails}) => {
    const { name, photo_url, years_of_experience, recipe_count, short_bio } = chefDetails;
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${ChefRecipeHeroBG})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <div className="avatar">
            <div className="w-52 rounded">
              <img src={photo_url} />
            </div>
          </div>
          <h1 className="mb-5 text-2xl md:text-5xl font-bold">{name}</h1>
          <p className="mb-5">{short_bio}</p>
          <div className="stats shadow grid-flow-row w-full md:w-fit md:grid-flow-col">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <SiStarship size={30} color="rgb(249 115 22)" />
              </div>
              <div className="stat-title">Experience</div>
              <div className="stat-value">{years_of_experience}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <MdFoodBank size={40} color="rgb(249 115 22)" />
              </div>
              <div className="stat-title">Recipes</div>
              <div className="stat-value">{recipe_count}</div>
            </div>
            <div className="stat">
              <div className="stat-figure text-secondary">
                <AiFillLike size={30} color="rgb(249 115 22)" />
              </div>
              <div className="stat-title">Likes</div>
              <div className="stat-value">12</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
