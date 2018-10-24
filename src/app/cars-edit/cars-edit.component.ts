import { Component, OnInit } from '@angular/core'
import { CarsService } from '../services/cars.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.css']
})
export class CarsEditComponent implements OnInit {
  constructor(
    private carsService: CarsService,
    private route: ActivatedRoute
  ) {}

  car: any

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')

    this.car = this.carsService.getCarsById(id).subscribe(
      result => {
        this.car = result
        console.log(result)
      },
      e => {
        console.log(e)
      }
    )
  }
}
