import '../styles/OneDayForecast/oneDayForecast.css'
import CloudImage from './CloudImage'
/*
interface OneDay {
    temp: number;
    datesToRender: any;
    icon: any;
}*/


import { FC } from 'react';

export type OwnODFProps = {
  temp?: number[]|unknown[];
  datesToRender?: string[]|unknown[];
  icon?: any;
}

export type ODFProps = FC<OwnODFProps>;


const OneDayForecast:ODFProps = ({temp, datesToRender, icon})=> {

    let im: any = icon?.icon || ''


    return (
        <>
           {im ? (
                <div className="OneDayForecast">
                    <div className="OneDayForecast__data">{datesToRender}</div>
                    <img className="OneDayForecast__image" src={`http://openweathermap.org/img/wn/${im}@2x.png`} alt='rain_image' />
                    <div className="OneDayForecast__temperature">+{temp} C</div>
                </div>

            ) : (<CloudImage />)

            }
        </>
    );
}


export default OneDayForecast;
