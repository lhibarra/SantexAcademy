import { Component, OnInit } from '@angular/core';
import { DATA_BAR_CHAR } from 'src/assets/data/bar-chart';
import { IBarChart } from 'src/app/interfaces/charts.interface';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
onSelect($event: any) {
throw new Error('Method not implemented.');
}

  data: IBarChart[]=[];
  view: any[number] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Turistas';
  showYAxisLabel = true;
  yAxisLabel = 'Edades';
  
  colorScheme: Color = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
    name: 'Custom Color 1',
    selectable: true,
    group: ScaleType.Linear,
  };

  ngOnInit(): void {
    this.data = DATA_BAR_CHAR;
  }
}
