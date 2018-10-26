import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  constructor(private http: HttpClient) {}

  getCars = () => {
    return this.http.get('http://localhost:3000/cars-list')
  }

  getSearchCars = search => {
    return this.http.get('http://localhost:3000/cars-list/' + search)
  }

  getCarsById = id => {
    //return this.http.put()
  }

  getDelete = id => {
    return this.http.delete('http://localhost:3000/cars-list/' + id)
  }

  getAdd = body => {
    return this.http.post('http://localhost:3000/add-car/', body)
  }
}
