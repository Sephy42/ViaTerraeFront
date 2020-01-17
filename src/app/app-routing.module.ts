import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { PublicComponent } from './public/public.component';


const routes: Routes = [
  {
    path: `home`,
    component:PublicComponent,
    canActivate:[
      AuthGuard
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: `home`,
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: `home`,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
