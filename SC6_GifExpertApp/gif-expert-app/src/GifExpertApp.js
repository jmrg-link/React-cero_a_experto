import React, { Fragment, useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
  const [categories, setCategories] = useState([""]);

  return (
    <>
      <h2 className="animate__animated animate__lightSpeedInRight">APP GIFS ONLINE </h2>
      <p>Escribe el gif que deseas buscar.</p>
      <AddCategory setCategories={setCategories} />
      <hr></hr>
      <ol>
        {categories.map((category) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  );
};

export default GifExpertApp;
