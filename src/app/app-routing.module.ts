import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DelicioForgotPasswordComponent } from './pages/delicio-forgot-password/delicio-forgot-password.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'delicio-forgot-password', component: DelicioForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
