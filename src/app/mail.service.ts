import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {
  messages = [
    { id: 0, text: `you've got mail!` },
    { id: 1, text: `You should check your mail` },
    { id: 2, text: `How about looking at that inbox?` }
  ];

  constructor() {}

  update(id, text) {
    this.messages = this.messages.map(m => {
      return m.id === id ? { id, text } : m;
    });
  }
}
