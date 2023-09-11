import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Step } from '../step';
import { STEPS } from '../mock-steps';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-steptracker',
  templateUrl: './steptracker.component.html',
  styleUrls: ['./steptracker.component.css'],
})
export class SteptrackerComponent implements OnInit {
  steps = STEPS;
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  // Initialize the bar chart data with an empty array
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        data: [], // Initialize with an empty array
        label: 'Steps taken',
        backgroundColor: 'rgba(75, 192, 192, 1)', // Change the background color
        borderColor: 'rgba(75, 192, 192, 1)', // Change the border color
      },
    ],
  };

  // Initialize the bar chart options
  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  newStepName: string = ''; // Variable to store the new step name

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    // Initialize the chart data with data from mock-steps during component initialization.
    this.updateBarChartData();
  }

  addStep() {
    // Check if newStepName is not empty
    if (this.newStepName.trim() !== '') {
      const newStep: Step = {
        id: this.steps.length + 1, // Generate a new ID
        name: this.newStepName,
      };
  
      // Push the new step to the steps array
      this.steps.push(newStep);
  
      // Update the bar chart data
      this.updateBarChartData();
  
      // Clear the input field
      this.newStepName = '';
  
      // Trigger change detection to update the chart
      this.changeDetectorRef.detectChanges();
    }
  }

  // Update the bar chart data
  updateBarChartData() {
    // Map the steps data to the chart data
    const stepData = this.steps.map((step) => +step.name); // Convert step names to numbers
    this.barChartData.datasets[0].data = stepData;
  }
  
  // Handle input changes and prevent non-numeric characters
  handleInputChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    let inputValue = inputElement.value;

    // Remove non-numeric characters and leading zeros
    inputValue = inputValue.replace(/[^0-9]/g, '').replace(/^0+/, '');

    // Update the input field value
    inputElement.value = inputValue;

    // Update the newStepName variable with the sanitized input
    this.newStepName = inputValue;
  }
}