import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import styled from 'styled-components';



const StyledPost = styled.article`
    border: 0.2em solid black;
    border-radius:0.3em;
    display: flex;
    flex-direction:column;
    box-shadow: 0 0 0.3em grey;


    div{
        display:flex;
        flex-direction:row;
        flex-basis: 0;
        background-color: #ddd;
        .twothirds{
            flex-basis:60%;
        }

        .onethirds{
            flex-basis:30%;
        }

        padding-left: 1em;

    }
    
    .topbar{
        padding-left: 0;
        background-color:#333d33;
        color: #efe;
        min-height: 2.5em;
        align-items: center;
        justify-content:space-evenly;
        h4{

        }
    }

    .bottombar{
        background-color:#666;
        color: #ef2;
        position: relative;
        bottom:-0.07em;
    }

    

`





export const Post = (props) =>{
    const headingRef = useRef()
    const postRef = useRef()
    
    const getWords = ()=>{
       let scaleReduction = (headingRef.current.textContent.length * 0.01) 

       headingRef.current.style.fontSize = `calc(${(1-(scaleReduction/2))}rem + 0.3vw)`
    
    }

   
    useEffect(() => {
        

            getWords()

         
    }, [])
    

    return(
        <StyledPost ref={postRef}>
            <div id={props.id} className="topbar">
                <h4 ref={headingRef} className="twothirds">{props.heading}</h4>
                {props.deletable && <button onClick={() => props.handleDelete(props.id)} className="onethirds" >X</button>}
            </div>

            <div>
                <p>{props.content}</p>
            </div>

            <div className="bottombar">
                <span>{props.time}</span>

            </div>
        </StyledPost>

    )
}