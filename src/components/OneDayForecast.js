import '../styles/OneDayForecast/oneDayForecast.css'
import CloudImage from './CloudImage'


function OneDayForecast({ temp, datesToRender, icon }) {

    let im = icon.icon

    return (
        <>
            {im ? (
                <div className="OneDayForecast">
                    <div className="OneDayForecast__data">{datesToRender}</div>
                    <img className="OneDayForecast__image" src={`http://openweathermap.org/img/wn/${im}@2x.png`} alt='rain_image' />
                    <div></div>
                    <div className="OneDayForecast__temperature">+{temp} C</div>
                </div>

            ) : (<CloudImage />)
        
        }
       </>
    );
}


export default OneDayForecast;