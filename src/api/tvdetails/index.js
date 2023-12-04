import axios from "../index";
const getTvDetails=(query)=>{
    return axios.get(`/tv/${query}?language=en-US`)
}
export {getTvDetails}