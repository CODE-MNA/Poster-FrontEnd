import React, { useState, useEffect } from 'react';
import { usePageContext } from '../pages/pageContext';

export const useSetPage = (title) =>{
    const { setCurrentPage } = usePageContext();

    useEffect( () => {
        if(!title){

            console.error("Error, Please enter a title for the useSetPage hook")
        }
        setCurrentPage(title)
    },[])

    

}