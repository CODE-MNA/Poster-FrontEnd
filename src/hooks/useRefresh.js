import axios from "axios"
import { useState,useEffect } from "react"
import { usePost } from "./usePost"


export const useRefresh = (errorIn,reloggerToken) =>{
    
   
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)   


    const PostRefresh =  async ()=>{
        setLoading(true)
        try{

            let response = {}

       
                response = await axios.post("http://localhost:8080/auth/refresh",{token:reloggerToken})
           
        
       
          
            setData(response.data)
            setError(null)
        }catch(err){
             setError(err.response.data)

             setData(null)

        }finally{
             setLoading(false)
            
        }

    }

   useEffect(() =>{

        if(!errorIn) return
        if(!errorIn.tokenExpired) return

        PostRefresh()

    },[errorIn])
    
 
     return  {data,error,loading}
}