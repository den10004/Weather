//import '../styles/Blocks/Block.css';
import cloud from '../images/cloud.svg';



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
        <img className="block__card__image" src={cloud} alt='cloud_image' />
        <h4 className="blocks__card__text">Fill in all the fields and the weather will be displayed</h4>
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
        <img className="block__card__image" src={cloud} alt='cloud_image'></img>
        <h4 className="blocks__card__text">Fill in all the fields and the weather will be displayed</h4>
      </div>
    </div>
  );
}


export default Blocks;
