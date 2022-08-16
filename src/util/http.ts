import axios from "axios";

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const http = axios.get(
  `https://pokeapi.co/api/v2/pokemon/${getRandomNumber(1, 150)}`
);

export default http;
