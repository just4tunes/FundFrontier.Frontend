import React, { useState, createContext, useEffect, ReactNode } from "react";
import Cookies from 'js-cookie';
import { User } from "../utils/types";

interface LoginData {
    token: string;
    user: User;
}

interface UserContextType {
    accessToken: string | null;
    user: User | null;
    login: (data: LoginData) => void;
    logout: () => void;
    loading: boolean;
}

interface UserProviderProps {
    children: ReactNode;
}

export const UserContext = createContext<UserContextType>({
    accessToken: null,
    user: null,
    login: () => { },
    logout: () => { },
    loading: true
});

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
    const [accessToken, setAccessToken] = useState<string | null>(null);
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const accessTokenFromCookie = Cookies.get('accessTokenBitWealth');
        const userDataFromCookie = Cookies.get('userDataBitWealth');
        if (accessTokenFromCookie && userDataFromCookie) {
            setAccessToken(accessTokenFromCookie);
            setUser(JSON.parse(userDataFromCookie) as User);
        }
        setLoading(false);
    }, []);

    const login = (data: LoginData) => {
        const { token, user } = data;
        setAccessToken(token);
        setUser(user);

        Cookies.set('accessTokenBitWealth', token, {
            expires: 7,
            secure: true,
            sameSite: 'Strict'
        });

        Cookies.set('userDataBitWealth', JSON.stringify(user), {
            expires: 7,
            secure: true,
            sameSite: 'Strict'
        });
    };

    const logout = () => {
        setAccessToken(null);
        Cookies.remove('accessTokenBitWealth');
        Cookies.remove('userDataBitWealth');
    };

    return (
        <UserContext.Provider value={{ accessToken, user, login, logout, loading }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;