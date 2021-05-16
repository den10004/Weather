import Block from './components/Blocks'
import './App.css';


function App() {

  function getData() {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date()
    let dataF = date.getDate()
    let month = months[date.getMonth()]
    let year = date.getFullYear()

    return `${dataF} ${month} ${year}`
  }
  //console.log()


  return (
    <div className="App">

      <div className="wrapper">
        <div className="headline">
          <h1 className="headline__text">Weather</h1>
          <h1 className="headline__text headline__text_right">forecast</h1>
        </div>
        <Block getData={getData} />

        <footer className="footer">
          <h4 className="footer__text">C ЛЮБОВЬЮ ОТ MERCURY DEVELOPMENT</h4>
        </footer>
      </div>


    </div>
  );
}


export default App;
