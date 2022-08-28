
import React, { useState } from 'react';
import styled from 'styled-components';
import { RegisterForm } from '../components/layout/RegisterForm';
import { useSetPage } from '../hooks/useSetPage';

const StyledRegisterPage = styled.section`
    width: 80%;
    margin: auto;
`

export const RegisterPage = (props)=>{
    useSetPage(props.title)



    return (
        <StyledRegisterPage>
        
        <RegisterForm></RegisterForm>
        </StyledRegisterPage>
    )
}