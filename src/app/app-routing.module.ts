import { RouterModule, Routes } from '@angular/router';

import { FlatbondsComponent } from './flatbonds/flatbonds.component';
import { NgModule } from '@angular/core';
import { PerformanceComponent } from './performance/performance.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: FlatbondsComponent },
  { path: 'performance', component: PerformanceComponent },
  { path: 'settings', component: SettingsComponent },
  // { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
