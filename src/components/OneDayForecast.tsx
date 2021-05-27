import '../styles/OneDayForecast/oneDayForecast.css'
import CloudImage from './CloudImage'
import { FC } from 'react';

export type OwnODFProps = {
    temp?: number[] | unknown[];
    datesToRender?: string[] | unknown[];
    icon?: any;
}

export type ODFProps = FC<OwnODFProps>;


const OneDayForecast: ODFProps = ({ temp, datesToRender, icon }) => {

    let im: any = icon?.icon || ''

    return (
        <>
            {im ? (
                <div className="OneDayForecast">
                    <div className="OneDayForecast__data">{datesToRender}</div>
                    <img className="OneDayForecast__image" src={`http://openweathermap.org/img/wn/${im}@2x.png`} alt='rain_image' />
                    <div className="OneDayForecast__temperature">+{temp}&deg; C</div>
                </div>

            ) : (<>
                <h2 style={{margin: '0 auto', paddingTop: '10px'}}>Выберите город и дату за 1- 5 дней</h2>
                <CloudImage />
                </>
            )
            }
        </>
    );
}


export default OneDayForecast;
