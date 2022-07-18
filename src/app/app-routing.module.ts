import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'onbording',
    loadChildren: () => import('./modules/onbording/onbording.module').then(m => m.OnbordingModule) 
  },
  { 
    path: "**", 
    redirectTo: "onbording/login" 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
