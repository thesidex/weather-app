import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  hourlyData: any;
  dailyData: any;
  currentCity: string = 'Los Angeles';
  cities: string[] = ['Rio de Janeiro', 'Beijing', 'Los Angeles'];
  searchVisible: boolean = false;
  searchQuery: string = '';

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.fetchWeatherData(this.currentCity);
  }

  selectCity(city: string): void {
    this.currentCity = city;
    this.fetchWeatherData(city);
  }

  fetchWeatherData(city: string): void {
    this.weatherService.getWeatherData(city).subscribe(data => {
      this.hourlyData = data.list.slice(0, 8);  // First 24 hours (8*3 hours)
      this.dailyData = data.list.filter((item: any, index: number) => index % 8 === 0).slice(0, 5);  // Daily data
    });
  }

  refreshData(): void {
    this.fetchWeatherData(this.currentCity);
  }

  isActive(city: string): boolean {
    return this.currentCity === city;
  }

  toggleSearch(): void {
    this.searchVisible = !this.searchVisible;
  }

  searchCity(): void {
    if (this.searchQuery) {
      this.selectCity(this.searchQuery);
      this.searchVisible = false;
    }
  }
}
