import axios from "axios";
const BASE_URL: string = "https://rickandmortyapi.com/api";

export default {
  getCharacters() {
    return axios.get(`${BASE_URL}/character`);
  }
};
