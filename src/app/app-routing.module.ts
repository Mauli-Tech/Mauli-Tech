import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DelicioForgotPasswordComponent } from './pages/delicio-forgot-password/delicio-forgot-password.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'delicio-forgot-password', component: DelicioForgotPasswordComponent },
  { path: 'email-verification', component: EmailVerificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
