import { Component } from '@angular/core';
import { Day } from '../day';
import { DAYS } from '../mock-days';
import { DayService } from '../day.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  days = DAYS;

  constructor(private dayService: DayService) {}

  selectedDay?: Day;
  onSelect(day: Day): void {
    this.dayService.setSelectedDay(day);
    this.selectedDay = day;
    this.visible = !this.visible
  }
     //hiding info box
     visible:boolean = true
}