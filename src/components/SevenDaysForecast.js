import '../styles/SevenDaysForecast/sevenDaysForecast.css'
import CloudImage from './CloudImage'



function SevenDaysForecast({ dataSeven }) {

      let ds = dataSeven.dataSeven
     // console.log(ds.index)
      let offset = 0;

      let sliderLine = {
            width: '80%',
            height: '200px',
            display: 'flex',
            position: 'relative',
            left: '0px',
            transition: 'all ease 1s',
      }


      function converter(a) {
            let options = {
                  day: 'numeric',
                  month: 'numeric',
                  year: 'numeric'
            }
            let date = new Date(a * 1000);
            return <div className="slider__card__data">{date.toLocaleString('ru', options)}</div>
      }

      function prev() {

            offset = offset + 127;
            if (offset > 508) {
                  offset = 0;
                  sliderLine = Object.assign({ "left": "-127px" })
            }
      }
      //    sliderLine.style.left = -offset + 'px';

      console.log(sliderLine.left)

 
      function next() {

            offset = offset - 127;
            if (offset < 0) {
                  offset = 508;
            }
      }


      return (

            <>
                  {ds ? (
                        <div className="sevenDaysForecast">
                              <div className="slider">
                                    <div style={sliderLine} >
                                          {
                                                ds && ds.map((e, index) =>
                                                      <div className="slider__card" key={index}>
                                                            {converter(e.dt)}
                                                            <img className="slider__card__image" src={`http://openweathermap.org/img/wn/${e.weather[0].icon}@2x.png`} alt='rain_image' />
                                                            <div className="slider__card__temperature">{Math.ceil(e.temp.day)}&deg; C</div>
                                                      </div>)
                                          }
                                    </div>

                              </div>
                              <button className="slider-prev" onClick={prev}>Prev</button>
                              <button className="slider-next" onClick={next}>Next</button>
                        </div>

                  ) : (
                        <CloudImage />
                  )

                  }






            </>



      );
}


export default SevenDaysForecast;