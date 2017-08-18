import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-warning-alert]',
  template: '<h3>Warning Alert</h3> <div><app-success-alert></app-success-alert></div>',
  styles: [`h3 {
  color: #ff0000;}`]
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
