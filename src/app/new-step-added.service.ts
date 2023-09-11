import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewStepAddedService {

  hideAddStepButton: boolean = true; // Add this property to manage button visibility
}
