import React, {useState, useEffect} from 'react';
import Search from './Components/Search'
import Button from './Components/Button';
import TodayData from './Components/TodayData';
import DataSelectedCity from './Components/DataSelectedCity'
import './main.css';
import './fonts/stylesheet.css'

function App() {
    const [data, setData] = useState({});
    const [city, setCity] = useState('');
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => {
            const geo = `${position.coords.latitude.toFixed(4)},
                ${position.coords.longitude.toFixed(4,)}`;   
            setCity(geo)
        });

    }, [city])

    useEffect(() => {
        setTimeout(() => {
            if (city.match(/[a-zA-Z0-9]/)) {
                fetch(`http://api.weatherstack.com/current?access_key=92c98517a0c5f48d90bff7b0aad64226&query=${city}`)
                    .then(cityData => cityData.json())
                    .then(cityData => setData(cityData))
                    .catch(alert);
            }
        }, 1000);
    }, [city] )


    return (
        <>
            <main className='main'>
                <Search/>
                <div className="main__buttons">
                    <Button
                        classes={'button-geolocation'}
                        text={'My location'}
                    />
                    <Button 
                        classes={'button-history'}
                        text={'History'}
                    />
                </div>
                <TodayData/>
                <DataSelectedCity/>
            </main>
        </>
    );
}

export default App;