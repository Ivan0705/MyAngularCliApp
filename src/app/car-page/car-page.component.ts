import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.component.html',
  styleUrls: ['./car-page.component.css']
})
export class CarPageComponent implements OnInit {
  id: number = 0;
  name: string = '';
  color: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.name = this.activatedRoute.snapshot.queryParams['name'];
    this.color = this.activatedRoute.snapshot.queryParams['color'];
  }

}
