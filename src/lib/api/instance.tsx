import axios from "axios";
import { environments } from "../../environments";

const instance = axios.create({
    url: environments.API_URL,
    baseURL: environments.API_URL,
});

instance.interceptors.request.use((config) => {
    const token = localStorage.getItem("api-token");
    config.headers = {
        Authorization: `Bearer ${token}`,
    };
    return config;
});

export default instance;
