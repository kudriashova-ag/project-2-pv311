import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.31.251:4000/"
})

export default api