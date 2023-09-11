import { Component } from '@angular/core';
import { Day } from '../day';
import { DayService } from '../day.service';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent {
  constructor(
    private dayService: DayService,
    private weatherService: WeatherService,
  ) {}

  get selectedDay(): Day | undefined {
    return this.dayService.getSelectedDay();
  }

  get selectedWeather(): Weather | undefined {
    return this.weatherService.getSelectedWeather();
  }
}
