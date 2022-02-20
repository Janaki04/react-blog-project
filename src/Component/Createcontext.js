import React, { createContext, useState,useEffect } from 'react'
import axios from 'axios';


export const Createcontext = createContext();

export const Provider = (props) => {
    const [data, setData] = useState([

        useEffect(()=>{
            axios.get("https://react-blogbackend.herokuapp.com/api/v1/information/details")
            .then((res)=>{
            setData(res.data)
            })
        },[])


])

        return (
            <Createcontext.Provider value={[data,setData]}>
                {props.children}
            </Createcontext.Provider>
        )
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    
