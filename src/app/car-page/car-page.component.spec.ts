import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CarPageComponent} from './car-page.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CarService} from "../service/Car.service";

describe('CarPageComponent', () => {
  let component: CarPageComponent;
  let fixture: ComponentFixture<CarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarPageComponent], imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      providers: [CarService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
