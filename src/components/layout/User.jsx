import React, { useState } from 'react';
import {StyledCard} from '../../styles/card.styles'
import {NavLink} from 'react-router-dom'
const goToUserPosts = (id) =>{


}


export const User = (props) =>{

    return (
        <StyledCard>
           
            <NavLink to={`/${props._id}/posts`} exact="true"> <h3 >{props.name}</h3></NavLink>
        </StyledCard>
        )
    
}