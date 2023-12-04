import axios from "../index";
const getPopularpeople=(query)=>{
    return axios.get(`/person/popular?language=en-US&page=${query}`)
}
export {getPopularpeople}