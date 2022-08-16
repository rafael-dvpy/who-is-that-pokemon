import axios from "axios";

const http = async (id: number) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
};

export default http;
