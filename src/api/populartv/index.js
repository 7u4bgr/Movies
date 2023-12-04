import axios from "../index";
const getPopulartv=(query)=>{
    return axios.get(`/tv/airing_today?language=en-US&page=${query}`)
}
export {getPopulartv}