import axios from "axios";

export const Movies = type => {
  let movieAPI = ''
  return axios.create({
    baseURL: `http://www.omdbapi.com/?apikey=${movieAPI}&${type}`
  });
};
