import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailagainService {
  somethings = [`there's so much mail!`, `You should check your mail`];

  constructor() {}
}
