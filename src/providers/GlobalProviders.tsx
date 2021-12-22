import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { Context } from "vm";
import { environments } from "../environments";

export interface User {
    description: string;
    fullname: string;
    id: string;
    links: {
        linkedin: string;
        github: string;
        created_at: string;
    };
    phone: string;
}

export interface newContext extends Context {
    user: User;
}

const GlobalContext = createContext({});

export const useGlobal = () => {
    const context = useContext(GlobalContext);
    return context as newContext;
};

const GlobalContextProvider = ({ children }: any) => {
    const [user, setUser] = useState({});
    const getProfile = async () => {
        const response = await axios.get(`${environments.API_URL}/api/profile/main`);
        setUser(response.data.profile);
    };
    useEffect(() => {
        getProfile();
    }, []);
    return <GlobalContext.Provider value={{ user }}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
