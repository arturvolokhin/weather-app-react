import React, {useState, useEffect} from 'react';
import Search from './Components/Search'
import Button from './Components/Button';
import TodayData from './Components/TodayData';
import SelectedCity from './Components/SelectedCity'
import getGeolocation from './Api/getGeolocation';
import { getElementInLocalStorage, setElementInLocalStorage, updateLocalStorage} from './Api/localStorage';
import ModalHistory from './Components/ModalHistory';
import './main.css';
import './fonts/stylesheet.css'
setElementInLocalStorage('enteredCityName', 'Minsk');
function App() {
    const [data, setData] = useState({});
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const [toggle, setToggle] = useState(false);
    
    useEffect(() => {
        const value = getElementInLocalStorage('enteredCityName');
        value ? setCity(value) : getGeolocation(setCity);
    }, [])

    useEffect(() => {
        if (city.match(/[a-zA-Z0-9]/)) {
            fetch(`http://api.weatherstack.com/current?access_key=c1a96e98043e9275277fc702971fe477&query=${city}`)
                .then(cityData => cityData.json())
                .then(cityData => {
                    setData(cityData);
                    setElementInLocalStorage('enteredCity', cityData);
                    setLoading(false);
                })
                .catch(alert);
            }
            updateLocalStorage();
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
                        getMyGeolocation={getMyGeolocation}
                    />
                    <Button 
                        classes={'button-history'}
                        text={'History'}
                        toggleModal={toggleModal}
                    />
                </div>
                {!loading ? 
                    <>
                        <TodayData data={data}/> 
                        <SelectedCity data={data}/>
                    </> :
                    <h1>ЗАГРУЗКА</h1>
                }
            </main>
        </>
    );
}

export default App;