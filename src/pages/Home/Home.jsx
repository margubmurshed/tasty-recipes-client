import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Chefs from "./Chefs/Chefs";
import Slider from "./Slider/Slider";
import { useState } from "react";
import NewestRecipes from "./NewestRecipes/NewestRecipes";
import FeaturedChef from "./FeaturedChef/FeaturedChef";
const Home = () => {
  const [chefs, setChefs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Tasty Recipes"
    fetch(
      "https://tasty-recipes-server-margubtech-gmailcom.vercel.app/allChefsDetails"
    )
      .then((data) => data.json())
      .then((data) => {
        setChefs(data.chefs);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedChef />
      <Chefs chefs={chefs} loading={loading} />
      <NewestRecipes />
      <Slider />
    </div>
  );
};

export default Home;
