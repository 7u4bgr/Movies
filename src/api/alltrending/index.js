import axios from "../index";
const getAlltrending=(query)=>{
    return axios.get(`/trending/all/day?language=en-US`)
}
export {getAlltrending}