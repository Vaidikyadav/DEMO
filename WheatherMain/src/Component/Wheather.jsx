import React, { useState } from 'react'
import axios from'axios'

const Wheather = () => {
  const[data ,SetData] = useState({})
  const[location,setLocation] = useState('')

     const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5c9e28ce425c1ddaf8c7543db1d2e7e9`

     const searchLocation =()=>{
      if (event.key ==='Enter'){
         axios.get(url).then((Response)=>{
          SetData(Response.data)
          console.log(Response.data)
      })
      setLocation('')
      }
     }

  return (
    <div className='app'> 
    <div className="Search">
      <input value={location}
      onChange={event => setLocation(event.target.value)}
      onKeyPress={searchLocation}
      placeholder='Enter Location'
      type="text"/>
    </div>
    <div className='container'>
      <div className='top'>
        <div className='location'>
          <p>{data.name}</p>
        </div>
        <div className='temp'>
          <h1> {data?.main?.temp}°F</h1>
        </div>
        <div className='description '>
          <p>{data?.weather?.main}</p>
          </div>    
        <div className="bottom">
          <div className="feels">
            <p>{data?.main?.feels_like}°F</p>
          <p>Feels Like</p>
          </div>
          <div className="humidity">
            <p>{data?.main?.humidity}</p>
            <p>Humidity</p>
          </div>
          <div className="wind">
            <p>{data?.wind?.speed}</p>
            <p> Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Wheather
