import { animation } from '@angular/animations';
import { Component } from '@angular/core'
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CanvasJSAngularChartsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  // bar chart
  barChartOption = {
    title: {
      text: 'Sales of Fruits',
    },
    data: [
      {
        type: 'column',
        dataPoints: [
          { label: 'Apple', y: 10 },
          { label: 'Orange', y: 15 },
          { label: 'Banana', y: 25 },
          { label: 'Mango', y: 30 },
          { label: 'Grape', y: 28 },
          { label: 'Pineapple', y: 23},
          { label: 'Strawberry', y: 20 },
        ],
      },
    ],
    animationEnabled: true,
    theme: "light1",
  };

  // line chart
  lineChartOption = {
    title: {
      text: 'Sales of Fruits',
    },
    data: [
      {
        type: 'line',
        dataPoints: [
          { label: 'Apple', y: 10 },
          { label: 'Orange', y: 15 },
          { label: 'Banana', y: 25 },
          { label: 'Mango', y: 30 },
          { label: 'Grape', y: 28 },
          { label: 'Pineapple', y: 23},
          { label: 'Strawberry', y: 20 },
        ],
      },
    ],
    animationEnabled: true,
    theme: "light1",
  };

  // area chart
  areaChartOption = {
    title: {
      text: 'Sales of Fruits',
    },
    data: [
      {
        type: 'area',
        dataPoints: [
          { label: 'Apple', y: 10 },
          { label: 'Orange', y: 15 },
          { label: 'Banana', y: 25 },
          { label: 'Mango', y: 30 },
          { label: 'Grape', y: 28 },
          { label: 'Pineapple', y: 23},
          { label: 'Strawberry', y: 20 },
        ],
      },
    ],
    animationEnabled: true,
    theme: "light1",
  };

  // doughnut chart
  doughnutChartOption = {
    title: {
      text: 'Sales of Fruits',
    },
    data: [
      {
        type: 'doughnut',
        showInLegend: true,
        legendText: '{label}',
        dataPoints: [
          { label: 'Apple', y: 10 },
          { label: 'Orange', y: 15 },
          { label: 'Banana', y: 25 },
          { label: 'Mango', y: 30 },
          { label: 'Grape', y: 28 },
          { label: 'Pineapple', y: 23},
          { label: 'Strawberry', y: 20 },
        ],
      },
    ],
    animationEnabled: true,
    theme: "light1",
  };

  // pie chart
  pieChartOption = {
    title: {
      text: 'Sales of Fruits',
    },
    data: [
      {
        type: 'pie',
        showInLegend: true,
        legendText: '{label}',
        dataPoints: [
          { label: 'Apple', y: 10 },
          { label: 'Orange', y: 15 },
          { label: 'Banana', y: 25 },
          { label: 'Mango', y: 30 },
          { label: 'Grape', y: 28 },
          { label: 'Pineapple', y: 23},
          { label: 'Strawberry', y: 20 },
        ],
      },
    ],
    animationEnabled: true,
    theme: "light1",
  };



}
