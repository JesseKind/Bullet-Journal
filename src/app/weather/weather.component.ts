import { Component } from '@angular/core';
import { Weather } from '../weather';
import { WEATHER } from '../mock-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weather = WEATHER;

  constructor(private weatherService: WeatherService) {}

  selectedWeather?: Weather;
  onSelect(weather: Weather): void {
    this.weatherService.setSelectedWeather(weather);
    this.selectedWeather = weather;
    this.visible = !this.visible
  }
  //hiding info box
  visible: boolean = true;
}
