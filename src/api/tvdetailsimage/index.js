import axios from "../index";
const getTvDetailsImages=(query)=>{
    return axios.get(`/tv/${query}/images`)
}
export {getTvDetailsImages}