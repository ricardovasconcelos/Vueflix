import axios from "axios";

export const Trailer = titleTrailer => {
  return axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${process.env.VUE_APP_YOUTUBE_KEY}q=${titleTrailer}&type=video&maxResults=1`
  });
};
