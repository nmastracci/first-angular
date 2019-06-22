import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <p>Simple Form</p>
      <input #myInput type="text" />
      <button (click)="onClick($event, myInput.value)">PRESS ME</button>
      <div>
        {{ message }}
      </div>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  constructor() {}

  @Input() message;

  ngOnInit() {}

  onClick(event, value) {
    console.log('HELL YA', value);
    console.log('EVENT', event);
  }
}
