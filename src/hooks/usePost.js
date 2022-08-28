import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useLogout } from './useLogout';

export const usePost =  (url,postData,token,onStart=false)=>{

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)   
    const [fetching, setFetching] = useState(onStart)

    useLogout(error)

    const PostData =  async (_url,_postData,_token)=>{
        setFetching(true)
        setLoading(true)
        try{

            let response = {}

            if(_token === "" || _token === undefined){
                response = await axios.post(_url,_postData)
            }else{
                 response = await axios.post(_url,_postData,{headers: {
                    'Authorization': `Bearer ${_token}` 
                  }})
            }
        
       
          
            setData(response.data)
            setError(null)
        }catch(err){
          

                setError(err.response.data)
                setData(null)
            

        }finally{
             setLoading(false)
             setFetching(onStart)
            
        }

    }

  

    
 
     return  {data,error,loading,PostData}
    
}