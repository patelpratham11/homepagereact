import './App.css';
import Weather from './Components/Weather';
import Clock from './Components/Clock';

function App() {
  return (
    <div className="App">
      <div className='Clock'><Clock></Clock></div>
      <div className='Weather'><Weather></Weather></div>
      
    </div>
  );
}

export default App;
