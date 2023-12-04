import axios from "../index";
const getToptvshow=(query)=>{
            return axios.get(`/tv/top_rated?language=en-US&page=${query}`)
}
export {getToptvshow}