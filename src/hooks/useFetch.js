import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url)=>{

    const [loading, setLoading] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)


    useEffect(async () => {
        setLoading(true)
        try{
            const response = await axios.get(url)
            const data = await response.json()

            setData(data)
        }catch(err){
            setError(err)

        }finally{
            setLoading(false)
        }
    }, [url]);

    return {data, error, loading}
    
}