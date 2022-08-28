import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { useAuth } from '../auth/authContext'
import { FormInput } from '../components/forms/FormInput'
import { FormButton } from '../components/forms/FormButton'
import { Users } from '../components/layout/Users'
import {useFetch} from '../hooks/useFetch'
import { media } from '../styles/global.styles'
import { StyledForm, StyledFormGroup, StyledPanel } from '../styles/forms.styled'
import { useSetPage } from '../hooks/useSetPage'

const StyledUserPage = styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1em;

    .searchbar{
        display: flex;
        justify-content: space-between;
        min-width: 50%;
        height: 8em;
        color: #aea;
        padding: 1em;
        background-color:grey;
        ${media.desktop}{
             width:80%;
            gap:3em;
          }
    }

   
    

`


export const UserPage = (props) =>{
        const {token} = useAuth()
        const [search,setSearch] = useState("")
        useSetPage(props.title)

        const {data,error,loading,getData} = useFetch("http://localhost:8080/users?name=" + search,token,false)
        

        const triggerSearch = async () =>{
          

            await getData("http://localhost:8080/users?name=" + search,token)
            
           
        }

       useEffect(() => {
         getData("http://localhost:8080/users?name=" + search,token)
        
       }, []);

    
    return(
        <StyledUserPage>
        <StyledPanel className="searchbar">
        <FormInput name="name" label="Search : " handleChange={setSearch}></FormInput>
        <FormButton onClick={triggerSearch}>Search</FormButton>
        </StyledPanel>
       


        {data && !loading &&
        <>
       
         <Users users={data}></Users>
        </>
        }
        {error && !loading && <div>ERROR OCCURED  = {error.message}</div>}
      
        
        </StyledUserPage>
    )
}