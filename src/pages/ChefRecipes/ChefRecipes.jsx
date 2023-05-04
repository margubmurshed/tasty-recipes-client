import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ChefDetails from "./ChefDetails/ChefDetails";
import RecipeCard from "./RecipeCard/RecipeCard";

const ChefRecipes = () => {
  const [chefDetails, chefRecipes] = useLoaderData();
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState("")
  const { id: chefID } = chefDetails;

  const handleSetFavorite = (id) => {
    const updatedFavorites = [...favorites, { cID: chefID, recipeID: id }];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setMessage("The recipe is your favourite!")
  };

  useEffect(() => {
    const jsonData = localStorage.getItem("favorites");
    const fetchedFavorites = jsonData ? JSON.parse(jsonData) : [];
    setFavorites(fetchedFavorites);
  }, []);
  return (
    <div>
      <ChefDetails chefDetails={chefDetails} />
      <div className="container mx-auto p-5 py-16 relative">
        <h2 className="text-3xl text-center font-bold">Chef's Recipes</h2>
        <div className="grid md:grid-cols-3 gap-3 mt-5">
          {chefRecipes.map((recipe) => {
            const isFavourite = !!favorites.find(
              ({ cID, recipeID }) => chefID === cID && recipe.id === recipeID
            );
            return (
              <RecipeCard
                key={recipe.id}
                isFavourite={isFavourite}
                recipe={recipe}
                handleSetFavorite={handleSetFavorite}
              />
            );
          })}
        </div>
        {message && (
        <div className="toast toast-top toast-end absolute top-0 right-0" onClick={() => setMessage("")}>
          <div className="alert alert-success">
            <div>
              <span>{message}</span>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default ChefRecipes;
