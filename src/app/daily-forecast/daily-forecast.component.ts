import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  styleUrls: ['./daily-forecast.component.css']
})
export class DailyForecastComponent implements OnInit {
  @Input() data: any;
  lastUpdated: Date = new Date();  // Initialize directly

  ngOnInit(): void {
    this.updateLastUpdated();
  }

  roundTemperature(temp: number): number {
    return Math.round(temp);
  }

  updateLastUpdated(): void {
    this.lastUpdated = new Date();
  }
}
