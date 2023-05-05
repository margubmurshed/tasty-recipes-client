import React, { useEffect } from "react";
import Hero from "./Hero/Hero";
import Chefs from "./Chefs/Chefs";
import Slider from "./Slider/Slider";
import { useState } from "react";
const Home = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch("https://tasty-recipes-server-margubtech-gmailcom.vercel.app/allChefsDetails")
    .then(data => data.json())
    .then(data => setChefs(data.chefs))
  }, [])

  return (
    <div>
      <Hero />
      <Chefs chefs={chefs}/>
      <Slider />
    </div>
  );
};

export default Home;
