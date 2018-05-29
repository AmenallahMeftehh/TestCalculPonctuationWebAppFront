import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CalculationService} from "./calculation.service";

@Component({
  selector: 'app-calcul',
  templateUrl: './calcul.component.html',
  styleUrls: ['./calcul.component.css']
})
export class CalculationComponent implements OnInit {

  text: string;
  punctuationsOccurrence: any;
  public formText: FormGroup;
  constructor(private calculationService: CalculationService, private _fb: FormBuilder) { }

  ngOnInit() {
    this.formText = this._fb.group({
      text: ['', [<any>Validators.required]]
    });
  }

  /**
   Function to calculate the number of punctuations in a text
   */
  onCalculate(isValid: boolean, text: string) {
    if (isValid) {
      // call service
      this.calculationService.getNumberOfPunctuations(text).subscribe(
        data => {
          this.punctuationsOccurrence = data;
        },
        error => {
          alert('An Error occurred while calculating punctuations occurrence');
        }
      );
    }
  }
}
