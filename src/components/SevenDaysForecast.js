import rain from '../images/rain.svg';
import '../styles/SevenDaysForecast/sevenDaysForecast.css'



function SevenDaysForecast({getData}) {
      console.log(getData())

      return (

            <div className="sevenDaysForecast">
                  <div className="slider">

                        <div className="slider__card">
                              <div className="slider__card__data">{getData()}</div>
                              <img className="slider__card__image" src={rain} alt='rain_image' />
                              <div className="slider__card__temperature">+17 C</div>
                        </div>

                        <div className="slider__card">
                              <div className="slider__card__data">{getData()}</div>
                              <img className="slider__card__image" src={rain} alt='rain_image' />
                              <div className="slider__card__temperature">+17 C</div>
                        </div>

                      <div className="slider__card">
                              <div className="slider__card__data">{getData()}</div>
                              <img className="slider__card__image" src={rain} alt='rain_image' />
                              <div className="slider__card__temperature">+17 C</div>
                        </div>


                  </div>
            
            </div>



      );
}


export default SevenDaysForecast;