/* eslint-disable react/prop-types */
import React from "react";
import RecipeCard from "../../RecipeCard/RecipeCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { sliderOptions } from "./sliderOptions";
import "@splidejs/splide/dist/css/splide.min.css";
import Loader from "../../Loader/Loader";

function Slider({ recipes, isLoading, error }) {
  if (isLoading) return <Loader />;
  else if (error) return <p>Error!</p>;

  return (
    <Splide options={sliderOptions}>
      {recipes.map(({ id, title, image, readyInMinutes }) => (
        <SplideSlide key={id}>
          <RecipeCard title={title} image={image} ready={readyInMinutes} />
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Slider;
