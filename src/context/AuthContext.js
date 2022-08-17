import {createContext} from "react";

const AuthContext = createContext({
    accessToken: null,
    refreshToken: null,
    isLoggedIn: false,
    accountType: null,
    routes: [],
    id: null,
});

export default AuthContext;
