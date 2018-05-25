import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {environment} from "../../environments/environment";

@Injectable()
export class CalculationService {

  // get back end base url
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  /**
   * Call back api to calculate punctuations occurrence
   * @param {string} text
   * @returns {Observable<any>}
   */
  getNumberOfPunctuations(text: string): Observable<any> {
    const body = text;
    // use post request to send text in body (in case of text is very long or contains special characters ...)
    return this.http.post(this.apiUrl + '/api/getNumberOfPunctuation'  , body);
  }

}
