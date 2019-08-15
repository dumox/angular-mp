import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule,
})
export class ConstantService {
  data = { App: 'TaskManager', Ver: '1.0' };

  constructor() {}

  getData(): {} {
    return this.data;
  }
}
