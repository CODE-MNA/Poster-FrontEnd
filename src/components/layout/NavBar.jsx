import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import { useAuth } from '../../auth/authContext';

class RouteLink{
    static count = 0;
    constructor(label,link){
        this.label = label;
        this.link = link
        RouteLink.count++;
        this.id = RouteLink.count;
    }
   
    
}


const StyledBar = styled.nav`
    width:100%;
    font-size: large;
    text-decoration: none;
    display: flex;
    justify-content:space-between;
    align-items:center;
    margin:0;
    padding:0.5em 0em;
    h1{
        text-align: center;
        padding:0;      
        margin:0;
        letter-spacing: 2vw;
        margin-left:2em;
        font-size:calc(1.2rem + 0.4vw);
        text-shadow: 0 0 0.3em #141133;
        color:white;
    }
    
    ul{
        
        margin: 0;
        margin-right: 1em;
        width:40%;
        display:flex;
        justify-content: space-evenly;
        padding:0.5em;
       a{
            list-style: none;
            text-decoration:none;
            padding: 0.4em;
            
            border-radius: 0.2em;
            color:#252424;
        font-size:calc(0.6rem + 0.6vw);

        }
        li{
            list-style: none;

        }
        a:hover{
            background-color:#dfdfdfc6;
            color:#5d844d;
        }
    }

`

export const NavBar = ()=>{
    const {loggedIn,user,logout} = useAuth();

const publicRoutes = [new RouteLink("Home","/"),new RouteLink("Login","/login")]
let privateRoutes = []
if(user){

    privateRoutes = [new RouteLink("Home","/"),new RouteLink("Users","/users"),new RouteLink("My Posts",`${user._id}/posts`) ]
}

    //Use context to see if user loggede in
    return(
        <StyledBar>
            <h1>POSTER</h1>
            <ul>
                {!loggedIn ? 
                
                publicRoutes.map(route =>  <li key={route.id}> <NavLink  to={route.link} exact="true">{route.label}</NavLink></li>):
                
                <>
                {privateRoutes.map(route => 
                <li key={route.id}>
                <NavLink  to={route.link} exact="true">{route.label}</NavLink>
                </li>
                
            
                )}

                <li key="logout">
                <NavLink exact="true" to="/" onClick={()=>logout()} > Logout</NavLink>
                </li>
                </>
                
                }


               
            </ul>

        </StyledBar>
    )
}