import React, { useState } from 'react';
import { StyledFormGroup } from '../../styles/forms.styled';




// name, value
export const FormButton= (props) => {


    
    return (
        <StyledFormGroup>
            
            <input onClick={props.onClick} name={props.name} type="submit" value={props.value}></input>
        </StyledFormGroup>
    )
}

