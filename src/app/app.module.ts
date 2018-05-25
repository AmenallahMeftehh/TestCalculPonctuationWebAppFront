import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { CalculationComponent } from './calcul/calcul.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CalculationService} from "./calcul/calculation.service";


@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CalculationComponent
  ],
  providers: [CalculationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
