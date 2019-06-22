import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <p>Simple Form</p>
      <input #myInput type="text" />
      <button (click)="onClick($event, myInput.value)">PRESS ME</button>
    </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onClick(event, value) {
    console.log('HELL YA', value);
    console.log('EVENT', event);
  }
}
