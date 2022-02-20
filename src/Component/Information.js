import React from 'react'
import { useParams } from 'react-router-dom'
import {  useState,useEffect } from 'react'
import axios from 'axios'

export default function Information() {
   
    const [name, setName] = useState([])

    useEffect(()=>{
        axios.get("https://react-blogbackend.herokuapp.com/api/v1/information/details",
        // {params:{category:"Bollywood"}}
        )
        .then((req,res)=>{
            const up=req.data
        setName(up)
        })
    },[])

    const { id } = useParams();


    return (
        <div>
            {name.filter((value) => value.Id === id).map((items) => {
                return (

                    <div className='deets'>
                        <h1 className='titleinfo'>{items.title}</h1>
                        <div>
                            
                            <span className='insta'>
                                <i class="fab fa-instagram"></i>
                            </span>
                            <span className='facebook'>
                                <i class="fab fa-facebook"></i>
                            </span>
                            <span className='twitter'>
                                <i class="fab fa-twitter-square"></i>
                            </span>
                        </div>
                        <img className='extra' src={items.extra} alt='' />
                        <p className='paradeets'>{items.details}</p>
                        <img className='imagedeets' src={items.detailsimage} alt='' />
                       
                    </div>


                )
            })}

        </div>
    )
}
