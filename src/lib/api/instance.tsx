import axios from "axios";
import { environments } from "../../environments";

const instance = axios.create({
    url: environments.API_URL,
});
