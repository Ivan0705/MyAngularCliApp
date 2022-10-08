import {Component, EventEmitter, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {animate, state, style, transition, trigger} from "@angular/animations";

interface CarColors {
  color: string
}

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css'],
  encapsulation: ViewEncapsulation.None, animations: [
    trigger('clickedDiv', [
      state('start', style({
        width: '150px',
        height: '50px'
      })),
      state('end', style({
        width: '250px',
        height: '90px',
        fontSize: '33px'
      })),
      transition('start<=>end', animate(1500)),
    ])
  ],
})
export class MyFormComponent implements OnInit {

  ngOnInit(): void {
  }

  clickedDivState: string = 'start';
  colors: Array<CarColors> = [{color: 'Red'}, {color: 'Black'}, {color: 'White'}, {color: 'Green'}];
  myForm: FormGroup;
  defaultColor: string = "Black";

  carName = "";
  carColor = "";
  @Output("onAddCar") carEmitter = new EventEmitter<{ name: string, color: string }>();

  constructor() {
    this.myForm = new FormGroup({
      "carName": new FormControl("", [Validators.minLength(2), Validators.required]),
      "carColor": new FormControl("", [Validators.minLength(0), Validators.required])
    });
  }

  addCar() {
    this.clickedDivState = 'end';
    setTimeout(() => {
      this.clickedDivState = 'start'
    }, 3000);
    const car = {
      name: this.carName,
      color: this.carColor
    };
    console.log(this.myForm);
    this.carEmitter.emit(car);
    this.myForm.reset(car);


  }
}
