import { Component, Input } from '@angular/core';

import { Address } from './model';

@Component({
  moduleId: module.id,
  selector: 'my-address', // to use me, put <my-app> in index.html
  templateUrl: './address.component.html'
})

export class AddressComponent {
  regions = ['East', 'Midwest', 'North', 'South', 'West'];
  states = ['California', 'Jalisco', 'Quebec', 'Illinois'];
  @Input() address = Address;
}
