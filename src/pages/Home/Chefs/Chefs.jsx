import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import {SiStarship} from 'react-icons/si';
import {MdFastfood} from 'react-icons/md';
import {AiFillLike} from 'react-icons/ai';

const ChefsSection = () => {
  const { chefs } = useLoaderData();
  return (
    <div className="container mx-auto px-5 py-16">
      <h2 className="text-3xl text-center font-bold">Our Chefs</h2>
      <div className="grid md:grid-cols-3 gap-5 mt-5">
        {chefs.map(
          ({ id, name, photo_url, recipe_count, years_of_experience }) => (
            <div className="card bg-base-100 shadow-xl" key={id}>
              <figure>
                <img
                  src={photo_url}
                  className="h-52 w-full object-cover object-top"
                  alt="chefs"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className="flex items-center gap-1">
                    <SiStarship size={20}/>
                    <span>{years_of_experience} years of experience</span>
                </p>
                <p className="flex items-center gap-1">
                    <MdFastfood size={20}/>
                    <span>{recipe_count} recipes</span>
                </p>
                <p className="flex items-center gap-1">
                    <AiFillLike size={20}/>
                    <span>12 Likes</span>
                </p>
                <div className="card-actions justify-end">
                  <Link to={`/chef/${id}/recipes`} className="btn btn-primary bg-orange-500 border-orange-500 hover:border-orange-500 hover:bg-orange-600">
                    View Recipes
                  </Link>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ChefsSection;
