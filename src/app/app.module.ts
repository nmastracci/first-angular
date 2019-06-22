import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MailService } from './mail.service';
import { MailagainService } from './mailagain.service';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [AppComponent, SimpleFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    { provide: 'mailagain', useClass: MailagainService },
    { provide: 'mail', useClass: MailService },
    { provide: 'pokeapi', useValue: 'https://pokeapi.co/api/v2/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
