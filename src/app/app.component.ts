import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  template: `
    <div>
      <ul>
        <li *ngFor="let message of mail.messages; let i = index">
          {{ i }}{{ message }}
        </li>
      </ul>
      <ul>
        <app-simple-form
          *ngFor="let message of mailagain.somethings"
          [message]="message"
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
}
