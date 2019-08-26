import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cart-filter',
  templateUrl: './cart-filter.component.html',
  styleUrls: ['./cart-filter.component.css']
})
export class CartFilterComponent implements OnInit {
  @Output() filterByValue: EventEmitter<string> = new EventEmitter();
  @Output() filterOrderValue: EventEmitter<boolean> = new EventEmitter();

  filterOrder = true;
  filterValues = [
    {name: 'Name', value: 'name'},
    {name: 'Price', value: 'price'},
    {name: 'Quantity', value: 'quantity'},
  ];
  public defaultValue = 'price';

  constructor() { }

  ngOnInit() {
    this.onSelect({target: {value: this.defaultValue}});
  }

  onSelect({target}): void {
    this.filterByValue.emit(target.value);
  }

  onOrder(): void {
    this.filterOrder = !this.filterOrder;
    this.filterOrderValue.emit(this.filterOrder);
  }
}
