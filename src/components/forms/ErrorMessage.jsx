import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



const StyledMessage = styled.label`
    color: ${props => props.bg || "#c95252"};
    width: 40%;
    margin:auto;
    background-color: ${props => props.bg || "#444"};
`

export const ErrorMessage = (props) => {
   return <StyledMessage className="errorMessage">Error : {props.errorMessage}</StyledMessage>
}