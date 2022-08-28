import React, { createContext, useContext ,useState} from 'react';


const AuthContext = createContext({loggedIn: false, logout: () => {}, login:() => {}})


export const AuthContextProvider = (props) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [token,setToken] = useState("")
    const [reloggerToken,setReloggerToken] = useState("")
    const [user,setUser] = useState({})

    const login = (refresh,jwt,user)=>{

       if(!loggedIn) 
       {

          
          setToken(jwt)
         setReloggerToken(refresh)
          setUser(user)
     
          localStorage.setItem("currentUser",JSON.stringify({token:jwt,user:user}))
          
          setLoggedIn(true)

       }else{
        setToken(jwt)
        setUser(user)
        setReloggerToken(refresh)

          localStorage.setItem("currentUser",JSON.stringify({token:jwt,user:user}))

       }
     

    }

    const logout = (logoutMessage)=>{
        
       if(loggedIn){
           setToken("")
           setReloggerToken("")
           setLoggedIn(false)
           setUser({})
           localStorage.setItem("currentUser","");

          
       }
        
    }

    const auth = {
        loggedIn,login, logout, token, user,reloggerToken
    }
    return(
        <AuthContext.Provider value={auth} {...props}/>
       
    )
}

export const useAuth = () => {
    return useContext(AuthContext)
}