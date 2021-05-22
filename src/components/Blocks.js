//import '../styles/Blocks/Block.css';
import { React, useState } from 'react'
//import CloudImage from './CloudImage'

import OneDayForecast from './OneDayForecast'
import SevenDaysForecast from './SevenDaysForecast'
//import Modal from './Modal'


function Blocks() {


 const cities = {
    'Самара': [53.195873, 50.100193],
    'Тольятти': [53.507836, 49.420393],
    'Саратов': [51.533557, 46.034257],
    'Казань': [55.796127, 49.106405],
    'Краснодар': [45.035470, 38.975313],
  }


  const [wea, setWea] = useState([]) //из прошлого
  const [image, setImage] = useState([])
  const [dates, setDates] = useState([])

  //const [dataSeven, setDataSeven] = useState('')
  const [dataSeven, setDataSeven] = useState([])
  console.log(dataSeven)



  const getWeatherAfter = async (lat, lon) => {

    const KEY = '4ca8521531042afe2d4080affc6fb41e' // мой
    //const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d'
    //const KEY = '82b797b6ebc625032318e16f1b42c016'
    //  e.preventDefault();
    let time = Math.trunc(new Date().getTime() / 1000);  //округление

    const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&units=metric&appid=${KEY}`)  //из прошлого
    const data = await api_url.json()

    let datesJSON = data.current.dt
    let images = Math.ceil(data.current.weather)
    let temperature = Math.ceil(data.current.temp)
    setWea({ temperature })
    setImage({ images })


    //преобразование даты
    let dataFix = new Date(datesJSON * 1000)
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dataF = dataFix.getDate()
    let month = months[dataFix.getMonth()]
    let year = dataFix.getFullYear()

    let dates = (`${dataF} ${month} ${year}`)
    setDates({ dates })

  }

  let temp = Object.values(wea)
  let ima = Object.values(image)
  let datesToRender = Object.values(dates)





 

  const getWeather7days = async (lat, lon) => {

    const KEY = '4ca8521531042afe2d4080affc6fb41e';  //мой

    //const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d';
   // const KEY = '82b797b6ebc625032318e16f1b42c016'
 //   const KEY = 'e486c33df43a0462ba98a38ea4850f06'

    const api_weather_url = await
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current&units=metric&appid=${KEY}`)  //7 дней

    const data = await api_weather_url.json()


    // console.log(data.daily)
    let dataSeven = data.daily
    setDataSeven({ dataSeven })


  }

  const getLatLon = (city) => cities[city] ?? [];


  const changeCitySevenDays = (value) => {
    const [lat, lon] = getLatLon(value);
    getWeather7days(lat, lon);
  }


  const changeCity = (value) => {
    const [lat, lon] = getLatLon(value);
    getWeatherAfter(lat, lon);
  }

  const changeDate = (value) => {
    //let date = new Date(value)
    //console.log(date.getDate()+'.'+(date.getMonth()+1+'.' +date.getFullYear()));
    console.log(value) //2021-05-16


    //getWeatherAfter(value2);
  }

  return (
    <div className="blocks">

      <div className="blocks__card">
        <h1 className="blocks__card__header">7 Days Forecast</h1>
        <div className="blocks__card__inputs">


          <select className="blocks__card__select" onChange={e => changeCitySevenDays(e.target.value)} placeholder="Select City" selected>
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
          <select className="blocks__card__select" onChange={e => changeCity(e.target.value)} placeholder="Select City">
            <option>Самара</option>
            <option>Тольятти</option>
            <option>Саратов</option>
            <option>Казань</option>
            <option>Краснодар</option>
          </select>
          <input className="blocks__card__select" type="date" onChange={e => changeDate(e.target.value)}>


          </input>
        </div>
        < OneDayForecast temp={temp} ima={ima} datesToRender={datesToRender} />

      </div>
    </div>
  );
}


export default Blocks;
