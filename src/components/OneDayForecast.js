import '../styles/OneDayForecast/oneDayForecast.css'


function OneDayForecast({ temp, datesToRender, icon }) {
    
    let im = icon.icon

    return (
        <div className="OneDayForecast">
            <div className="OneDayForecast__data">{datesToRender}</div>
            <img className="OneDayForecast__image" src={`http://openweathermap.org/img/wn/${im}@2x.png`} alt='rain_image' />
            <div></div>
            <div className="OneDayForecast__temperature">+{temp} C</div>
        </div>
    );
}


export default OneDayForecast;