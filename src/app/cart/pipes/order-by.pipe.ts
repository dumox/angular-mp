import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy',
  pure: false
})
export class OrderByPipe implements PipeTransform {

  transform(cartItems: [], filterBy: string, order: boolean = true): [] {
    if (!cartItems) {
      return null;
    }

    const [first, last] = order ? [1, -1] : [-1, 1];
    return cartItems.sort((previtem, item) => {
      return (previtem[filterBy] > item[filterBy]) ? first : last;
    });
  }
}
