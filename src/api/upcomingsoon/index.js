import axios from "../index";
const getUpcomingsoon=(query)=>{
    return axios.get(`/movie/upcoming?language=en-US&page=${query}`)
}
export {getUpcomingsoon}