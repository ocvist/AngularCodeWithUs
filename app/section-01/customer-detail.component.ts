import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Customer } from './model';

@Component({
  moduleId: module.id,
  selector: 'customer-detail', // to use me, put <my-app> in index.html
  templateUrl: './customer-detail.component.html'
})

export class CustomerDetailComponent {
  showAddress: true;
  @Input() customer = Customer;
  @Output() shift = new EventEmitter<number>();

  left() {
    this.shift.emit(-1);
  }

  right() {
    this.shift.emit(1);
  }
}
