//import '../styles/Blocks/Block.css';
import { React, useState } from 'react'
import CloudImage from './CloudImage'

import OneDayForecast from './OneDayForecast'
import SevenDaysForecast from './SevenDaysForecast'
import Modal from './Modal'


function Blocks({ getData }) {


  const [modal, setModal] = useState(false)
  const [selectCity, setSelectCity] = useState('')

  const selectCityToString = Object.values(selectCity).join()

  //переводит города в координаты
  let arr = []
 console.log(arr)

  console.log(arr[0])
 // console.log(arr[1])

  if (selectCityToString === 'Самара') {
    arr.push(53.195873, 50.100193)
  }
  if (selectCityToString === 'Тольятти') {
    arr.push(53.507836, 49.420393)
  }
  if (selectCityToString === 'Саратов') {
    arr.push(51.533557, 46.034257)
  }

  if (selectCityToString === 'Казань') {
    arr.push(55.796127, 49.106405)
  }
  if (selectCityToString === 'Краснодар') {
    arr.push(45.035470, 38.975313)
  }
  else {
    arr.push(false)
  }


  function changeCity(event) {
    setSelectCity({ value: event.target.value })
    getWeather(selectCityToString)
  }

/*
Самара (53.195873, 50.100193)
Тольятти (53.507836, 49.420393)
Саратов (51.533557, 46.034257)
Казань (55.796127, 49.106405)
Краснодар (45.035470, 38.975313)*/


  const getWeather = async (e, lat = "53.195873", lon = "50.100193") => {

    const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d';
    //  e.preventDefault();
    //const city = e.target.elements.city.value

    let timeMashime = Math.trunc(new Date().getTime()/1000);  //округление
/*
    const api_url = await
       // fetch(`https://api.openweathermap.org/data/2.5/weather?q=${selectCityToString}&appid=${KEY}`)
    //  fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${KEY}`)
    fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timeMashime}&appid=${KEY}`)  //7 дней
    const data = await api_url.json()
    console.log(data)*/
    //console.log(data.main.temp)
  }



  getWeather()



  return (
    <div className="blocks">

      <div className="blocks__card">
        <h1 className="blocks__card__header">7 Days Forecast</h1>
        <div className="blocks__card__inputs">


          <select className="blocks__card__select" value={selectCity.value} onChange={changeCity} >
            <option className="blocks__card__select-city" value="">Select City</option>
            <option type="text" name="city" value="Самара">Самара</option>
            <option type="text" name="city" value="Тольятти">Тольятти</option>
            <option type="text" name="city" value="Саратов">Саратов</option>
            <option type="text" name="city" value="Казань">Казань</option>
            <option type="text" name="city" value="Краснодар">Краснодар</option>
          </select>
        </div>
        < SevenDaysForecast getData={getData} />

      </div>



      <div className="blocks__card">
        <h1 className="blocks__card__header">Forecast for a Date in the Past</h1>
        <div className="blocks__card__inputs">
          <select className="blocks__card__select">
            <option className="blocks__card__select-city">Select City</option>
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
        < OneDayForecast />

      </div>
    </div>
  );
}


export default Blocks;
