import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import FlatbondService from './services/flatbond.service';
import { FlatbondsComponent } from './flatbonds/flatbonds.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PerformanceComponent } from './performance/performance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    FlatbondsComponent,
    SettingsComponent,
    PerformanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    FlatbondService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
