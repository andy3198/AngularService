import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FemaleComponent } from './app.female';
import { MaleComponent} from './app.male';

const routes: Routes = [
  {
    path: 'female', component: FemaleComponent
  },
  {
    path: 'male', component: MaleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [FemaleComponent, MaleComponent]
