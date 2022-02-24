import { useContext } from 'react';
import { Createcontext } from './Createcontext';
import './style.css'
import { useNavigate } from 'react-router-dom';

export default function TopPosts() {
    
    const [data] = useContext(Createcontext);
  
    let store = useNavigate();

    return (
        <div className='up'>
            <h1 className='headingoftoppost'>Top Posts</h1>
            <div className='tophead'>
                {data.filter((value) => value.id <= 10).map((items, index) =>
                    
                    <div key={items.id} className='spacing' onClick={() => store(`/category/${items.id}`)}>
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
