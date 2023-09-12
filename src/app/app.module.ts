import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SteptrackerComponent } from './steptracker/steptracker.component';
import { WeatherComponent } from './weather/weather.component';
import { BookComponent } from './book/book.component';
import { OverviewComponent } from './overview/overview.component';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WeatherComponent,
    SteptrackerComponent,
    BookComponent,
    OverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

