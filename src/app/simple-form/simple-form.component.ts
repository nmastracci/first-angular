import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <p>Simple Form</p>
    <input #myInput type="text" [(ngModel)]="speak" />
    <button (click)="update.emit({ text: speak })">PRESS ME</button>
    <div>
      <p>answer:</p>
      {{ speak }}
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        //display:flex;
      }
      * {
        font-family: helvetica;
      }
      input:focus {
        font-weight: bold;
        border: 1px solid blue;
        border-radius: 4px;
      }
    `
  ]
})

// Learning Notes:
// In angular, parens represent events and square brackets represent machine values
// therefore the combination of both is like two-way binding

// STYLES
// host is referring to the app-simple-form component which does not require a conatining div
// *{} selects everything inside the component!
export class SimpleFormComponent implements OnInit {
  constructor() {}

  @Input() speak;

  @Output() update = new EventEmitter();

  ngOnInit() {}

  onClick(event, value) {
    console.log('HELL YA', value);
    console.log('EVENT', event);
  }
}
