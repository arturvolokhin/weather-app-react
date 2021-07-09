const PaintModalHistoryItem = ({data}) => {
    const {temperature, wind_dir: wind, wind_speed: windSpeed,
        cloudcover} = data.current;

    const {country, region, name, localtime: localTime} = data.location; 

    return (
        <ul className="modal__list">
            <li className="modal__item">{`${country}, ${region}, ${name}`}</li>
            <li className="modal__item">{temperature}&#8451;</li>
            <li className="modal__item">Time: {localTime.slice(11, 16)}</li>
            <li className="modal__item">Wind: {wind}</li>
            <li className="modal__item">Wind speed: {windSpeed}</li>
            <li className="modal__item">Cloudcover: {cloudcover}</li>
        </ul>
    )
}

export default PaintModalHistoryItem;