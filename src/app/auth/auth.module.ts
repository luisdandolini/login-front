import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthFooterComponent } from './components/auth-footer/auth-footer.component';
import { AuthHeaderComponent } from './components/auth-header/auth-header.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
    AuthFooterComponent,
    LoginComponent,
    LoginFormComponent,
    AuthHeaderComponent,
  ],

  providers: [],
})
export class AuthModule {}
