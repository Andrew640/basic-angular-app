import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlatbondsComponent } from './flatbonds/flatbonds.component';
import { NgModule } from '@angular/core';
import { PerformanceComponent } from './performance/performance.component';
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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
