// call weather api
import React, {useEffect, useState} from 'react';
import axios from 'axios';

// get data for given zip code
export default function Weather(){
    const[data, setData] = useState({});
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=f8a23bb11cbf4d8ebff204810231310&q=' + '31820';
    const [isFahrenheit, setIsFahrenheit] = useState(true); //Default to F

    // here we get the current weather
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            //console.log(response);
            setData(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    }, []);

    //Determine time-based greeting :)
    const date = new Date();
    const time = date.getHours();
    let greeting = '';
    if(time < 4){
        greeting = "Good night";
    }
    else if (time >= 4 && time < 11){
        greeting = "Good morning";
    }
    else if (time >= 11 && time < 17){
        greeting = "Good afternoon";
    }else{
        greeting = "Good evening";
    }

    //Switches unit choice state
    const toggleUnit = () => {
        setIsFahrenheit(!isFahrenheit);
    }
    
    return(
        <div className='card m-4 p-4 weather-container h-25'>

            <React.Fragment>
                {data.location ? (
                    <div className='card-body'>
                    <p className='display-6'>{greeting}</p>
                    <p>{data.location.name}, {data.location.region}</p>
                    <p>{ isFahrenheit ?
                    data.current.temp_f : data.current.temp_c} <span className='m-0 p-0' 
                style={{cursor: 'pointer', display: ''}} onClick={toggleUnit}>
                    {isFahrenheit ? "°F" : "°C"}</span></p>
                    <br></br>
                    <img src={'https:' + data.current.condition.icon} style={{display: 'flex', float: 'inline-end'}} className='img' height="64" width="64" alt={data.current.condition.text}></img>
                    <p>{data.current.condition.text}</p>
                    
                   
                

                    <p>{data.forecast.forecastday[0].day.daily_chance_of_rain}% chance of rain</p>
                    <p>{}</p>
                    
                    </div>
            ) : (
                    <p>Loading</p>
                )}
                
                {data.forecast && data.forecast.forecastday[0].astro.is_moon_up === 1 ? 
                  <p>Moon phase: {data.forecast.forecastday[0].astro.moon_phase}</p> 
                  :null}
                
            </React.Fragment>

        </div>
    );
}

/*Desired weather component functions:
- Display temperature y
- Display condition icon y
- Display chance of rain y
- Allow choice of c/f y
- Display moon phase when moon is up y
*/
//Todo: fix colors, make pretty

