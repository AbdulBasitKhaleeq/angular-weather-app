// Importing necessary Angular modules for the application
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; // Importing the application's routing module
import { AppComponent } from './app.component'; // Importing the main component
import { FormsModule } from '@angular/forms'; // Importing FormsModule for two-way data binding in the application

// Decorator to define the NgModule metadata for the application module
@NgModule({
  declarations: [
    AppComponent // Declaring the main component of the application
  ],
  imports: [
    BrowserModule, // Importing the BrowserModule for web applications
    AppRoutingModule, // Importing the application's routing module
    HttpClientModule, // Importing the HttpClientModule for making HTTP requests
    FormsModule // Importing FormsModule for two-way data binding
  ],
  providers: [], // No additional services provided at the module level
  bootstrap: [AppComponent] // The main component to be bootstrapped when the application starts
})
export class AppModule { } // The main NgModule class for the application
