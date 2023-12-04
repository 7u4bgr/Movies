import axios from "../index";
const getTvshowsgo=(query)=>{
    return axios.get(`/tv/on_the_air?language=en-US&page=${query}`)
}
export {getTvshowsgo};