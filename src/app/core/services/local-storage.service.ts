import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(property: any, value: any): void {
    localStorage.setItem(JSON.stringify(property), JSON.stringify(value));
    console.log(property, ' was set');
  }

  getItem(property: string): any {
    return JSON.parse(localStorage.getItem(JSON.stringify(property)));
  }

  removeItem(property): void {
    localStorage.removeItem(property);
    console.log(property, ' was removed');
  }
}
