import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BaseRoutingModule } from './base-routing.module';
import { BaseComponent } from './base.component';

@NgModule({
  declarations: [
    BaseComponent,
  ],
  imports: [CommonModule, BaseRoutingModule],
  exports: [RouterModule],
})
export class BaseModule {}
