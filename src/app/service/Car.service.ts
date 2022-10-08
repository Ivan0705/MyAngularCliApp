import {Injectable} from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CarService {
  constructor(private  http: HttpClient) {
  }

  url: string = `http://localhost:3000/cars`;

  getCars() {
    return this.http.get(`http://localhost:3000/cars`)
  }

  addCar(carName: string, carColor: string) {
    const data = {
      name: carName,
      color: carColor,
    };
    return this.http.post(this.url, data);
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(this.url + `/${car.id}`, car)
  }

  deleteCar(car: any) {
    return this.http.delete(this.url + `/${car.id}`)
  }
}
