import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import 'rxjs/add/observable/of';
import { CalculationComponent } from './calcul.component';
import {CalculationService} from "./calculation.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

describe('CalculationComponent', () => {
  let calculComponent;
  let fixture ;
  let calculationService;
  let spy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,ReactiveFormsModule,HttpClientModule],
      declarations: [ CalculationComponent ],
      providers: [calculationService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculationComponent);
    calculationService = fixture.debugElement.injector.get(CalculationService);
    spy = spyOn(calculationService, 'getNumberOfPunctuations').and.returnValue(Observable.of([]));
    fixture.detectChanges();
  });

  it('should call service with the right param', fakeAsync(() => {
    calculComponent = fixture.debugElement.componentInstance;
    calculComponent.onCalculate(true, 'Lorem!.');
    tick();
    expect(spy).toHaveBeenCalledWith('Lorem!.');

  }));
});
