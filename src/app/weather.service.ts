import { Injectable } from '@angular/core';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private selectedWeather?: Weather;

  setSelectedWeather(weather: Weather): void {
    this.selectedWeather = weather;
  }

  getSelectedWeather(): Weather | undefined {
    return this.selectedWeather;
  }
}