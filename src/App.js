import React from 'react';
import Search from './Components/Search'
import TodayData from './Components/TodayData';
import './main.css';

function App() {
    return (
        <>
            <Search/>
            <main className='main'>
                <TodayData/>
            </main>
        </>
    );
}

export default App;