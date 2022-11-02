import './App.css';
import { useState } from 'react';
import Switch from './components/Switch';
import Autorisation from './components/Autorisation';
function App() {

  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(false);
  const [switch3, setSwitch3] = useState(false);


  return (
    <div className='container'>
      <header>
        <h1>Ready To Go</h1>
      </header>

      <div className='body'>
        <div className='buttons-container'>
          <Switch switch={switch1} setSwitch={setSwitch1} />
          <Switch switch={switch2} setSwitch={setSwitch2} />
          <Switch switch={switch3} setSwitch={setSwitch3} />
        </div>
        <div className='autorisation-container'>
          <Autorisation />
        </div>
      </div>

      <footer>
        <p>Made with <span>React</span> at <a href='https://lereacteur.io'>Le Reacteur</a> by <a href='#'> Andréa</a></p>
      </footer>
    </div >
  );
}

export default App;
