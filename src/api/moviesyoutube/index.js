import axios from "../index";
const getMoviesYoutube=(query)=>{
    return axios.get(`/movie/${query}/videos?language=en-US`)
}
export {getMoviesYoutube};