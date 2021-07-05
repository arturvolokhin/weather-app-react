import React, {useState, useEffect} from 'react';
import Search from './Components/Search'
import Button from './Components/Button';
import TodayData from './Components/TodayData';
import PaintSelectedCity from './Components/PaintSelectedCity'
import getGeolocation from './Api/getGeolocation';
import { getElementInLocalStorage, setElementInLocalStorage, updateLocalStorage} from './Api/localStorage';
import ModalHistory from './Components/ModalHistory';
import './main.css';
import './fonts/stylesheet.css'

function App() {
    const [data, setData] = useState({});
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const value = getElementInLocalStorage('enteredCityName');

        if (value) {
            setCity(value);
        } else {
            getGeolocation(setCity)
        }
    }, [])

    useEffect(() => {
        if (city.match(/[a-zA-Z0-9]/)) {
            fetch(`http://api.weatherstack.com/current?access_key=c1a96e98043e9275277fc702971fe477&query=${city}`)
                .then(cityData => cityData.json())
                .then(cityData => {
                    setData(cityData);
                    setElementInLocalStorage('enteredCity', cityData);
                    updateLocalStorage();
                    setLoading(false);
                })
                .catch(alert);
        }
    }, [city] )
    
    const getCityName = (name) => {
        setElementInLocalStorage('enteredCityName', name);
        setCity(name)
    }

    const getMyGeolocation = () => {
        getGeolocation(setCity)
    }

    const toggleModal = () => {
        setToggle(!toggle);
    }

    const clearModalContent = () => {
        localStorage.removeItem('historyList');
        setToggle(!toggle);
    }


    return (
        <>
            <main className='main'>
                <ModalHistory 
                    toggle={toggle}
                    toggleModal={toggleModal}
                    clearModalContent={clearModalContent}
                    data={getElementInLocalStorage('historyList')}
                />
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
                        toggleModal={toggleModal}
                    />
                </div>
                {!loading && <TodayData data={data}/> }
                {!loading && <PaintSelectedCity data={data}/>}
            </main>
        </>
    );
}

export default App;