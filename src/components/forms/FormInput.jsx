import React, { useState } from 'react';
import { StyledFormGroup } from '../../styles/forms.styled';




// name, label , handleChange, type,
export const FormInput = (props) => {


    
    return (
        <StyledFormGroup nogap={props.nogap} >
            <label htmlFor={props.name}>{props.label}</label>
            <input onChange={e=> props.handleChange(e.target.value)} type={props.type} name={props.name} ></input>
        </StyledFormGroup>
    )
}

