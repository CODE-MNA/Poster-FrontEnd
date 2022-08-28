import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { media } from './global.styles'


const panelStyles = `display: flex;
width: 100%;
justify-content: space-evenly;
align-items:stretch;
flex-direction: column;
padding: 1em;
gap: 1em;
background:${props => props.bg || "#454"};
border-radius: 0.4em;
color: ${props => props.color || "#000"};
border: 5px solid #333;
input[type=submit] {
    align-self: center;
flex-basis: 30%;
    
    margin: 0 auto;
}
textarea{
    border: 2px solid #333; 
    box-shadow: 0 0 0.3em #222;
}

label{
    background: ${props => props.label || "rgba(15,15,15,0.21)"};
    padding: 0.3em 0.5em;
    text-align: center;
    height: fit-content;
    border-radius:0.2em;

}`

export const StyledForm = styled.form`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items:stretch;
    flex-direction: column;
    padding: 1em;
    gap: 1em;
    background:${props => props.bg || "#454"};
    border-radius: 0.4em;
    color: ${props => props.color || "#000"};
    border: 5px solid #333;

    input[type=submit] {
        align-self: center;
        flex-basis: 30%;
        font-size:calc(0.4em + 1vw);
        transition: all 0.1s linear;
        margin: 0 auto;

        :hover{
            transition: all 0.2s ease-out;

            background-color: #ded;
            transform: scale(1.1)
        }

        :active{
            background-color: #afa;
        }
    }

    textarea{
        border: 2px solid #333; 
        box-shadow: 0 0 0.3em #222;
    }

    label{
        background: ${props => props.label || "rgba(15,15,15,0.21)"};
        padding: 0.3em 0.5em;
        text-align: center;
        height: fit-content;
        border-radius:0.2em;

    }
`




export const StyledPanel = styled.article`display: flex;
width: 100%;
justify-content: space-evenly;
align-items:stretch;
flex-direction: column;
padding: 1em;
gap: 1em;
background:${props => props.bg || "#454"};
border-radius: 0.4em;
color: ${props => props.color || "#000"};
border: 5px solid #333;
input[type=submit] {
    align-self: center;
flex-basis: 30%;
font-size:calc(0.4em + 1vw);
    transition: all 0.1s linear;
    margin: 0 auto;

    :hover{
    transition: all 0.2s ease-out;

        background-color: #ded;
        transform: scale(1.1)
    }

    :active{
        background-color: #afa;
    }
}
textarea{
    border: 2px solid #333; 
    box-shadow: 0 0 0.3em #222;
}

label{
    background: ${props => props.label || "rgba(15,15,15,0.21)"};
    padding: 0.3em 0.5em;
    text-align: center;
    height: fit-content;
    border-radius:0.2em;

}`


export const StyledError = styled.h4`
    
`


export const StyledFormGroup = styled.div`
    display : flex;
    margin-left: 2em;
    margin-right: 2em;
    justify-content:${props => props.nogap ? 'center' : ' space-between'};
    gap:calc(0.7em + 3vw);
    font-size:calc(0.6em + 1.2vw);
    min-height: 8vmax;
    align-items:stretch;
    input{
        border: 2px solid #333; 
        box-shadow: 0 0 0.3em #222;
    }
    
    ${media.desktop}{
        width:50%;
        margin:auto;
    min-height: 1vmax;
    font-size:calc(0.4em + 1vw);

    }

`
export const StyledLink = styled(NavLink)`
    padding: 0.2em;
    border-radius: 0.3em;
    color:${props => props.color || "#fff"};
    transition: all 0.2s;
    text-align: center;
    width: 20%;
    :hover{
       filter: saturate(4);
        transform: scale(1.2);
    }

    :active{
        color: #9b9;
    }
`




const inputOutline = () => "border: 2px solid #333; text-shadow: 0 0 0.3em grey"
