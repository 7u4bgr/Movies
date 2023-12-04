import axios from "../index";
const getPeoplecharacter=(query)=>{
    return axios.get(`/person/${query}/combined_credits?language=en-US`)
}
export {getPeoplecharacter}