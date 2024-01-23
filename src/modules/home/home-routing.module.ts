import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeInitialComponent } from './pages/home-initial.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{ path: '', component: HomeInitialComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
