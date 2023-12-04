import axios from "../index";
const getPeoplesimages=(query)=>{
    return axios.get(`/person/${query}/images`)
}
export {getPeoplesimages}