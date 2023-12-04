import axios from "../index";
const getTvPopularPeoples=(query)=>{
    return axios.get(`/tv/${query}/credits?language=en-US`)
}
export {getTvPopularPeoples}