import axios from "../index";
const getDiscovermovies = (query) => {
  return axios.get(
    `/discover/movie?include_adult=false&include_video=false&language=en-US&page=${query}&sort_by=popularity.desc`
  );
};
export {getDiscovermovies}
