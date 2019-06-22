import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        <li *ngFor="let message of mailagain.somethings; let i = index">
          {{ i }}{{ message }}
        </li>
      </ul>
    </div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject('mailagain') private mailagain,
    private mail: MailService,
    @Inject('pokeapi') private pokeapi
  ) {}
}
