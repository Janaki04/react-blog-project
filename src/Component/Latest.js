import axios from 'axios';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function Latest() {
    
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

    const [load, setLoad] = useState(true);
    const click=()=>{
     
        setLoad(true)

    }
    return (
        <div>
            <h1 className='latest'>Latest</h1>
            <div className='boxmain'>
                    {
                        name.filter((value) => load? value.Id >= 15 : value.Id<4 ).map((items) => {
                            return(
                                <div key={items} className='boxlatest'  onClick={() => store(`/category/${items.Id}`)}>
                                <img className='imageslatest' src={items.imageurl} alt='' />
                                <div className='space'>
                                    <p className='titlelatest'> {items.title} </p>
                                    <p className='descriptionlatest'>{items.description}</p>
                                    <p className='categorylatest,datelatest'>{items.category}/{items.date}</p>
                                </div>

                            </div>
                            )
                        })
                    }
            </div>
            <button className='button' onClick={click}>Load More</button>
        </div>
    )
}
