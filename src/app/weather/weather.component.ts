import { Component, OnInit } from '@angular/core';
import { Weather } from '../weather';
import { WEATHER } from '../mock-weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weather = WEATHER;
  selectedWeather?: Weather;
  visible: boolean = true;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.selectedWeather = this.weatherService.getSelectedWeather();
    if (this.selectedWeather) {
      this.visible = false; // Hide the buttons if a day is already selected.
    }
  }

  onSelect(weather: Weather): void {
    this.weatherService.setSelectedWeather(weather);
    this.selectedWeather = weather;
    this.visible = false; // Hide the buttons
  }
}
