import { Injectable } from '@angular/core';
import { CoreModule } from '../core.module';

@Injectable({
  providedIn: CoreModule
})
export class GeneratorService {
  length = 5;

  constructor() {
      this.getRandomString();
  }

  private utf8Numbers = [[48, 57], [65, 90], [97, 122]];

    getRandomNumber(limit): number {
        return Math.floor(Math.random() * limit);
    }

    getLimit(arr): number {
        return arr[1] - arr[0];
    }

    generateRandomString() {
        const arrayIndex = this.getRandomNumber(this.utf8Numbers.length);
        const range = this.utf8Numbers[arrayIndex];
        const limit = this.getLimit(range);
        return String.fromCharCode(range[0] + this.getRandomNumber(limit));
    }

    getRandomString(length = this.length): string {
        if (length < 0) {
            console.log('Provide positive number');
            return;
        }
        let index = 0;
        let result = '';

        while (index < length) {
            result += this.generateRandomString();
            index++;
        }
        return result;
    }
}
