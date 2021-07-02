import React from 'react';
import Search from './Components/Search'
import ButtonLocation from './Components/ButtonLocation';
import ButtonHistory from './Components/ButtonHistory';
import TodayData from './Components/TodayData';
import './main.css';
import './fonts/stylesheet.css'

function App() {
    return (
        <>
            <main className='main'>
                <Search/>
                <div className="main__buttons">
                    <ButtonLocation/>
                    <ButtonHistory/>
                </div>
                <TodayData/>
            </main>
        </>
    );
}

export default App;