import rain from '../images/rain.svg';
import '../styles/SevenDaysForecast/sevenDaysForecast.css'



function SevenDaysForecast({ dataSeven }) {


      //console.log(dataSeven)
      // let key = dataSeven
      let keys = Object.values(dataSeven)
  
      //console.log(keys[0][0].temp.day)
      let x = keys[0]
      // console.log(keys[0][0].dt)
      //console.log(keys[0][0].temp.day)
      //console.log(keys[0][0].weather.icon)

      console.log(x) //рендер идёт, но потом всё падает
     
      //console.log(x)

/*
      function q (x) {
            if (x) {
                  <li>Ничего нет</li>} 
            else {<li>dfd</li>}
      }   
      q(x)*/
     
      return (

               <div className="sevenDaysForecast">
                  <div className="slider">
                        {
                              keys.map((e) =>
                                 
                                    <div className="slider__card">
                                          <div className="slider__card__data">{e.dt}</div>
                                          <img className="slider__card__image" src={rain} alt='rain_image' />
                                          <div className="slider__card__temperature">&deg;C</div>
                                    </div>
                              )
                        }
                    
                      {/*  <div className="slider__card">
                              <div className="slider__card__data"></div>
                              <img className="slider__card__image" src={rain} alt='rain_image' />
                              <div className="slider__card__temperature">&deg;C</div>
                        </div>

                        <div className="slider__card">
                              <div className="slider__card__data">hj</div>
                              <img className="slider__card__image" src={rain} alt='rain_image' />
                              <div className="slider__card__temperature"> C</div>
                  </div>*/}



                  </div>

            </div>



      );
}


export default SevenDaysForecast;