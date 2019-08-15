import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class ConfigOptionsService {
  public config = {
    id: 1,
    login: 'testLogin',
    email: 'test@mail.com'
  };

  constructor() { }

  getField(field: string): object {
    const isFieldValid = this.isFieldInConfig(field);

    if (isFieldValid) {
      return {field: this.config[field]};
    }
  }

  setField(newData: {}): object {
    return Object.assign(this.config, newData);
  }

  isFieldInConfig(field: string): boolean {
    return Object.keys(this.config).some(key => key === field);
  }
}
