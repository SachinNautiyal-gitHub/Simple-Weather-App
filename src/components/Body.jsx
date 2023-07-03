import React, { useContext } from 'react'
import { WeatherContext } from '../Context'

function Body() {


const {data, isLoding} = useContext(WeatherContext);
 let Temp = 0;
if(data.main){
   Temp = data.main.temp;
}

const TempCel = Math.round(Temp - 273);


 
if(isLoding){
  return (
    <div className="loding">
      <h1>Loding....</h1>
    </div>
  )
}



else return (
    <>
      <div className="main">
        <div className="info">

       
        <div className="information">
          <div className="cityname">{data.name?<p>{data.name}</p>:" sorry can't find city"}</div>
          <div className="scales">
          <div className="temprature">{
            data.main?<p>{data.main.temp} &#176; K</p>:null
          }
            
            <p className='celcius'>{TempCel>0?TempCel :" Sorry can't find the city"} &#176; C</p>
          </div>
          <div className="description">{
            data.weather? 
               <p>{data.weather[0].main}</p>:null}
          <div className="desDes">
          { data.weather? <p>{data.weather[0].description}</p> :null }
          </div>
          
          </div>
          </div>
        </div>

        <div className="moreinfo">
          <div className="feelslike">
           <div className='first'>{data.main?<p>{data.main.feels_like}&#176; k</p>:null}</div> 
            <div className='second'><p>feels like</p></div> 
          </div>
          <div className="humidity">
            <div className='first'>{data.main?<p>{data.main.humidity}</p>:null}</div>
            <div  className='second'><p>humidity</p></div> 
          </div>
          <div className="max-temp">{data.main?
            <p className='first'>{data.main.temp_max} &#176; k</p>:null}
            <p  className='second'>max-temprature</p>
          </div>
          <div className="min-temp">
            {data.main?<p className='first'>{data.main.temp_min} &#176; k</p>: null}
            <p  className='second'>min-temprature</p>
          </div>

        </div>
         
        </div>
      </div>

    </>
  )
}

export default Body
