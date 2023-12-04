import axios from "../index";
const getMoviePeoples=(query)=>{
    return axios.get(`/movie/${query}/credits?language=en-US`)
}
export {getMoviePeoples}