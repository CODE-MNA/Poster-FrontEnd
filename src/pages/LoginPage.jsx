
import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../auth/authContext';
import { LoginForm } from '../components/layout/LoginForm';
import { useSetPage } from '../hooks/useSetPage';
import { usePageContext } from './pageContext';


const StyledLogin = styled.section`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin-top:2em;
`

export const LoginPage = (props)=>{
       const{loggedIn} = useAuth()
       const navigate = useNavigate()
       useSetPage(props.title)
        useEffect(() => {
            if(loggedIn){
                navigate('/')
            } 
        
         
        }, [])
        
   
    return (
        <StyledLogin>
        <LoginForm></LoginForm>
        </StyledLogin>
    )
}