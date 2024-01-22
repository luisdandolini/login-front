import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { modulesRoutes } from 'src/modules/routes';
import { BaseComponent } from './base.component';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: modulesRoutes,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class BaseRoutingModule {}
