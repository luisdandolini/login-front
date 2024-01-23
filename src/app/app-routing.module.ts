import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseGuard } from './core/guards/base.guard';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    loadChildren: () => import('./base/base.module').then(m => m.BaseModule),
    canActivate: [BaseGuard]

  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
