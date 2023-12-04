import axios from "axios";
const instant=axios.create({
    baseURL:"https://api.themoviedb.org/3",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNDRmNmI0ZDA0M2UwY2EzM2ZkMjQ4ODgwZTdmNDk2OSIsInN1YiI6IjY1NjIzMGUzZWQ5NmJjMDEzYjI5ZTZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BRzYTQ4YZwFiia2pefBleZAlqvPmW0A_uIzfpJKCiNE'
      }
})
export default instant;