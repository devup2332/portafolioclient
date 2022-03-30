import axios from "axios";
import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { Context } from "vm";
import { environments } from "../environments";

export interface User {
    id?: string;
    about_me?: string;
    fullname?: string;
    username?: string;
    email?: string;
    links: {
        id?: string;
        linkedin?: string;
        youtube?: string;
        facebook?: string;
        github?: string;
        created_at?: string;
    };
    phone?: number | string;
}

export interface newContext extends Context {
    user?: User;
    token?: string;
    setToken: Dispatch<SetStateAction<string>>
}

const GlobalContext = createContext({});

export const useGlobal = () => {
    const context = useContext(GlobalContext);
    return context as newContext;
};

const GlobalContextProvider = ({ children }: any) => {
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    const getProfile = async () => {
        try {
            const response = await axios.get(`${environments.API_URL}/api/profile/main`);
            setUser(response.data.profile);
        } catch (err: any) {
            console.log(err);
        }
    };
    useEffect(() => {
        getProfile();
    }, []);
    return <GlobalContext.Provider value={{ user, token ,setToken}}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
