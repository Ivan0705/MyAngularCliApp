import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsComponent } from './cars.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CarService} from "../service/Car.service";

describe('CarsComponent', () => {
  let component: CarsComponent;
  let fixture: ComponentFixture<CarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsComponent ],
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [CarService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
