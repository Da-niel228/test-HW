import React from 'react'
import './main.css'



const Main = ({setCity,getWeather,weather,isActive,reset,city,error}) => {
  return (
    <div className='main'>
        <div className='inputs'>
            <input type="text" placeholder='Введите город' className='huinya' onChange={(e) => setCity(e.target.value)} value={city}/>
            <input className='jantai' type="button" value="Узнать погоду" onClick={getWeather}/>
            <input className='jantai2' type="button" value="Сбросить" onClick={reset}/>
        </div>
        <div className="weather">
          <div className="error">
             <p>
              {error}
             </p>
          </div>
        <div className='country'>
          {isActive ? weather.location.country : null}
        </div>
        <div className='temp'>
          {isActive ? 
            <div>
              {weather.current.temp_c} C
            </div>
          : null} 
        </div>
        <div className='wind'>
        {isActive ?  <div>Скорость ветра {weather.current.wind_kph} км\ч </div> : null} 
        </div>
        <div className='pressure'>
        {isActive ? <div>давление {weather.current.pressure_in}</div> : null}
        </div>
        </div>
    </div>
  )
}

export default Main