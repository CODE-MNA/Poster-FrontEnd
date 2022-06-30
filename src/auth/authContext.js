import React, { createContext, useContext } from 'react';


const AuthContext = createContext({})

export const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)

   

    const login = ()=>{

        setLoggedIn(true)
    }

    const logout = ()=>{
        
        setLoggedIn(false)
    }

    const auth = {
        login, logout, loggedIn
    }
    return(
        <AuthContext.Provider value={auth} {...props}/>
       
    )
}