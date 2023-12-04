import axios from "../index";
const getPeopleImages=(query)=>{
    return axios.get(`/person/${query}?language=en-US`)
}
export {getPeopleImages}