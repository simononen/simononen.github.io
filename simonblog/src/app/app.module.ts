import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { ContactComponent } from './contact/contact.component';
import { AlertDangerComponent } from './shared/alerts/alert-danger/alert-danger.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AlertDangerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
