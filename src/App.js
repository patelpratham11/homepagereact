import "./App.css";
import Weather from "./Components/Weather";
import Clock from "./Components/Clock";
import Name from "./Components/Name";
import Date from "./Components/Date"
import Links from "./Components/Links";
import Search from "./Components/Search";

function App() {
  return (
    <div className="App">
      <div className="Left">
        <div className="Clock">
          <Clock></Clock>
        </div>
        <div className="Weather">
          <Weather></Weather>
        </div>
        
      </div>
      <div className="Center">
        <div className="Name">
          <Name></Name>
        </div>
        <div className="Date">
            <Date></Date>
        </div>
        <div className="Search">
            <Search></Search>
        </div>
        
      </div>
      <div className="Right">
        
      <div className="Links">
          <Links></Links>
        </div>
        
      </div>
    </div>
  );
}

export default App;
