import axios from 'axios';
import {useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Displayimg() {

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
        <div className='disp1' >
            {name.filter((value) => value.Id <= 1).map(items =>
                <div key={items} className='disp2' onClick={()=>store(`/travel`)}>  

                    <img className='bigimg' src={items.imageurl} alt=''/>
                    <div className='datamove'>
                        <p> {items.title} </p>
                        
                        <p>{items.category}/{items.date}</p>
                    </div>

                </div>
            )
            }
            {name.filter((value) => value.Id ==='3' || value.Id ==='4' ).map(items =>
                <div className='imagemini' onClick={()=>store(`/travel`)}>
                    <img className='miniimg' src={items.imageurl} alt='' />
                    <div className='dataing'>
                        
                        <p>{items.category}/{items.date}</p>
                    
                    </div>

                </div>
            )

            }


        </div>
    )
}
