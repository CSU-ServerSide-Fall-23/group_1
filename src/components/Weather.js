// call weather api
import React, {useEffect, useState} from 'react';
import axios from 'axios';

// get data for given zip code
export default function Weather(){
    const[data, setData] = useState({});
    const url = 'https://api.weatherapi.com/v1/forecast.json?key=f8a23bb11cbf4d8ebff204810231310&q=' + '31820';
    // here we get the current weather
    useEffect(() => {
        axios.get(url)
        .then((response) => {
            console.log(response);
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

    //TODO: add choice for C or F temps


    return(
        <React.Fragment>
            {data.location ? (
            <div className='card m-4 p-3'>
                <h1>{greeting}</h1>
                <p>{data.location.name}, {data.location.region}</p>
                <img src={'https:' + data.current.condition.icon} height="64" width="64" alt={data.current.condition.text}></img>
                <p>{data.current.condition.text}</p>
                <p>{data.current.temp_f}°F</p>
                <p>{data.forecast.forecastday[0].day.daily_chance_of_rain}</p>
            </div> ) : (
                <p>Loading</p>
            )}
        </React.Fragment>
    );
}

/*Desired weather component functions:
- Display temperature
- Display condition icon
- Display chance of rain
- Display sunrise/sunset times if within next 2 hours
- Display moon phase after sunset
*/
