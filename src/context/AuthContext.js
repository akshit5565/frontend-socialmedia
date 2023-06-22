import {createContext, useReducer} from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: 
    // null,
    {
    _id: "645298e33d26689252d9dc19",
    username:"Akshit",
    email:"akshit@gmail.com",
    profilePicture: "person/1.jpeg",
    coverPicture:"",
    isAdmin: false,
    followers: [],
    followings: [],
    },
    isFetching: false,
    error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider 
        value={{
            user: state.user, 
            isFetching: state.isFetching, 
            error: state.error, 
            dispatch,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};