//import '../styles/Blocks/Block.css';
import CloudImage from './CloudImage'
import OneDayForecast from './OneDayForecast'
import SevenDaysForecast from './SevenDaysForecast'


function Blocks() {
  return (
    <div className="blocks">
  
      <div className="blocks__card">
        <h1 className="blocks__card__header">7 Days Forecast</h1>
        <div className="blocks__card__inputs">
          <select className="blocks__card__select">
            <option className="blocks__card__select-city">Select City</option>
            <option>Пункт 2</option>
          </select>
        </div>
       < SevenDaysForecast />
       
      </div>



      <div className="blocks__card">
        <h1 className="blocks__card__header">Forecast for a Date in the Past</h1>
        <div className="blocks__card__inputs">
          <select className="blocks__card__select">
            <option className="blocks__card__select-city">Select City</option>
            <option>Пункт 2</option>
          </select>
          <select className="blocks__card__select">
            <option className="blocks__card__select-city">Select City</option>
            <option>Пункт 2</option>
          </select>
        </div>
        < OneDayForecast />
        
      </div>
    </div>
  );
}


export default Blocks;
