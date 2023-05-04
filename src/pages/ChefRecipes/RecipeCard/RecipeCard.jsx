import React from "react";
import { MdFavorite } from "react-icons/md";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";


const RecipeCard = ({isFavourite, recipe, handleSetFavorite}) => {
    const { id, cooking_method, ingredients, name, rating } = recipe;
  return (
    <div
      className={`p-5 rounded-md shadow-md border ${
        isFavourite ? "border-secondary" : ""
      } self-start`}
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
        <Rating style={{ maxWidth: 120 }} value={Math.floor(rating)} />
        <span className="font-semibold">{rating} Stars</span>
      </div>
      <button
        className="btn btn-secondary btn-outline gap-2 mt-5"
        onClick={() => handleSetFavorite(id)}
        disabled={isFavourite}
      >
        <MdFavorite size={20} /> Make It Favourite
      </button>
    </div>
  );
};

export default RecipeCard;
