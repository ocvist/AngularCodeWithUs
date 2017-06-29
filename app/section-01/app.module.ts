import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomerListComponent } from './customer-list.component';
import { CustomerDetailComponent } from './customer-detail.component';
import { AddressComponent } from './address.component';
import { DataService } from './data.service';
import { LoggerService } from './logger.service';

// This decorator describes the class that follows it
@NgModule({
  imports: [BrowserModule, FormsModule], // What stuff do I need?
  declarations: [
    AppComponent,
    CustomerListComponent,
    CustomerDetailComponent,
    AddressComponent
  ],  // What's in my app module?
  providers: [
    DataService,
    LoggerService
  ],
  bootstrap: [AppComponent]   // Where do I start?
})
export class AppModule { }
