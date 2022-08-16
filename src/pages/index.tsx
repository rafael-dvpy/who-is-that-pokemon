import { CircularProgress } from "@mui/material";
import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import Header from "../components/Header";
import PokemonImage from "../components/PokemonImage";
import PokemonSubmit from "../components/PokemonSubmit";
import http from "../util/http";

const Home: NextPage = () => {
  const [response, setResponse] = useState({
    name: "",
    img: "",
  });

  const espera = async () => {
    const { data } = await http;
    setResponse({
      name: data.name,
      img: data.sprites.other.dream_world.front_default,
    });
    console.log(data.name);
  };

  useEffect(() => {
    espera();
    console.log("reload");
  }, []);

  return (
    <>
      <Header />
      <PokemonImage
        alt={response.name !== "" ? response.name : "placeholder"}
        src={response.img}
      />
      <PokemonSubmit pokemonName={response.name ? response.name : ""} />
    </>
  );
};

export default Home;
