import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SteptrackerComponent } from './steptracker/steptracker.component';
import { WeatherComponent } from './weather/weather.component';
import { BookComponent } from './book/book.component';
import { QuoteComponent } from './quote/quote.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { OverviewComponent } from './overview/overview.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgChartsModule } from 'ng2-charts';
import { StoreModule } from '@ngrx/store';
import { reducer as eventReducer } from './events.reducer'; // Import your event reducer


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    SteptrackerComponent,
    BookComponent,
    QuoteComponent,
    BirthdayComponent,
    OverviewComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule,
    FullCalendarModule,
    StoreModule.forRoot({
      events: eventReducer, // 'events' should match your feature name
      // Add other reducers as need
    
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

