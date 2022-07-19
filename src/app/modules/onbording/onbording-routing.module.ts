import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OnbordingComponent } from './onbording.component';

const routes: Routes = [
  { 
    path: '', 
    component: OnbordingComponent 
  }, 
  {
    path: 'login', 
    component: LoginComponent 
  },
  {
    path: 'dashboard', 
    component: DashboardComponent 
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnbordingRoutingModule { }
