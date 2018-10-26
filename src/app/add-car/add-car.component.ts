import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

import { CarsService } from '../services/cars.service'

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  constructor(private carsService: CarsService, private router: Router) {}

  ngOnInit() {}

  onSubmit = (
    event,
    brand,
    color,
    year,
    km,
    doors,
    technical_control,
    img,
    price,
    energy
  ) => {
    this.carsService
      .getAdd({
        brand: brand.value,
        color: color.value,
        year: year.value,
        km: km.value,
        doors: doors.value,
        technical_control: technical_control.value,
        img: img.value,
        price: price.value,
        energy: energy.value
      })
      .subscribe()
    this.router.navigate(['/cars-list'])
  }
}
