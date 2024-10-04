import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import commonAPI from './commonAPI'
// import { getWeatherDetails } from './weatherApi'




const Weather = () => {

  const [weatherDetails,setWeatherDetails] = useState("")
  const [searchPlace,setSearchPlace] = useState("")

  console.log(searchPlace);
  
  const SERVER_URL = `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`

   const getWeatherDetails = async()=>{
      return await commonAPI("GET",SERVER_URL,"")
  }
  const getWeather = async()=>{
    try {
      const response = await getWeatherDetails()
      console.log(response);
      setWeatherDetails(response.data)
      
      
    } catch (err) {
      
    }
  }
  // console.log(weatherDetails);
  // console.log(weatherDetails?.main);
  
  return (
   
    <div style={{marginLeft:'320px', marginTop:'30px', backgroundColor:' rgb(248, 215, 253)'}} className='w-50 border justify-content-center align-items-center rounded '>
       
        <TextField onChange={e=>setSearchPlace(e.target.value)} style={{marginTop:'50px', marginLeft:'160px', marginBottom:'50px', marginRight:'30px'}} id="outlined-search" label="Enter Any Place" type="search" />

        <Button onClick={getWeather} style={{marginTop:'60px'}} variant="outlined">Search</Button>

      {
        weatherDetails &&(
          <div style={{backgroundColor:'blue', height:'350px', width:'400px', borderRadius:'20px', margin:'0px',marginLeft:'135px'}}>
          <img style={{ height:'350px', width:'400px',borderRadius:'20px'}} src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-weather/draw1.webp" alt="" />
          <h1 style={{marginTop:'-320px'}} className='text-center fw-bolder'>{weatherDetails.name}</h1>
          <h2 style={{color:'blueviolet'}} className='text-center fw-bolder'>{weatherDetails.weather[0].description}</h2>
          <p style={{fontSize:'35px',textAlign:'center'}} className="display-2 my-3">{weatherDetails.main.temp}°C</p>
         
          <hr />
          <div className="d-flex flex-row justify-content-evenly">
           <div> 
            <p className='fw-bolder'>Feels Like</p>
            <p style={{marginTop:'-15px'}}>{weatherDetails.main.feels_like}°C</p>
            </div>

            <div> 
            <p className='fw-bolder'>Wind</p>
            <p style={{marginTop:'-15px'}}>{weatherDetails.wind.speed}m/s</p>
            </div>    

            <div> 
            <p className='fw-bolder'>Humidity</p>
            <p style={{marginTop:'-15px'}}>{weatherDetails.main.humidity}%</p>
            </div>    

          </div>
          <hr />
      </div>
        )
        
        
      
      
      }
       
    </div>
  )
}

export default Weather