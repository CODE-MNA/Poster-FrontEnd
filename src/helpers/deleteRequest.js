import Axios from 'axios';

export const deleteRequest = async (url,token) => {
        var loading = true;
        var data;
        var error;


        try{
            let response = {}

            if(token === "" || token === undefined){
                response = await Axios.delete(url)
            }else{
                 response = await Axios.delete(url,{headers: {
                    'Authorization': `Bearer ${token}` 
                  }})
            }
        
       
            data = response.data;

        }catch(err){
             error = err.response.data
             

        }finally{
           loading = false
            
        }

    return{data, error, loading}
}