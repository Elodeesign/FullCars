import { Component, OnInit } from '@angular/core'
import { CarsService } from '../services/cars.service'

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  constructor(private carsService: CarsService) {}

  cars: any

  ngOnInit() {
    this.carsService.getCars().subscribe(
      result => {
        this.cars = result
        console.log(result)
      },
      e => {
        console.log(e)
      }
    )
  }

  handleDelete = id => {
    this.carsService.getDelete(id).subscribe()
    this.cars = this.cars.filter(item => item.id != id)
  }

  handleEdit = id => {
    console.log('toto')
  }

  onSearch = ref => {
    if (ref.value !== '') {
      this.carsService.getSearchCars(ref.value).subscribe(
        result => {
          this.cars = result
        },
        e => {
          console.log(e)
        }
      )
    }
  }
}
