import React, { useEffect, useState } from "react";
import ChefRecipeHeroBG from "../../assets/ChefRecipes/hero-background.jpg";
import { useLoaderData } from "react-router-dom";
import { SiStarship } from "react-icons/si";
import { MdFoodBank, MdFavorite } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ChefRecipes = () => {
  const [chefDetails, chefRecipes] = useLoaderData();
  const [favorites, setFavorites] = useState([]);
  const { id:chefID, name, photo_url, years_of_experience, recipe_count } =
    chefDetails;

  const handleSetFavorite = (id) => {
    const updatedFavorites = [...favorites, {cID: chefID, recipeID:id}]
    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
  }

  useEffect(() => {
    const jsonData = localStorage.getItem('favorites');
    const fetchedFavorites = jsonData ? JSON.parse(jsonData) : [];
    setFavorites(fetchedFavorites);
  }, [])
  return (
    <div>
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
            <p className="mb-5">
              {name} is a renowned American chef who has made a name for himself
              in the culinary world through his passion for bold flavors and
              innovative cooking techniques. With a career spanning over three
              decades, Bobby has become a household name and has cemented
              himself as one of America's most celebrated chefs.
            </p>
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
      <div className="container mx-auto p-5 py-16">
        <h2 className="text-3xl text-center font-bold">Chef's Recipes</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-5">
          {chefRecipes.map(
            ({ id, cooking_method, ingredients, name, rating }) => {
              const isFavourite = !!favorites.find(
                ({ cID, recipeID }) => chefID === cID && id === recipeID
              );
              return (
                <div
                  className={`p-5 rounded-md shadow-md border ${isFavourite ? 'border-secondary' : ""} self-start`}
                  key={id}
                >
                  <div>
                    <h3 className="font-bold text-xl">{name}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2 my-3">
                    {ingredients.map((ingredient) => (
                      <span
                        className="px-2 py-1 border text-xs bg-gray-200 rounded-full"
                        key={ingredient}
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                  <div>
                    <h4 className="mt-5 mb-2">Cooking Steps:</h4>
                    <ul className="list-disc ml-5">
                      {cooking_method.map((step) => (
                        <li className="text-sm" key={step}>
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center gap-3 mt-5">
                    <Rating
                      style={{ maxWidth: 120 }}
                      value={Math.floor(rating)}
                    />
                    <span className="font-semibold">{rating} Stars</span>
                  </div>
                  <button className="btn btn-secondary btn-outline gap-2 mt-5" onClick={() => handleSetFavorite(id)} disabled={isFavourite}>
                    <MdFavorite size={20} /> Make It Favourite
                  </button>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default ChefRecipes;
