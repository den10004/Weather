import rain from '../images/rain.svg';
import '../styles/SevenDaysForecast/sevenDaysForecast.css'



function SevenDaysForecast({ dataSeven }) {

     let ds = dataSeven.dataSeven


      return (

            <div>
                  <div className="sevenDaysForecast">
                        <div className="slider">
                              {
                                    ds && ds.map((e) =>

                                          <div className="slider__card" key={e.id}>
                                                <div className="slider__card__data">{e.dt}</div>
                                                <img className="slider__card__image" src={rain} alt='rain_image' />
                                                <div className="slider__card__temperature">{e.temp.day}&deg; C</div>
                                          </div>)
                              }


                        </div>



                  </div>

            </div>



      );
}


export default SevenDaysForecast;