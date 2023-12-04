import axios from "../index";
const getBackground=(query1)=>{
    return axios.get(`/movie/upcoming?language=en-US&page=${query1}`)
}
export {getBackground}