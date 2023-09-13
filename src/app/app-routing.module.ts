import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WeatherComponent } from './weather/weather.component';
import { SteptrackerComponent } from './steptracker/steptracker.component';
import { BookComponent } from './book/book.component';
import { BirthdayComponent } from './birthday/birthday.component';
import { OverviewComponent } from './overview/overview.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'steptracker', component: SteptrackerComponent },
  { path: 'books', component: BookComponent},
  { path: 'birthday', component: BirthdayComponent },
  { path: 'overview', component: OverviewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }