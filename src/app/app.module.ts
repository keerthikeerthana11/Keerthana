import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeletedproComponent } from './seletedpro/seletedpro.component';
import { ValueFromServiceComponent } from './value-from-service/value-from-service.component';

@NgModule({
  declarations: [
    AppComponent,
    SeletedproComponent,
    ValueFromServiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
