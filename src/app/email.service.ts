import { Injectable } from '@angular/core';

@Injectable({ //This decorator is made for "inner" injection (or double injection): See line 7
  providedIn: 'root'
})
export class EmailService {
  //constructor( log: LogService) { }
  constructor() { }
}
