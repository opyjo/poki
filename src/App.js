import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Form from "./components/Form";
import Search from "./components/Search";
import Pokemon from "./components/Pokemon";
import Review from "./components/Review";

const App = () => {
  const notify = () => toast("Please select your favorite Pokemon!");
  let navigate = useNavigate();
  // This code  creates a state variable called "pokemon" and sets it to an empty object.
  const [isPokemonSelected, setIsPokemonSelected] = useState(false);
  const [pokemon, setPokemon] = useState({});
  //this code creates a state variable called "reviewObject" and sets it to an empty object. The object is used to store the user's input.
  const [reviewObject, setReviewObject] = useState({});

  // This code makes a request to the API to get the data for the pokemon
  const searchPokemon = async (term) => {
    const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`);
    setPokemon(res.data);
    setIsPokemonSelected(true);
  };

  // This function is used to store the user's input in the reviewObject state variable.
  const handleSubmit = (formValues) => {
    setReviewObject(formValues);
    isPokemonSelected ? navigate("/review") : notify();
  };

  return (
    <>
      <div className=" grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-3 bg-indigo-200">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form onSubmit={handleSubmit} />
                <Search searchPokemon={searchPokemon} />
                {pokemon.name && <Pokemon pokemon={pokemon} />}
              </>
            }
          ></Route>
        </Routes>
      </div>
      <Routes>
        <Route
          path="/review"
          element={<Review reviewObject={reviewObject} pokemon={pokemon} />}
        />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
