import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    LoginComponent,
    LoginFormComponent,
    RegisterComponent,
    RegisterComponent,
    RegisterFormComponent
  ],

  providers: [],
})
export class AuthModule {}
