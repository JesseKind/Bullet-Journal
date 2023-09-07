import { Injectable } from '@angular/core';
import { Day } from './day';

@Injectable({
  providedIn: 'root',
})
export class DayService {
  private selectedDay?: Day;

  setSelectedDay(day: Day): void {
    this.selectedDay = day;
  }

  getSelectedDay(): Day | undefined {
    return this.selectedDay;
  }
}