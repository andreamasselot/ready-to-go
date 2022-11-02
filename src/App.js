import './App.css';
import Switch from './components/Switch';
import Autorisation from './components/Autorisation';

function App() {
  return (
    <div className='container'>
      <header>
        <h1>Ready To Go</h1>
      </header>

      <div className='body'>
        <div className='buttons-container'>
          <Switch />
          <Switch />
          <Switch />
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
