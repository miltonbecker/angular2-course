import { Component } from '@angular/core';
import { CarPart } from './car-part';
import { RacingDataService } from './racing-data.service';

@Component({
  selector: 'car-parts',
  templateUrl: 'app/car-parts.component.html'
})
export class CarPartsComponent {
  carParts: CarPart[];

  constructor(private racingDataService: RacingDataService) {}

  ngOnInit() {
    this.racingDataService.getCarParts()
        .subscribe(carParts => this.carParts = carParts);
  }

  totalCarParts() {
    let sum = 0;
    if (Array.isArray(this.carParts)) {
      for (let carPart of this.carParts) {
        sum += carPart.inStock;
      }
    }
    return sum;
  }

  upQuantity(carPart) {
    if (carPart.quantity < carPart.inStock)
      carPart.quantity++;
  }

  downQuantity(carPart) {
    if (carPart.quantity != 0)
      carPart.quantity--;
  }

}
