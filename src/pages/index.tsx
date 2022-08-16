import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import PokemonImage from "../components/PokemonImage";
import PokemonSubmit from "../components/PokemonSubmit";
import http from "../util/http";

const Home: NextPage = () => {
  const [response, setResponse] = useState({
    name: "",
    img: "",
  });
  const [reload, setReload] = useState(true);

  const getRandomNumber = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  useEffect(() => {
    const espera = async () => {
      const { data } = await http(getRandomNumber(1, 150));
      setResponse({
        name: data.name,
        img: data.sprites.other.dream_world.front_default,
      });
    };
    espera();
  }, [reload]);

  return (
    <>
      <Header />
      <PokemonImage
        alt={response.name !== "" ? response.name : "placeholder"}
        src={response.img}
      />
      <PokemonSubmit
        pokemonName={response.name ? response.name : ""}
        reload={reload}
        setReload={setReload}
      />
    </>
  );
};

export default Home;
