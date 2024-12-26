import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { DetailsDTO, Weather } from './app.weatherdto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  async getWeatherForecast(location: string,days:number | undefined) :Promise<Weather> {
    let currentWeather={} as Weather
    let parameters : any={
      key:"2fc2a4d6a3804fdd8ad83208241912",
      q:location,
      aqi:"yes",
      alerts:"no"
    };
    
    if(days==undefined){
     
      await axios.get('http://api.weatherapi.com/v1/current.json',{
        params:parameters
      }).then(response=>{
  
      currentWeather.wind=response.data.current.wind_kph+"kph"
      currentWeather.temperature=response.data.current.temp_c+"c"
      currentWeather.aqi=response.data.current.air_quality
      
      }).catch(error=>{
        console.log(error)
      })
    } 
    else{
      parameters={...parameters, days:days}
      await axios.get('http://api.weatherapi.com/v1/forecast.json',{
        params:parameters
      }).then(response=>{
        const forecasts=response.data.forecast.forecastday
        forecasts.forEach(forecast => {
          currentWeather[forecast.date]={
            temperature: forecast.day.avgtemp_c+"c",
            wind: forecast.day.maxwind_kph+"kph",
            aqi: forecast.day.air_quality
          }
        });
       
      
      }).catch(error=>{
        console.log(error)
      })

    }
    
    return currentWeather

  }

  async getTodaysWeather(location: string,days:number | undefined) :Promise<Weather> {
    let currentWeather={} as Weather
    let parameters : any={
      key:"2fc2a4d6a3804fdd8ad83208241912",
      q:location,
      aqi:"yes",
      alerts:"no"
    };
    if(days!=undefined){
      parameters={...parameters, days:days}
    } 
    await axios.get('http://api.weatherapi.com/v1/current.json',{
          params:parameters
    }).then(response=>{
    
      currentWeather.wind=response.data.current.wind_kph+"kph"
      currentWeather.temperature=response.data.current.temp_c+"c"
      currentWeather.aqi=response.data.current.air_quality
        
    }).catch(error=>{
        console.log(error)
    })
    return currentWeather

  }
}
