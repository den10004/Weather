//import '../styles/Blocks/Block.css';
import { React, useState } from 'react'
//import CloudImage from './CloudImage'

import OneDayForecast from './OneDayForecast'
import SevenDaysForecast from './SevenDaysForecast'
import Modal from './Modal'


function Blocks() {


  const [modal, setModal] = useState(false)
  const [selectCity, setSelectCity] = useState('')

  const selectCityToString = Object.values(selectCity).join()


  //переводит города в координаты
  let arr = (selectCityToString === 'Самара') ? ([53.195873, 50.100193]) :
    (selectCityToString === 'Тольятти') ? ([53.507836, 49.420393]) :
      (selectCityToString === 'Саратов') ? ([51.533557, 46.034257]) :
        (selectCityToString === 'Казань') ? ([55.796127, 49.106405]) :
          (selectCityToString === 'Краснодар') ? ([45.035470, 38.975313]) :
            []


  let lat = arr[0]
  let lon = arr[1]

  //console.log('start', lat)
  //console.log('start', lon)
 
  const [wea, setWea] = useState('') //из прошлого
  const [image, setImage] = useState('')
  const [dates, setDates] = useState('')

  const [tempS, setTempS] = useState('')  //7 дней
  const [date, setDate] = useState('')
  const [dataSeven, setDataSeven] = useState('')



  const getWeatherAfter = async (lat, lon) => {
  //  console.log(lat)
   // console.log(lon)

    //const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d';
    const KEY = '82b797b6ebc625032318e16f1b42c016'
    //  e.preventDefault();
    let time = Math.trunc(new Date().getTime() / 1000);  //округление

    const api_url = await
      fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&units=metric&appid=${KEY}`)  //из прошлого
    const data = await api_url.json()
    //console.log(data)
 
    
    
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

    //const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d';
    const KEY = '82b797b6ebc625032318e16f1b42c016'


    const api_weather_url = await
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current&units=metric&appid=${KEY}`)  //7 дней

    const data = await api_weather_url.json()
   // console.log(data.daily)
    let dataSeven = data.daily
  //  console.log(dataSeven)
/*
    const data1 = JSON.stringify(xx)
    console.log(data1)
    const data2 = JSON.parse(data1)
    console.log(data2)*/
/*
    let date = xx.map(item => {
      return item.dt 
    })
   

   let tempS = xx.map(item => {
    return Math.ceil(item.temp.day )
  })
   */
    //console.log(data1.daily[0].temp.day)
    // console.log(data.daily[0].weather[0].icon)
   /* let icons = xx.map(item => {
      return item.weather
    })*/
    //  console.log(icons)

      setDataSeven({dataSeven})
     // setDate({date})
     // setTempS({tempS})

  }


  //getWeather7days(51.533557, 46.034257)

  function changeCity(event, lat, lon) {
    //console.log(lat)
  //  console.log(lon)
    setSelectCity({ value: event.target.value })//кнопка
    getWeatherAfter(51.533557, 46.034257) //асинхрон запрос
   // getWeatherAfter(lat, lon) //асинхрон запрос
  }

  function changeCity2 (event, lat, lon) {
      setSelectCity({ value: event.target.value })//кнопка
    getWeather7days(51.533557, 46.034257) //асинхрон запрос
    // getWeather7days(lat, lon) //асинхрон запрос
  }



  //getWeather(lat, lon)
  // console.log("get", lat)
  //console.log("get", lon)

  return (
    <div className="blocks">

      <div className="blocks__card">
        <h1 className="blocks__card__header">7 Days Forecast</h1>
        <div className="blocks__card__inputs">


          <select className="blocks__card__select" value={selectCity.value} onChange={changeCity2} placeholder="Select City" selected>
            <option type="text" name="city" value="Самара">Самара</option>
            <option type="text" name="city" value="Тольятти">Тольятти</option>
            <option type="text" name="city" value="Саратов">Саратов</option>
            <option type="text" name="city" value="Казань">Казань</option>
            <option type="text" name="city" value="Краснодар">Краснодар</option>
          </select>
        </div>
        < SevenDaysForecast dataSeven={dataSeven}/>

      </div>


      <div className="blocks__card">
        <h1 className="blocks__card__header">Forecast for a Date in the Past</h1>
        <div className="blocks__card__inputs">
          <select className="blocks__card__select" getWeatherAfter={getWeatherAfter} onChange={changeCity} placeholder="Select City">
            <option>Самара</option>
            <option>Тольятти</option>
            <option>Саратов</option>
            <option>Казань</option>
            <option>Краснодар</option>
          </select>
          <div className="blocks__card__select">
            <div className="blocks__card__select-city">Select date</div>
            <button className="blocks__card__select-button" onClick={() => setModal(true)}></button>

            <Modal isOpened={modal} setModal={setModal} />

          </div>
        </div>
        < OneDayForecast temp={temp} ima={ima} datesToRender={datesToRender} />

      </div>
    </div>
  );
}


export default Blocks;
