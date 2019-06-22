import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  messages = [
    `you've got mail!`,
    `You should check your mail`,
    `How about looking at that inbox?`
  ];

  constructor() {}
}
