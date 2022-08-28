import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {User} from './User'

const StyledList = styled.section`
    display: flex;
    justify-content: space-evenly;
    width: 60vw;
    margin: 0 auto;
    gap : calc(0.3em + 2vw);
    flex-direction: row;
    flex-wrap: wrap;

`

export const Users = (props) => {

    return (
        <StyledList>
           {props.users.map((user) =><User key={user._id} {...user}></User>)}
        </StyledList>
    )
}