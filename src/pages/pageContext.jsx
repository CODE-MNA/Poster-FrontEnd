import React, { createContext, useContext ,useState} from 'react';


const PageContext = createContext({currentPage:"Home",setCurrentPage:()=>{}})

export const PageContextProvider = (props)=>{
    const [currentPage, setCurrentPage] = useState("Home")

    const pageTools = {currentPage,setCurrentPage};

   return <PageContext.Provider value={pageTools} {...props} />

    
}

export const usePageContext = () =>{
    return useContext(PageContext)
}