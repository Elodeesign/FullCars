import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { CarsListComponent } from './cars-list/cars-list.component'
import { AddCarComponent } from './add-car/add-car.component'
import { CarsEditComponent } from './cars-edit/cars-edit.component'

const routes: Routes = [
  { path: '', redirectTo: '/cars-list', pathMatch: 'full' },
  { path: 'cars-list', component: CarsListComponent },
  { path: 'add-car', component: AddCarComponent },
  { path: 'car-edit/:id', component: CarsEditComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    CarsListComponent,
    AddCarComponent,
    CarsEditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
