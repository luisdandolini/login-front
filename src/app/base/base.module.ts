import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';
import { AuthModule } from '../auth/auth.module';

@NgModule({
  declarations: [
    BaseComponent,
  ],
  imports: [CommonModule, BaseRoutingModule, AuthModule],
  exports: [RouterModule],
})
export class BaseModule {}
