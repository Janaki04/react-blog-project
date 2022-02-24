import React from 'react'
import { useParams } from 'react-router-dom'
import {  useState,useEffect } from 'react'
import axios from 'axios'

export default function Information() {
   
    const [data, setData] = useState([])

    const { id } = useParams();

 useEffect(()=>{
        axios.get(`https://react-blogbackend.herokuapp.com/api/v1/information/blog/${id}`,
        
        )
        .then((req,res)=>{
            const up=req.data
        setData(...up)
        })
    },[id])

    

 return (
        <div>


                    <div className='deets'>
                        <h1 className='titleinfo'>{data.title}</h1>
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
                        <img className='extra' src={data.extra} alt='' />
                        <p className='paradeets'>{data.details}</p>
                        <img className='imagedeets' src={data.detailsimage} alt='' />
                       
                    </div>

                

        </div>
    )
}
