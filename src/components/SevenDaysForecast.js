import rain from '../images/rain.svg';
import '../styles/SevenDaysForecast/sevenDaysForecast.css'



function SevenDaysForecast({ dataSeven }) {

      let ds = dataSeven.dataSeven

      function converter(a) {
            let options = {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric'
            }
            let date = new Date(a * 1000);
            return <div className="slider__card__data">{date.toLocaleString('ru', options)}</div>
      }



      return (

            <div>
                  <div className="sevenDaysForecast">
                        <div className="slider">
                              {
                                    ds && ds.map((e) =>
                                          <div className="slider__card" key={e.id}>
                                                {converter(e.dt)}
                                                <img className="slider__card__image" src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt='rain_image' />
                                                <div className="slider__card__temperature">{Math.ceil(e.temp.day)}&deg; C</div>
                                          </div>)
                              }


                        </div>



                  </div>

            </div>



      );
}


export default SevenDaysForecast;