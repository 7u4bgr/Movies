import axios from "../index";
const getMovieDetails=(query)=>{
    return axios.get(`/movie/${query}?language=en-US`)
}
export {getMovieDetails}