import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useLogout } from './useLogout';

export const useDelete =  (url,token,onStart=false)=>{

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)   

    useLogout(error)

    const sendDeleteRequest =  async (url,token)=>{
        setLoading(true)
        try{

            let response = {}

            if(token === "" || token === undefined){
                response = await axios.delete(url)
            }else{
                 response = await axios.delete(url,{headers: {
                    'Authorization': `Bearer ${token}` 
                  }})
            }
        
       
          
            setData(response.data)
            setError(null)
        }catch(err){
             setError(err.response.data)
             setData(null)

        }finally{
             setLoading(false)
            
        }

    }


   
 
     return  {data,error,loading,sendDeleteRequest}
    
}