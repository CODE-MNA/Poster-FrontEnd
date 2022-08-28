import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useCallback } from 'react';
import { useLogout } from './useLogout';

export const useFetch = (url,token,autoFetch= false)=>{

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    useLogout(error)

    let dependancies = []
    
    if(autoFetch){
        dependancies = [url,token]
    }



    const getData = async (url,accessToken)=>{
        
        setLoading(true)
        try{
            let response;
            if(accessToken){ 
                if(accessToken === ""){

                    response = await axios.get(url)
                }
                
            }
                   response = await axios.get(url,{headers: {
                    'Authorization': `Bearer ${accessToken}` 
                  }})
            
            const data = response.data

            setData(data)
            setError(null)

        }catch(err){
            console.error("flippy" + err)
            setError(err.response.data)

            setData(null)
           

        }finally{
            setLoading(false)
        }
    }

    useEffect( () => {
     
       
        if(autoFetch){

            getData(url,token)
            
        }

        
    }, dependancies);

    return {data, error, loading,getData}
    
}