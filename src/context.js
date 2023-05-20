



import React, { useContext, useEffect, useState } from 'react';

const AppContext = React.createContext();

export const url = "https://jsonplaceholder.typicode.com/posts";

const AppProvider = ({children}) => {

    
        const [users, setUsers] = useState([]);


    const getUsers = async (url) => {
         try{
            const res = await fetch(url);
            const data = await res.json();
           // console.log(data)
            setUsers(data)
         }catch(error){
            console.log(error);
         }
    }
    

   useEffect(()=>{
      getUsers(url)
   },[])
    
      
    return(
        <AppContext.Provider value={{  users }} >
           {children}
        </AppContext.Provider>
    )
}

// global custom hooks


const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider,useGlobalContext}