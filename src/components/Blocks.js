
import { React, useState } from 'react'

import OneDayForecast from './OneDayForecast.js'
import SevenDaysForecast from './SevenDaysForecast.js'



function Blocks() {


  const KEY = '4ca8521531042afe2d4080affc6fb41e'

  const cities = {
    'Самара': [53.195873, 50.100193],
    'Тольятти': [53.507836, 49.420393],
    'Саратов': [51.533557, 46.034257],
    'Казань': [55.796127, 49.106405],
    'Краснодар': [45.035470, 38.975313],
  }


  const [wea, setWea] = useState([]) //из прошлого
  const [icon, setIcon] = useState([])
  const [dates, setDates] = useState([])


  const [dataSeven, setDataSeven] = useState([])




  const getWeatherAfter = async (lat, lon, time) => {

 
    //let time = Math.trunc(new Date().getTime() / 1000);  //округление


    const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&units=metric&appid=${KEY}`)  //из прошлого
    const data = await api_url.json()

    console.log(data)

    let datesJSON = data.current.dt
    let icon = data.current.weather[0].icon
    let temperature = Math.ceil(data.current.temp)
    setWea({ temperature })
    setIcon({ icon })

    //преобразование даты

    let options = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }
    let date = new Date(datesJSON * 1000);
    let dates = date.toLocaleString('ru', options)
    setDates({ dates })

  }





  let temp = Object.values(wea)
  let datesToRender = Object.values(dates)

  const getWeather7days = async (lat, lon) => {

    const api_weather_url = await
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current&units=metric&appid=${KEY}`)  //7 дней

    const data = await api_weather_url.json()

    let dataSeven = data.daily
    setDataSeven({ dataSeven })


  }

  const getLatLon = (city) => cities[city] ?? [];

  const changeCitySevenDays = (value) => {
    const [lat, lon] = getLatLon(value);
    getWeather7days(lat, lon);
  }


  const changeCity = (value) => {
    console.log(value)
    const [lat, lon] = getLatLon(value);
    getWeatherAfter(lat, lon);
  }

  const changeDate = (value) => {
    let date = new Date(value)
    let dateTo = date.getMonth() +1 + '/'+ date.getDate('') +'/' + date.getFullYear('')
    let time = (Date.parse(dateTo))/1000
    //getWeatherAfter(time)
  }

  return (
    <div className="blocks">

      <div className="blocks__card">
        <h1 className="blocks__card__header">7 Days Forecast</h1>
        <div className="blocks__card__inputs">


          <select className="blocks__card__select" onChange={e => changeCitySevenDays(e.target.value)}>
          <option selected disabled>Select City</option>
            <option type="text" name="city" value="Самара">Самара</option>
            <option type="text" name="city" value="Тольятти">Тольятти</option>
            <option type="text" name="city" value="Саратов">Саратов</option>
            <option type="text" name="city" value="Казань">Казань</option>
            <option type="text" name="city" value="Краснодар">Краснодар</option>
          </select>
        </div>
        < SevenDaysForecast dataSeven={dataSeven} />

      </div>


      <div className="blocks__card">
        <h1 className="blocks__card__header">Forecast for a Date in the Past</h1>
        <div className="blocks__card__inputs">
          <select className="blocks__card__select" onChange={e => changeCity(e.target.value)}>
          <option selected disabled>Select City</option>
            <option>Самара</option>
            <option>Тольятти</option>
            <option>Саратов</option>
            <option>Казань</option>
            <option>Краснодар</option>
          </select>
          <input className="blocks__card__select" type="date" onChange={e => changeDate(e.target.value)}>


          </input>
        </div>
        < OneDayForecast temp={temp} datesToRender={datesToRender} icon={icon} />

      </div>
    </div>
  );
}


export default Blocks;