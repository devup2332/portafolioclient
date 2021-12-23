import axios from "axios";
import { environments } from "../../../environments";

export interface Credentials {
    username: string;
    password: string;
}

export const loginUser = async (credentials: Credentials) => {
    const resposne = await axios.post(`${environments.API_URL}/api/auth/login`, credentials);

    return resposne.data;
};
