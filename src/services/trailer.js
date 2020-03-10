import axios from "axios";

export const Trailer = titleTrailer => {
  let youtubeAPI = ''
  return axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${youtubeAPI}q=${titleTrailer}&type=video&maxResults=1`
  });
};
