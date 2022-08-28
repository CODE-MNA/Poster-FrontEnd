import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
        background-color: #3f3f3f;
        width: 100%;
        align-self: flex-end;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        h4{
            color: #b1d1c1;
            font-size:calc(0.6rem + 0.7vw);
        }
        h3>a{
            color: #0f100f;
            background-color: #b1b1b1;
            border-radius:0.4em;
            padding: 0.3em;
            font-size:calc(0.6rem + 0.7vw);

            box-shadow: 0 0 0.2em #000000 ;
            transition: all 0.2s linear;

            :hover{
                background-color:#aca;
            }
            :active{
                background-color:#536f6b;
            }
        }

`

export const Footer = () =>{

    return (
        <StyledFooter>
            <h4>
                Made by Muhammad Noman
            </h4>
            <h3>
                <a href="https://github.com/CODE-MNA" target="_blank" rel="noopener">My Github</a>
            </h3>
        </StyledFooter>
    )
}