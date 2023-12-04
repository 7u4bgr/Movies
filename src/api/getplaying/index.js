import axios from "../index";
const getPlaying=(query)=>{
    return axios.get(`/movie/now_playing?language=en-US&page=${query}`)
}
export {getPlaying}