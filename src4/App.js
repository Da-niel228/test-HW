
import './App.css';
import Main from './components/main/main';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import {  useState } from 'react';

function App() {
  const API_KEY = '317147e078c54d6c882102156230710'
  const [city, setCity] = useState('')
  const [weather,setWeather] = useState({})
  const [isActive, setIsActive] = useState(false) -
  const getWeather = async () => {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`)
    const data = await response.json()
    console.log(data);
   let a = +prompt('Эльдар эблан?')
   if (a === 'да') {
    alert('Да он конченный еблан')
   } else {
    
   }
    try {
      if(response.status === 200){
setWeather(data)
    setIsActive(true)
      }else if (response.status === 400) {
        setError('Город не найден')
        console.error('Город не найден')
      }else if (response.status === 404) {
        setError('Сервер недоступен')
        console.error('Апи кей хуйня собачья')
      }
       
    } catch (error) {
      
    }
  }
  const reset = () => {
    setWeather(null)
  setIsActive (false)
  setCity("")
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=Bishkek&aqi=no`)
        const data = await response.json()
        setWeather(data)
        setIsActive(true)
      } catch (e) {
        alert('Сервер недоступен или отключен')
      } finally {
        setIsLoading(false)
      }
    })()
  }, []);




  return (
    <div className="App">
      <Header/>
      <Main
      setCity={setCity}
      getWeather={getWeather}
      weather={weather}
      isActive={isActive}
      reset={reset}
      city={city}
      error={error}
      />
      <Footer/>
    </div>
  );
}

export default App;
