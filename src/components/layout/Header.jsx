import React,{ useState,useEffect} from 'react';
import styled from 'styled-components';
import { useAuth } from '../../auth/authContext';

import { NavBar } from './NavBar';



const StyledHeader = styled.header`
    display:flex;
    
    background: #c5c5c519;
background: linear-gradient(89deg, #484848a4 0%, #4f4e4ebd 19%, #c6c7c7f5 83%);
`




export const Header = (props)=>{

   const{loggedIn}  = useAuth()

 
    return (
        <StyledHeader>
            {/* <img src={props.logo}></img> */}
            <NavBar></NavBar>
        </StyledHeader>
    )
}