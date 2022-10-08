import {Component} from '@angular/core';
import {CarService} from "./service/Car.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[CarService]
})
export class AppComponent {
  [x: string]: any;
}
