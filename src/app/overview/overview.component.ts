import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { Day } from '../day';
import { DayService } from '../day.service';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements AfterViewInit {
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

  ngAfterViewInit() {
    const swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
}
