import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject('mailagain') private mailagain,
    private mail: MailService,
    @Inject('pokeapi') private pokeapi
  ) {}
}
