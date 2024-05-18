import { useState } from 'react';
import useFetch from './useFetch';

const Weather = () => {
    const [city, setCity] = useState('Merlimau');
    const [url, setUrl] = useState(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0077838c5dfb9b3df1fe49f6202fe45a`);
    const { data, isPending, error } = useFetch(url);
    var celcius = 0;

    const handleClick = () => {
        setUrl(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0077838c5dfb9b3df1fe49f6202fe45a`);
    }

    const convertToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(2);
    }

    return (
        <div className="weather">
            <h1>Weather app</h1>
            <input type="text" placeholder="Enter your city" required value={city} onChange={(e) => setCity(e.target.value)}/>
            <button onClick={handleClick}>Search</button>

            {/* For presenting the data */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {data && (
                <div>
                    <h2>City: {data.name}</h2>
                    <p>Weather now: {data.weather[0].description}</p>
                    <p>Temperature: {convertToCelsius(data.main.temp)} °C</p>
                    
                    {convertToCelsius(data.main.temp) > 30 ? 
                    (
                    <div>
                        <p>Panasnya!</p> 
                    <img src="https://i.pinimg.com/564x/fb/01/b1/fb01b1fad953bd0fdf969bac390790d0.jpg" alt="panas" />
                    </div>
                    ) : (
                    <div>
                        <p>Sejuksss.</p>
                    <img src="https://i.pinimg.com/564x/dc/b2/d9/dcb2d94f4e6eb38af7b3bef5d5475f26.jpg" alt="sejukksss" width={300}/>
                    </div>
                    
        )}
                </div>
            )}
        </div>
    );
}

export default Weather;