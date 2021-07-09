import React, {useState, useEffect} from 'react';
import Search from './Components/Search'
import Button from './Components/Button';
import TodayData from './Components/TodayData';
import SelectedCity from './Components/SelectedCity'
import getGeolocation from './Api/getGeolocation';
import { getElementInLocalStorage, setElementInLocalStorage, updateLocalStorage} from './Api/localStorage';
import ModalHistory from './Components/ModalHistory';
import Preloader from './Components/Preloader';
import ModalWarning from './Components/ModalWarning';
import './main.css';
import './preloader.css';
import './fonts/stylesheet.css'

function App() {
    const [data, setData] = useState({});
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    const [warningText, setWarningText] = useState('Сообщение об ошибке');
    const [warning, setWarning] = useState(false);
    
    useEffect(() => {
        const value = getElementInLocalStorage('enteredCityName');
        value ? setCity(value) : getGeolocation(setCity);
    }, [])

    useEffect(() => {
        if (city.match(/[a-zA-Z0-9]/)) {
            fetch(`http://api.weatherstack.com/current?access_key=a4e12e5116d7984ef04995125262dab8&query=${city}`)
                .then(cityData => cityData.json())
                .then(cityData => {
                    if (cityData.request) {
                        setElementInLocalStorage('enteredCity', cityData);
                        setElementInLocalStorage('enteredCityName', city);
                        updateLocalStorage();
                        setData(cityData);
                        setLoading(false);
                    } else {
                        setCity('');
                        setElementInLocalStorage('enteredCityName', '');
                    }   
                })
                .catch(alert);
            } else {
                setWarningText('Вы ввели не верные данные!');
                setWarning(!warning);
            }
            
        }, [city] )
    
    const getCityName = (name) => {
        setCity(name)
    }

    const getMyGeolocation = () => {
        getGeolocation(setCity)
    }

    const toggleModal = () => {
        setToggle(!toggle);
    }

    const closeWarning = () => {
        setWarning(!warning);
    }

    const clearModalContent = () => {
        localStorage.removeItem('historyList');
        toggleModal();
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
                        onClick={getMyGeolocation}
                    />
                    <Button 
                        classes={'button-history'}
                        text={'History'}
                        onClick={toggleModal}
                    />
                </div>
                {!loading ? 
                    <>
                        <TodayData data={data}/> 
                        <SelectedCity data={data}/>
                    </> :
                        <Preloader/>
                }

                {warning ? <ModalWarning 
                                text={warningText}
                                closeWarning={closeWarning}
                            /> : 
                            null}
            </main>
        </>
    );
}

export default App;