import Block from './components/Blocks'
import './App.css';


function App() {


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
