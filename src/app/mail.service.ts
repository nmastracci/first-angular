import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  message = [`you've got mail!`];

  constructor() {}
}
