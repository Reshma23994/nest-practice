import { Controller, Get, Query,Param, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { DetailsDTO, Weather } from './app.weatherdto';

@Controller('weather')
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  
  // @Get(':location')
  // async getWeather(@Param('location') location: DetailsDTO,@Query('days') days) :Promise<Weather> {
  //   console.log(days)
  //   return this.appService.getWeatherForecast(location,days);
  // }
  @Post()
  async getWeather(@Body() details: DetailsDTO) :Promise<Weather> {
       return this.appService.getWeatherForecast(details.location,details.days);
   }


}
