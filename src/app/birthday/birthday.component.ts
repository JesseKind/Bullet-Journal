import { Component, ViewChild, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { CalendarOptions, EventClickArg } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import { Store } from '@ngrx/store';
import { deleteEvent } from '../actions';
import { Router } from '@angular/router';


@Component({
  selector: 'app-birthday',
  templateUrl: './birthday.component.html',
  styleUrls: ['./birthday.component.css']
})
export class BirthdayComponent implements OnInit {
  @ViewChild('fullcalendar', { static: true })
  fullcalendar!: FullCalendarComponent;
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin],
    contentHeight: '600px',
    selectable: true,
    eventClick: this.handleEventClick.bind(this),
  };

  birthdayName: string = ''; // Variable to hold the birthday name
  birthdayDate: string = ''; // Variable to hold the birthday date

  constructor(
    private store: Store,
    public router: Router ) {} // Inject the Store service

  ngOnInit() {
    this.calendarOptions.events = [
      {
        title: 'Jan',
        start: '2023-09-20',
        id: '1', 
      },
      // Add more birthday events as needed
    ];
  }

  // Function to add birthday events 
  addBirthday() {
    if (this.birthdayName && this.birthdayDate) {
      const calendarApi = this.fullcalendar.getApi();
      calendarApi.addEvent({
        title: this.birthdayName,
        start: this.birthdayDate,
        id: String(Date.now()),
      });

      // Clear the input fields after adding the birthday
      this.birthdayName = '';
      this.birthdayDate = '';
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    console.log('Event clicked:', clickInfo.event);
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      console.log('Deleting event:', clickInfo.event);
      this.store.dispatch(deleteEvent({ id: clickInfo.event.id }));
    }
  }
  
}
