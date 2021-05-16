import rain from '../images/rain.svg';
import '../styles/OneDayForecast/oneDayForecast.css'


function OneDayForecast({date}) {

    

    return (
       
          <div className="OneDayForecast">
              <div className="OneDayForecast__data">25 ыуз 2021</div>
              <img className="OneDayForecast__image" src={rain} alt='rain_image'></img>
              <div className="OneDayForecast__temperature">+17 C</div>
          </div>
    
       
         
    );
  }
  
  
  export default OneDayForecast;