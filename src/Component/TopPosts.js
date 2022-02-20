import axios from 'axios';
import {useState,useEffect } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom';

export default function TopPosts() {
    
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
    let store = useNavigate();

    return (
        <div className='up'>
            <h1 className='headingoftoppost'>Top Posts</h1>
            <div className='tophead'>
                {name.filter((value) => value.Id <= 10).map((items, index) =>
                    
                    <div key={items.Id} className='spacing' onClick={() => store(`/category/${items.Id}`)}>
                        <img className='imagetoppost' src={items.imageurl} alt='' />
                        <div className='move'>
                            <p> {items.title}{index} </p>
                            <p>{items.description}</p>
                            <p>{items.category}/{items.date}</p>


                            <span className='hori'> <hr /></span>
                        </div>


                    </div>
                    // <div/>
                )
                }
            </div>
        </div>

    )
}
