import './App.css';
import {useState} from 'react';
import Image from './Image/nature.png';
const api = {
  key:"6bb313dd1cb2341a18b6eaa7ee6cb4e1",
  base: "https://api.openweathermap.org/data/2.5/",
};
function App() {
  const [search,setSearch] = useState("");
  const [weather,setWeather]=useState({});

  const searchPressed = ()=> {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${api.key}`)
      .then((res) =>res.json())
      .then((result) => {
         setWeather(result);
       }) ;
  }
  return (
    <div className="App">
      <div className="background" style={{ backgroundImage: `url(${Image})` }}></div>
      <header className="App-header">
        {/* Header */}
       <h1>Weather In Your City</h1>

       {/* Search Box */}
       <div>
       <input type="text" placeholder="Search..."
       onChange={(e) => setSearch(e.target.value)}
       />
        <button onClick={searchPressed}>Search</button>
        </div>
        {typeof weather.main !="undefined"?
        
      <div>
       {/* Location */}
        <p>{weather.name}</p>
       {/* Temperature F/C */}
         <p>{weather.main.temp}*C</p> 
       {/* Condition */}
       <p>{weather.weather[0].main}</p>
        <p>({weather.weather[0].description})</p>
      </div>
      :
      ''
      }
      </header>
    </div>
  );
}

export default App;
