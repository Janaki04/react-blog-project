import axios from 'axios';
import {useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function TheLatest() {
    
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
    let store=useNavigate();

    return (

        <div>
            <h1 className='thelatest'>WELCOME TO THE HOME PAGE!!!</h1>
            <div className='box'>
                {name.filter((value) => value.Id <= 3).map(items =>
                    <div key={items.Id} className='box2' onClick={() => store(`/category/${items.Id}`)}>
                        <img className='image1' src={items.imageurl} alt='' />
                        <p className='title'> {items.title} </p>
                        <p className='description'>{items.description}</p>
                        <p className='category,date'>{items.category}/{items.date}</p>
                        

                    </div>)}
            </div>
        </div>
    )
}