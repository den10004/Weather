import '../styles/SevenDaysForecast/sevenDaysForecast.css'
import CloudImage from './CloudImage'
import React, { useState, useRef } from 'react'




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



      const [items, setItems] = useState([1])


      const slider = useRef(null)
      const [prev, setPrev] = useState(false)
      const [next, setNext] = useState(false)

      let position = 0;

      const prevHandler = () => {
            if (position === 0) {
                  setPrev(true)
            } else {
                  position += 300
                  setPrev(false)
                  slider.current.childNodes.forEach((e) => {
                        e.style = `transform: translateX(${position}px)`
                  })
            }
      }


      const nextHandler = () => {
            if (position === -(items.length - 6) * 100 + 100) {
                  setNext(true)
                  setPrev(false)
            } else {
                  setPrev(false)
                  position -= 300
                  slider.current.childNodes.forEach((e) => {
                        e.style = `transform: translateX(${position}px)`
                  })
            }
      }

      return (
            <>
                  {  ds ? (
                        <div className='slider'>
                              <div className='slider_track' ref={slider}>
                                    <div className='slider__item'>
                                          <div className='slider-line'>
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

                              </div>
                              <button className='slider__button_next' onClick={nextHandler}></button>
                              <button className='slider__button_prev' onClick={prevHandler}></button>
                        </div>
                  ) : (
                        <CloudImage />
                  )
                  }
            </>
      );
}




export default SevenDaysForecast;





