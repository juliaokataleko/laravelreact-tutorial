import { createContext, useContext, useState } from "react";

const StateContext: any = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({children}: any) => {
    
    const [user, setUser] = useState({name: "Juian F. Kataleko"});
    const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));

    const setToken = (token: any) => {
        _setToken(token);
        if (token) {
            localStorage.setItem('ACCESS_TOKEN', token);
        } else {
            localStorage.removeItem('ACCESS_TOKEN');
        }
    }
    
    return (
        <StateContext.Provider value={{
            user,
            setUser,
            token,
            setToken,
        }}>

            {children}

        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);