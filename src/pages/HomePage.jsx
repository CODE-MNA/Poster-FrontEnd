import React ,{useEffect}from 'react'
import { useRef } from 'react'
import styled from 'styled-components'
import { useAuth } from '../auth/authContext'
import { useSetPage } from '../hooks/useSetPage'
import { media, prefix } from '../styles/global.styles'

const StyledHome = styled.article`
    margin: auto;
    width: 50%;
    flex-shrink:100%;
    color: #cde7c4;
    text-shadow: 0 0 5px black;
    

    :nth-child(n){
            margin:auto;
    }


`
export const HomePage = (props) =>{
    const {user} = useAuth()
    const headingRef = useRef()
    const paraRef = useRef()
    useSetPage(props.title)
    let mediaquery = media.desktop.slice(prefix.length +1,media.desktop.length)
 
    
    useEffect(() => {

        console.log(mediaquery)
        console.log(window.matchMedia(mediaquery).matches)

        if(window.matchMedia(mediaquery).matches){

            setTimeout(()=>{
                headingRef.current.classList.add('flyIn')
            },100)
           
          
            setTimeout(()=>{
                paraRef.current.classList.add('flyIn')
    
            },190)
        }
       
        

       
     
    }, [])
    

    
    return(
        <StyledHome>
            <h2 ref={headingRef}>Welcome {user && user.name} To Poster</h2><br/>

            <p ref={paraRef}>Share your happenings, ideas and stories with everyone. </p>



        </StyledHome>
    )
}


