import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <p>Simple Form</p>
      <input #myInput type="text" [(ngModel)]="message" />
      <button (click)="onClick($event, myInput.value)">PRESS ME</button>
      <div>
        <p>answer:</p>
        {{ speak }}
        <p>answer:</p>
        {{ message }}
      </div>
    </div>
  `,
  styles: []
})

// Learning Notes:
// In angular, parens represent events and square brackets represent machine values
// therefore the combination of both is like two-way binding
export class SimpleFormComponent implements OnInit {
  constructor() {}

  @Input() message;
  @Input() speak;
  @Input() typedout;

  ngOnInit() {}

  onClick(event, value) {
    console.log('HELL YA', value);
    console.log('EVENT', event);
  }
}
