import {useEffect, useState} from 'react'
import OneDayForecast from './OneDayForecast'
import SevenDaysForecast from './SevenDaysForecast'



function Blocks() {


  const KEY: string = '4ca8521531042afe2d4080affc6fb41e'

  interface ICities {
    [key: string]: [number,number]
  }

  interface IWea {
    [key: string]: number
  }
  interface IDates {
    [key: string]: string
  }

  const cities: ICities = {
    'Самара': [53.195873, 50.100193],
    'Тольятти': [53.507836, 49.420393],
    'Саратов': [51.533557, 46.034257],
    'Казань': [55.796127, 49.106405],
    'Краснодар': [45.035470, 38.975313],
  }

  let dataDefault = Math.trunc(new Date().getTime() / 1000);

  const [wea, setWea] = useState<IWea>({}) //из прошлого
  const [icon, setIcon] = useState<any>()
  const [dates, setDates] = useState<any>({})
  const [lat, setLat] = useState(45.035470)
  const [lon, setLon] = useState(38.975313)
  const [time, setTime] = useState(dataDefault)

  const [dataSeven, setDataSeven] = useState<any>()
  const [temp,setTemp] = useState<number[]>([])
  const [datesToRender,setDatesToRender] = useState<string[]>([])



  const getWeatherAfter = async () => {

  console.log(time,'time getWeatherAfter')
      const api_url = await
          fetch(`https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${time}&units=metric&appid=${KEY}`)  //из прошлого
      const data = await api_url.json()

    if(api_url.status >= 400 ) {

      // валидация
      return
    }



    let datesJSON: any = data.current.dt
    let icon: any = data.current.weather[0].icon
    let temperature: number  = Math.ceil(data.current.temp)

    setWea({ temperature})
    setIcon({ icon })

    //преобразование даты

    let options: object = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    }
    let date = new Date(datesJSON * 1000);
    let dates = date.toLocaleString('ru', options)
    console.log(dates,'dates');
    setDates({ dates })
  }

  const getWeather7days = async (lat:number, lon:number) => {

    const api_weather_url = await
      fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current&units=metric&appid=${KEY}`)  //7 дней

    const data = await api_weather_url.json()

    let dataSeven = data.daily
    setDataSeven({ dataSeven })


  }

  const getLatLon = (city: string) => cities[city] ?? [];

  const changeCitySevenDays = (value:any) => {
    const [lat, lon]:any = getLatLon(value);
    getWeather7days(lat, lon);
  }


  const changeCity = (value:any) => {
    const [lat, lon] = getLatLon(value);

    setLat(lat)
    setLon(lon)
  }

  const changeDate = (value:any) => {
    let date = new Date(value)
    let dateTo = date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear()
    let time = (Date.parse(dateTo)) / 1000
    // console.log(time)
    setTime(time)
  }

  useEffect(()=> {
    console.log(wea,'wea')
    setTemp([...Object.values(wea as IWea)])
  },[wea])


  useEffect(()=> {
    console.log(dates,'dates')
    setDatesToRender([...Object.values(dates as IDates)])
  },[dates])

  useEffect(()=> {
    getWeatherAfter();
  }, [lon,lat,time])

  return (
    <div className="blocks">

      <div className="blocks__card">
        <h1 className="blocks__card__header">7 Days Forecast</h1>
        <div className="blocks__card__inputs">


          <select className="blocks__card__select" onChange={e => changeCitySevenDays(e.target.value)}>
          <option selected disabled>Select City</option>
            <option value="Самара">Самара</option>
            <option value="Тольятти">Тольятти</option>
            <option value="Саратов">Саратов</option>
            <option value="Казань">Казань</option>
            <option value="Краснодар">Краснодар</option>
          </select>
        </div>
        < SevenDaysForecast dataSeven={dataSeven} />

      </div>


      <div className="blocks__card">
        <h1 className="blocks__card__header">Forecast for a Date in the Past</h1>
        <div className="blocks__card__inputs">
          <select className="blocks__card__select" onChange={e => changeCity(e.target.value)}>
          <option selected disabled>Select City</option>
            <option value="Самара">Самара</option>
            <option value="Тольятти">Тольятти</option>
            <option value="Саратов">Саратов</option>
            <option value="Казань">Казань</option>
            <option value="Краснодар">Краснодар</option>
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
