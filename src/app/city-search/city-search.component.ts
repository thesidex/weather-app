import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-city-search',
  templateUrl: './city-search.component.html',
  styleUrls: ['./city-search.component.css']
})
export class CitySearchComponent {
  @Output() citySelected = new EventEmitter<string>();
  searchQuery: string = '';

  searchCity(): void {
    this.citySelected.emit(this.searchQuery);
  }
}
