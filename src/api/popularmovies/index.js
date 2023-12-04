import axios from "../index";
const getPopularmovies=(query)=>{
    return axios.get(`/movie/popular?language=en-US&page=${query}`)
}
export {getPopularmovies}