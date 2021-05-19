import rain from '../images/rain.svg';
import '../styles/OneDayForecast/oneDayForecast.css'


function OneDayForecast({temp, ima, datesToRender}) {

    
    return (
       
          <div className="OneDayForecast">
              <div className="OneDayForecast__data">{datesToRender}</div>
              <img className="OneDayForecast__image" src={rain} alt='rain_image'></img>
              <div>{ima}</div>
              <div className="OneDayForecast__temperature">+{temp} C</div>
          </div>         
    );
  }
  
  
  export default OneDayForecast;