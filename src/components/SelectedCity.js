const SelectedCity = ({data}) => {
    const {feelslike: feelsLike, cloudcover, wind_dir: wind,
        wind_speed: windSpeed, pressure} = data.current;
    const {localtime: localTime} = data.location;    
        
    return(
        <ul className="main__data">
            <li className="main__item main__item-time">Time: {localTime.slice(11, 16)}</li>
            <li className="main__item main__item-feels">Feels like: {feelsLike}</li>
            <li className="main__item main__item-cloudy">Cloudcover: {cloudcover}</li>
            <li className="main__item main__item-wind">Wind: {wind}</li>
            <li className="main__item main__item-speed">Wind speed: {windSpeed}</li>
            <li className="main__item main__item-plessure">Pressure: {pressure}</li>
        </ul>
    )
}

export default SelectedCity;