import React from 'react'
import { useSetPage } from '../hooks/useSetPage'
import { usePageContext } from './pageContext'



export const NotFoundPage = (props) =>{
    useSetPage(props.title)

    
    return(

        <h2>Not found</h2>
    )
}