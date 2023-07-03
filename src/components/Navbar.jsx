import React, { useContext } from 'react'
import { WeatherContext } from '../Context'

function Navbar() {

const {onChange , onClick, value, handlekeypress} = useContext(WeatherContext);


  return (
    <>
    <div className='Navbar'>

    <div className="logo"><p>Weather</p></div>  
    <div className='search'>
        <input type="text" placeholder='Search place' value={value} onChange={onChange} onKeyDown={handlekeypress}/>
        <i className="fa-solid fa-magnifying-glass" onClick={onClick}></i>
    </div>
    </div>
  
  </>
  )
}

export default Navbar
