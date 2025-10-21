import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const api = axios.create({
    baseURL: "http://192.168.31.251:4000/"
})

//додаємо токен до кожного запиту
api.interceptors.request.use(async (config) => { 
    const token = await AsyncStorage.getItem('token');
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

export default api