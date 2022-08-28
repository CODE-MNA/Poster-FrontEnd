import React,{useContext,useEffect,useState} from 'react';
import {StyledForm, StyledLink} from '../../styles/forms.styled'
import {useAuth} from '../../auth/authContext'
import {FormInput} from '../forms/FormInput'
import { FormButton } from '../forms/FormButton';
import axios from 'axios';
import { usePost } from '../../hooks/usePost';
import { postRequest } from '../../helpers/postRequest';
import {NavLink} from 'react-router-dom'
import { ErrorMessage } from '../forms/ErrorMessage';

export const RegisterForm = () =>{
    const [errorMessage, setErrorMessage] = useState("")
    const [inputName, setInputName] = useState("")
    const [inputPassword, setInputPassword] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputConfirmation, setInputConfirmation] = useState("")

    const {login,token} = useAuth()


    const onNameChange = (val) =>{
        setInputName(val)
    }
    const onPasswordChange = (val) =>{
        setInputPassword(val)
    }
    const onConfirmationChange = (val) =>{
        setInputConfirmation(val)
    }

    const onEmailChange = (val)=>{
        setInputEmail(val)

    }
    
    const handleSignupSubmit = async (e)=>{
        e.preventDefault()

        let {data,loading,error} = await postRequest(`${process.env.REACT_APP_BACKEND_URL}/auth/register`,{
            name:inputName,
            email:inputEmail,
            passwordConfirmation:inputConfirmation,
            password:inputPassword
        })
        
       if(data){

            
            window.location.href = process.env.PUBLIC_URL + "/login"
       }
       
       if(error){
            console.log(error)
            setErrorMessage(error.message)
       }
      
    }
    //Definition for input groups
    let usernameProps = {
        name:'loginName',
        label:'Username : ',
        type:'text',
        
        handleChange:onNameChange
    }

    let passwordProps = {
        name:'password',
        label:'Password : ',
        type:'password',
        handleChange:onPasswordChange
    }
    let confirmationProps = {
        name:'confirmation',
        label:'Password Confirmation : ',
        type:'password',
        handleChange:onConfirmationChange
    }
    let emailProps = {
        name:'email',
        label:'Email : ',
        type:'text',
        handleChange:onEmailChange
    }
    
    let submitButtonProps = {
        name:'registerSubmit',
        value:'Sign-Up'
    }
    



    return (
        <StyledForm nogap color="#efe" onSubmit={handleSignupSubmit}>
            
           <FormInput {...usernameProps} >

           </FormInput>
           <FormInput {...emailProps} >

</FormInput>
           <FormInput {...passwordProps} >

           </FormInput>
           <FormInput {...confirmationProps} >

            </FormInput>

           
           <FormButton {...submitButtonProps}>

           </FormButton>
            {errorMessage && <ErrorMessage bg="#eee" errorMessage={errorMessage}></ErrorMessage>}
          <StyledLink color="#efe" to="/login" exact="true">Click here to login</StyledLink>
        </StyledForm>
    )
}