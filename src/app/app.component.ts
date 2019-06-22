import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div>
      <ul>
        <li *ngFor="let message of mail.messages">
          {{ message.text }}
        </li>
      </ul>
      <ul>
        <app-simple-form
          *ngFor="let message of mail.messages"
          [speak]="message.text"
          (update)="onUpdate(message.id, $event.text)"
        ></app-simple-form>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject('mailagain') public mailagain,
    @Inject('mail') public mail,
    @Inject('pokeapi') private pokeapi
  ) {}

  onUpdate(id, text) {
    console.log(text);
    this.mail.update(id, text);
  }
}
