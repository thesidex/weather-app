import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '482944e26d320a80bd5e4f23b3de7d1f';
  private apiUrl = 'https://api.openweathermap.org/data/2.5';

  constructor(private http: HttpClient) { }

  getWeatherData(city: string): Observable<any> {
    const url = `${this.apiUrl}/forecast?q=${city}&units=metric&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}
