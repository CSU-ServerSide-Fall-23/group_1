// call weather api
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CONFIG from '../userConfig.json';

// get data for given zip code
export default function Weather(){
    const[data, setData] = useState({});

    const [isFahrenheit, setIsFahrenheit] = useState(true); //Default to F

    // here we get the current weather
    useEffect(() => {
        var url = 'https://api.weatherapi.com/v1/forecast.json?key=f8a23bb11cbf4d8ebff204810231310&q=';
        if (CONFIG.zipCode.length > 0) {
            url += CONFIG.zipCode;
        }
        else if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) =>
                {
                    const { latitude, longitude } = position.coords;
                    url += latitude.toString() + "," + longitude.toString();

                  },
                (error) => {
                    console.error("Error getting user location: ", error);
                })}else {
                    console.error("Geolocation for weather not available.");
        } ;
        axios.get(url)
                .then((response) => {
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
        <div className='card weather-container'>

            <React.Fragment>
                {data.location ? (
                    <div className='card-body'>
                    <img src={'https:' + data.current.condition.icon} style={{display: 'flex', float: 'inline-end'}} className='img' height="64" width="64" alt={data.current.condition.text}></img>
                    <p className='display-6 title'>{greeting}, {CONFIG.name}</p>
                    <p>{data.location.name}, {data.location.region}</p>
                    <p>{data.current.condition.text}</p>
                    <p>{ isFahrenheit ?
                    data.current.temp_f : data.current.temp_c} °<a className='m-0 p-0'
                    style={{cursor: 'pointer', display: ''}} onClick={toggleUnit}>
                    {isFahrenheit ? "F" : "C"}</a></p>

                    

                    <p>{data.forecast.forecastday[0].day.daily_chance_of_rain}% chance of rain</p>
                    <p>{}</p>

                    </div>
            ) : (
                    <p>Loading</p>
                )}

                {data.forecast && data.forecast.forecastday[0].astro.is_moon_up === 1 && data.current.is_day !== 1 ?
                  <p>Moon phase: {data.forecast.forecastday[0].astro.moon_phase}</p>
                  :null}

            </React.Fragment>

        </div>
    );
}
