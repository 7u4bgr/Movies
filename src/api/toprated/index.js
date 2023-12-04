import axios from "../index";
const getToprated=(query)=>{
    return axios.get(`/movie/top_rated?language=en-US&page=${query}`)
}
export {getToprated}