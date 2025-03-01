import React, {useState} from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState({}); 
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=bab999ca1ca6869991e0d2db8aa85867`;  
const searchLocation = () => {
  axios.get(url).then((response) => {
    setData(response.data);
    console.log(response.data);
  })
}



return (
   <div className = "app">
    <div className = "search">
      <input
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            searchLocation();
          }
        }}
        placeholder="Enter Location"
        type="text"
      /> = {searchLocation} 
        
       
      </div>
    <div className = "container">
      <div className="top"> 
        <div className="location">
          <p>({data.name})</p>
      </div>
      <div className="temp">
        {data.main?<h1>{data.main.temp.toFixed()}°C</h1> : null}
        
      </div>
      <div className="description">
        {data.weather ? <p>{data.weather[0].main}</p> : null}
        <p>Clouds</p>
      </div>
      </div>


      {data.name !== undefined &&
      <div className="bottom">
       <div className="feels">
        {data.main ?<p className="bold">{data.main.feels_like.toFixed()}°C</p>:null }
          <p className="bold"></p>
          <p>Feels Like</p>
          
          
        </div>
        <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
           <p>humidity</p>
        </div>
        <div className="wind">
           {data.main ? <p className="bold">{data.wind.speed.toFixed()}Km/h</p> : null}
           <p>Wind Speed</p>
        </div>
        </div>
      }
      </div>

    </div>

   
  );
}

export default App;
