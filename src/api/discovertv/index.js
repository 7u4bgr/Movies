import axios from "../index";
const getDiscovertv = (query) => {
  return axios.get(
    `/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=${query}&sort_by=popularity.desc`
  );
};
export { getDiscovertv };
