import React from 'react'
import { NavLink } from 'react-router-dom'
export const NavBar = ()=>{


    //Use context to see if user loggede in
    return(
        <nav>
           <li>
            <ul>
                <NavLink to="/" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/users" exact={true}>
                    Users
                </NavLink>
            </ul>
           </li>
        </nav>
    )
}