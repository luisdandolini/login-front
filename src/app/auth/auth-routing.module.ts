import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { BaseGuard } from '../core/guards/base.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'login', loadComponent: () => LoginComponent,    
      canActivate: [AuthGuard]},
      
      { path: 'register', loadComponent: () => RegisterComponent,canActivate: [BaseGuard] },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
