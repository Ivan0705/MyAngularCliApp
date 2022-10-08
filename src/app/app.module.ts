import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarsComponent} from './cars/cars.component';
import {CarComponent} from './car/car.component';
import {MyFormComponent} from './my-form/my-form.component';
import {HttpClientModule} from "@angular/common/http";
import {CarService} from "./service/Car.service";
import {AppRoutingModule} from "./app-routing.module";
import {HomePageComponent} from './home-page/home-page.component';
import {CarPageComponent} from './car-page/car-page.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    MyFormComponent,
    HomePageComponent,
    CarPageComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
