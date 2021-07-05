const DataSelectedCity = ({data}) => {
    const {feelslike: feelsLike, cloudcover, wind_dir: wind,
        wind_speed: windSpeed, pressure} = data.current;
        
    return(
        <section className="main__data">
            <p className="main__item main__item-time">Time: {data.location.localtime.slice(11, 16)}</p>
            <p className="main__item main__item-feels">Feels like: {feelsLike}</p>
            <p className="main__item main__item-cloudy">Cloudcover: {cloudcover}</p>
            <p className="main__item main__item-wind">Wind: {wind}</p>
            <p className="main__item main__item-speed">Wind speed: {windSpeed}</p>
            <p className="main__item main__item-plessure">Pressure: {pressure}</p>
        </section>
    )
}

export default DataSelectedCity;