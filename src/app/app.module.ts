import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng7MaterialModule } from './ng7-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng7MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
