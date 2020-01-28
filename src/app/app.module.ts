import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { MatCalendar } from '@angular/material';



@NgModule({

  exports: [
   MaterialModule,
   MatCalendar,
  ],


  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
  
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
