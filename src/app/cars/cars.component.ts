import {Component, OnInit} from '@angular/core';
import {CarService} from "../service/Car.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: any = [];
  carColors: Array<string> = [
    'Red',
    'Blue',
    'White',
    'Pink',
    'Gray',
    'Yellow',
    'Green'
  ];

  constructor(private carService: CarService) {
  }

  ngOnInit(): void {
    this.carService.getCars().subscribe((response) => {
      this.cars = response;
      console.log(response)
    }, (error) => {
      console.log("Сервер не доступен. Попробуйте позже. " + error)
    })
  }

  addCar(car: { name: string, color: string }) {
    this.carService.addCar(car.name, car.color).subscribe((response: any) => {
      this.cars = [...this.cars, car];
      console.log(response)
    });
  }

  deleteCar(car: any) {
    this.carService.deleteCar(car).subscribe((response: any) => {
      // @ts-ignore
      this.cars = this.cars.filter(c => c.id !== car.id);
    });
  }

  getRandomColor() {
    const num = Math.round(Math.random() * this.carColors.length - 1);
    return this.carColors[num];
  }

  setNewColor(car: any) {
    this.carService.changeColor(car, this.getRandomColor()).subscribe((response: any) => {
      console.log("Изменился цвет " + response)
    });
  }
}
