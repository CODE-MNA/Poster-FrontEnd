import React,{useContext,useEffect,useState} from 'react';
import {StyledForm, StyledLink} from '../../styles/forms.styled'
import {useAuth} from '../../auth/authContext'
import {FormInput} from '../forms/FormInput'
import { FormButton } from '../forms/FormButton';
import axios from 'axios';
import { usePost } from '../../hooks/usePost';
import { postRequest } from '../../helpers/postRequest';
import {NavLink} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '../forms/ErrorMessage';

var loginbg = "background-color: #959595;background-image: linear-gradient(46deg, #8f8b8b 0%, #585843 100%);"



export const LoginForm = () =>{
    let nagivate = useNavigate();
    const [errorMessage, setErrorMessage] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const {login,token} = useAuth()



    const onNameChange = (val) =>{
        setInputName(val)
    }
    const onPasswordChange = (val) =>{
        setInputPassword(val)
    }
    const handleLoginSubmit = async (e)=>{
        e.preventDefault()

        let {data,loading,error} = await postRequest(`${process.env.REACT_APP_BACKEND_URL}/auth/login`,{
            email:inputName,
            password:inputPassword
        })
        
       if(data){
        if(Object.keys(data).length != 0){
            
            login(data.reloggerToken,data.token,data.userData)
            console.log(data)
            nagivate("/",{replace:true})
          }
       }

       if(error){
        setErrorMessage(error.message)
       }
     
      
    }
    //Definition for input groups
    let loginProps = {
        name:'loginName',
        label:'Email : ',
        type:'text',
        handleChange:onNameChange
    }

    let passwordProps = {
        name:'password',
        label:'Password : ',
        type:'password',
        handleChange:onPasswordChange
    }
    let submitButtonProps = {
        name:'loginSubmit',
        value:'Login'
    }
    



    return (
        
        <StyledForm label="#d4d4d4" bg={loginbg} onSubmit={handleLoginSubmit}>
            
           <FormInput {...loginProps} >

           </FormInput>
           <FormInput {...passwordProps} >

           </FormInput>
           
           <FormButton {...submitButtonProps}>

           </FormButton>
            {errorMessage && <ErrorMessage errorMessage={errorMessage}></ErrorMessage> }

        <StyledLink to="/register" exact="true">Click here to sign-up</StyledLink>
        </StyledForm>
    )
}