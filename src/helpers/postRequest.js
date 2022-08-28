import Axios from 'axios';
import { useAuth } from '../auth/authContext';
import { runRefresh } from '../hooks/useRefresh';


export const postRequest = async (url,postData,token) => {
        var loading = true;
        var data;
        var error;


        try{
            let response = {}

            if(token === "" || token === undefined){
                response = await Axios.post(url,postData)
            }else{
                 response = await Axios.post(url,postData,{headers: {
                    'Authorization': `Bearer ${token}` 
                  }})
            }
        
       
            data = response.data;

        }catch(err){
             error = err.response.data
            
             

        }finally{
           loading = false
            
        }

    return {data, error, loading}
}