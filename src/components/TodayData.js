const TodayData = () => {
    return(
        <>
            <div className="main__header">
                <div className="main__weather">
                    <h2 className="main__temperature">34</h2>
                    <img className="main__icon" alt='icon'/>
                </div>
                <h2 className="main__location">'s'</h2>
                <p className="main__today"></p>
            </div>
        </>
    )
}

export default TodayData;