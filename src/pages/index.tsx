import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonImage from "../components/PokemonImage";
import PokemonSubmit from "../components/PokemonSubmit";

const Home: NextPage = () => {
  const [data, setData] = useState({
    pokemonName: "",
    pokemonImage: "",
  });
  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${getRandomNumber(1, 150)}`)
      .then((res) => {
        const pokemonName = res.data.name;
        const pokemonImage = res.data.sprites.front_default;
        setData({ pokemonName, pokemonImage });
      });
  }, []);
  return (
    <>
      <Header />
      <PokemonImage alt={data.pokemonName} src={data.pokemonImage} />
      <PokemonSubmit />
    </>
  );
};

export default Home;
