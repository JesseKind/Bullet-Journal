import { Component, OnInit } from '@angular/core';
import { Day } from '../day';
import { DAYS } from '../mock-days';
import { DayService } from '../day.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  days = DAYS;
  selectedDay?: Day;
  visible: boolean = true;

  constructor(private dayService: DayService) {}

  ngOnInit(): void {
    this.selectedDay = this.dayService.getSelectedDay();
    if (this.selectedDay) {
      this.visible = false; // Hide the buttons if a day is already selected.
    }
  }

  onSelect(day: Day): void {
    this.dayService.setSelectedDay(day);
    this.selectedDay = day;
    this.visible = false; // Hide the buttons
  } 
}