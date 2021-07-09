const TodayData = ({data}) => {
    const {temperature, weather_icons: icon, weather_descriptions: today} = data.current;
    const {country, region, name} = data.location;
    
    return(
        <>
            <div className="main__header">
                <div className="main__weather">
                    <h2 className="main__temperature">{temperature}&#8451;</h2>
                    <img className="main__icon" src={icon} alt='icon'/>
                </div>
                <h2 className="main__location">{`${country}, ${region}, ${name}`}</h2>
                <p className="main__today">{today}</p>
            </div>
        </>
    )
}

export default TodayData;