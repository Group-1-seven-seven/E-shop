import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  numberOnly(event: any, compare = 2): any {
    
    window.event
   
    event=(event)?event: window.event;
    const charCode=(event.which)?event.which: event.keyCode;

    const value = event.type === 'paste' ? event.clipboardData.getData('text/plain') : event.target.value;
    if ((charCode > 31 && (charCode < 48 || charCode > 57)) || charCode === 46 || charCode === 101 || value.length >= compare) {
      event.preventDefault();
    } else {
      return true;
    }
  }
}