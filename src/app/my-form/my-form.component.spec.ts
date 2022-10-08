import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MyFormComponent} from './my-form.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClientModule} from "@angular/common/http";
import {CarService} from "../service/Car.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

describe('MyFormComponent', () => {
  let component: MyFormComponent;
  let fixture: ComponentFixture<MyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFormComponent],
      imports: [
        RouterTestingModule,
        HttpClientModule,
        BrowserAnimationsModule
      ],
      providers: [CarService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


});
