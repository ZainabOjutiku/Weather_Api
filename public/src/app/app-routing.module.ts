import { SanjoseComponent } from './sanjose/sanjose.component';
import { SeattleComponent } from './seattle/seattle.component';
import { DallasComponent } from './dallas/dallas.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { BurbankComponent } from './burbank/burbank.component';
import { WashingtonComponent } from './washington/washington.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{path: "sanjose", component:SanjoseComponent},
  {path: "seattle", component:SeattleComponent},
  {path: "dallas", component:DallasComponent},
  {path: "chicago", component:ChicagoComponent},
  {path: "burbank", component:BurbankComponent},
  {path: "washington", component:WashingtonComponent},
  { path: '', pathMatch: 'full', redirectTo: '/sanjose' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
