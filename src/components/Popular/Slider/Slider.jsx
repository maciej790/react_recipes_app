/* eslint-disable react/prop-types */
import React from "react";
import RecipeCard from "../../RecipeCard/RecipeCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { options } from "./PopularOptions";
import "@splidejs/splide/dist/css/splide.min.css";

function Slider({ recipes, isLoading, error }) {
  if (isLoading) return <p>Loading...</p>;
  else if (error) return <p>Error!</p>;

  return (
    <Splide options={options}>
      {recipes.map(({ id, title, image, readyInMinutes }) => (
        <SplideSlide key={id}>
          <RecipeCard title={title} image={image} ready={readyInMinutes} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Slider;
