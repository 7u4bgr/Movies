import axios from "../index";
const getSearch=(query,page)=>{
    return axios.get(`/search/multi?query=${query}&include_adult=false&language=en-US&page=${page}`)
}
export {getSearch}