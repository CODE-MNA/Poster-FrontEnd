import React, { useState, useEffect } from 'react';
import {FormInput} from '../components/forms/FormInput'
import {FormButton} from '../components/forms/FormButton'
import { postRequest } from '../helpers/postRequest';
import {useParams} from 'react-router-dom'
import {useAuth} from '../auth/authContext'
import { StyledForm } from '../styles/forms.styled';
import styled from 'styled-components';
import { usePost } from '../hooks/usePost';



export const CreatePost = (props) =>{
        const [name, setName] = useState("")
        const [desc, setDesc] = useState("")
        const params = useParams()
        const {token,logout} = useAuth();
        const {data,loading,error,PostData} = usePost(`${process.env.REACT_APP_BACKEND_URL}/users/${params.UserId}/posts`,{
            heading:name,
            content:desc
        },token)

        const handleLoginSubmit = async (e)=>{
            e.preventDefault()
           

        await PostData(`${process.env.REACT_APP_BACKET_URL}/users/${params.UserId}/posts`,{
            heading:name,
            content:desc
        },token)

          
        }
        
        useEffect(() => {
            
            if(data){
                props.handleRefetch()
            }

        
            
        }, [data,error]);

    return (
        <StyledForm bg="#424a4c"  color="#ffffff" onSubmit={(e)=> handleLoginSubmit(e)}>
            <FormInput nogap name="postname" label="Post Title" type="text" handleChange={setName}></FormInput>
            {/* <FormInput name="postdesc" label="Write the details" type="area" handleChange={setDesc}></FormInput> */}

            <textarea style={{resize:"vertical"}}  name="postdesc" onChange={(e) => setDesc(e.target.value)} ></textarea>
            <FormButton ></FormButton>
        </StyledForm>
    )
}