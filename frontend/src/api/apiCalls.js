import axios from "axios";


export const singup = (body) => {
    return axios.post("/api/1.0/users/add", body)
}