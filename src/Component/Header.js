import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function Header() {
return (
      <div>
      
        
          <h1 className='heading' >The </h1> <h1 className='heading1'>Siren</h1>
          <div className='nav-box' >
           <NavLink className="text" to='/home' style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } }>Home</NavLink>
          <NavLink className="text" to='/bollywood'style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } }>BollyWood</NavLink>
          <NavLink className="text" to='/technology'style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } }>Technology</NavLink>
          <NavLink className="text" to='/hollywood'style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } }>HollyWood</NavLink>
          <NavLink className="text" to='/travel'style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } }>Travel</NavLink>
          <NavLink className="text" to='/food'style={ ( {isActive} ) => { return { color: isActive? 'red' : 'blue'} } }>Food</NavLink> 
         </div>
         </div> 
        
    )
}

export default Header
