import axios from 'axios';
import { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

export default function Travelimg() {
    
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
    let store=useNavigate()
    return (
        <div className='travelimage'>
            {name.filter((value) => value.Id ==='7').map(items =>
            
                <div  key={items.Id}className='disp2'  onClick={() => store(`/category/${items.Id}`)}>  
                    <img className='bigimg' src={items.imageurl} alt=''/>
                    <div className='datamove'>
                        <p> {items.title} </p>
                        <p>{items.description}</p>
                        <p>{items.category}/{items.date}</p>
                    </div>

                </div>
            )
            }
            
        </div>
    )
}