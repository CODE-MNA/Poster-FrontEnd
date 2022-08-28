import styled from "styled-components";


export const StyledCard = styled.div`
   flex-basis:20%;
   align-items:stretch;
    border:2px solid ${props => props.color || '#333'};
    border-radius: 8px;
    padding:0.5em;
    box-shadow: 0 0 0.3em ${props => props.color || "#222"};
    background-color: rgba(21, 86, 240, 0.1);

    h3{
        color: ${props => props.color || '#bfa'};
        text-align: center;
        font-size:calc(0.6rem + 1vw)
        
    }
    a{
        text-decoration: none;

    }

   :hover{
        transform: scale(1.1);
        transition: all 0.2s ease;
        cursor:pointer;
    }

`