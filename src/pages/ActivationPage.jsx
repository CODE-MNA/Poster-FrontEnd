import React from 'react'
import styled from 'styled-components'
import { useAuth } from '../auth/authContext'

export const ActivationPage = () =>{
  
    
    return(
        <section>
           
            Please activate your account by checking your email for the activation link.

            <button onClick={resend}>Resend Link</button>



        </section>
    )
}