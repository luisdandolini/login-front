import { NgModule } from '@angular/core';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterService } from './services/register.service';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    AuthRoutingModule,
  ],
  providers: [RegisterService],
  exports:[]
})
export class AuthModule {}
