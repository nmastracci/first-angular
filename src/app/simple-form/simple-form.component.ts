import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <div>
      <p>Simple Form</p>
      <input #myInput type="text" [(ngModel)]="speak" />
      <button (click)="update.emit({ text: speak })">PRESS ME</button>
      <div>
        <p>answer:</p>
        {{ speak }}
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

  @Input() speak;

  @Output() update = new EventEmitter();

  ngOnInit() {}

  onClick(event, value) {
    console.log('HELL YA', value);
    console.log('EVENT', event);
  }
}
