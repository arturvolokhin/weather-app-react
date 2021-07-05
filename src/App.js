import React, {useState, useEffect} from 'react';
import Search from './Components/Search'
import Button from './Components/Button';
import TodayData from './Components/TodayData';
import DataSelectedCity from './Components/DataSelectedCity'
import getGeolocation from './Api/getGeolocation';
import './main.css';
import './fonts/stylesheet.css'

function App() {
    const [data, setData] = useState({});
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        getGeolocation(setCity)
    }, [])

    useEffect(() => {
        if (city.match(/[a-zA-Z0-9]/)) {
            fetch(`http://api.weatherstack.com/current?access_key=92c98517a0c5f48d90bff7b0aad64226&query=${city}`)
                .then(cityData => cityData.json())
                .then(cityData => {
                    setData(cityData);
                    setLoading(false);
                })
                .catch(alert);
        }
    }, [city] )
    
    const getCityName = (name) => {
        setCity(name)
    }

    const getMyGeolocation = () => {
        getGeolocation(setCity)
    }


    return (
        <>
            <main className='main'>
                <Search getCityName={getCityName}/>
                <div className="main__buttons">
                    <Button
                        classes={'button-geolocation'}
                        text={'My location'}
                        getMyGeolocation={getMyGeolocation}
                    />
                    <Button 
                        classes={'button-history'}
                        text={'History'}
                    />
                </div>
                {!loading && <TodayData data={data}/> }
                {!loading && <DataSelectedCity data={data}/>}
            </main>
        </>
    );
}

export default App;