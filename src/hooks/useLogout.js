import React,{ useEffect } from "react"
import { useAuth } from "../auth/authContext"
import { postRequest } from "../helpers/postRequest"
import { usePost } from "./usePost"
import { useRefresh } from "./useRefresh"

//token expired
export const useLogout =  (errorIn) => {
    const {login,logout,reloggerToken} = useAuth()

    //Make a post on refresh endpoint
const {data,error}= useRefresh(errorIn,reloggerToken)
  
    useEffect( () => {
        if(!errorIn) return

        if(!errorIn.tokenExpired) return
        let refreshing = (data) => login(reloggerToken,data.token,data.userData)
        let loggingOut = () => logout("Please Re-login, session expired")
    
        if(data){
            refreshing(data)
        }

        if(error){

            loggingOut()
        }

     
       
    }
    ,[errorIn,data,error])

}