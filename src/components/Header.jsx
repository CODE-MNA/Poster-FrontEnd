import React from 'react';
import { NavBar } from './NavBar';

export const Header = (props)=>{


    return (
        <header>
            <img src={props.logo}></img>
            <NavBar></NavBar>
            
        </header>
    )
}