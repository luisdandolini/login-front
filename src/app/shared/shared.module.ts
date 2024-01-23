import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

const imports = [RouterModule, FormsModule, ReactiveFormsModule, CommonModule];

const providers = [DatePipe];

@NgModule({
  declarations: [],
  imports: [
    ...imports,
  ],
  providers: [
    ...providers,
  ],
  exports: [
    ...imports, 
    ...providers,
  ],
})
export class SharedModule {}
