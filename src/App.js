import Block from './components/Blocks'
import './App.css';


function App() {

  const KEY = '8ddb2ae4d480545c1441bb2374c9ff6d';

  getWeather = async () => {
    const api_url = await
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=moscow&appid=${KEY}`)
  const data = await api_url.json()
  console.log(data)
  }

  return (
    <div className="App">

      <div className="wrapper">
        <div className="headline">
          <h1 className="headline__text">Weather</h1>
          <h1 className="headline__text headline__text_right">forecast</h1>
        </div>
        <Block />

        <footer className="footer">
          <h4 className="footer__text">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</h4>
        </footer>
      </div>


    </div>
  );
}


export default App;
