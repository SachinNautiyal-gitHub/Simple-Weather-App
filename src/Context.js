
import React, { useEffect, useState } from 'react';

const WeatherContext = React.createContext();

const AppProvider = ({children})=>{
     
    const [data , setData] = useState({});
    const [value , setValue] = useState('');
    const [location , setLocation] = useState("London");
    const [isLoding , setIsLoding] = useState(false);

    let API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5d45b487ccd747a9d3d09416eb98816f`; 

    const onChange = (e)=>{
    setValue(e.target.value);
    }

    const handlekeypress = (e)=>{ 
        if(e.key === 'Enter'){
            onClick();
        }
        
    }

    const onClick = ()=>{
        if(value !== " "){
            setLocation(value);
        }
    }


    const getWeather = async(API)=>{
        setIsLoding(true);
        try {
            const res = await fetch(API);
            const obj = await res.json();
            setData(obj);
            setIsLoding(false);
            console.log(obj);
            
        } catch (error) {
            console.log(error);
            
        }
     


    }


    useEffect(()=>{
        getWeather(API);
    },[API]);
  


    return <WeatherContext.Provider value={{data, onChange, value, onClick , handlekeypress, isLoding}}>
        {children}
    </WeatherContext.Provider>
};


export {WeatherContext , AppProvider};