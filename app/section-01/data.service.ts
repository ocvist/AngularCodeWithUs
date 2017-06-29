import { Injectable } from '@angular/core';

import { createTestCustomers } from './test-data';
import { LoggerService } from './logger.service';

@Injectable()
export class DataService {
    constructor(private loggerService: LoggerService) { }

    getCustomers() {
        let customers = createTestCustomers();

        this.loggerService.log('Retrieved ' + customers.length + ' customers.');

        return customers;
    }
}
