import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StepVisibilityService {
  private showAddStepButton = true;

  toggleVisibility() {
    this.showAddStepButton = !this.showAddStepButton;
  }

  isButtonVisible() {
    return this.showAddStepButton;
  }
}
