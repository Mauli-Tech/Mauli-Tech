import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-delicio-forgot-password',
  templateUrl: './delicio-forgot-password.component.html',
  styleUrls: ['./delicio-forgot-password.component.scss'],
})
export class DelicioForgotPasswordComponent implements OnInit {
  constructor(private route: ActivatedRoute, private supabaseService: SupabaseService) {}

  accessToken: any
  refreshToken: any
  tokenType: any
  errorMessage: any = ""
  successMessage: any = ""

  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const params = fragment.split('&');
        let parsedParams: any = {};
        params.forEach((param) => {
          const [key, value] = param.split('=');
          parsedParams[key] = decodeURIComponent(value);
        });
        const error = parsedParams['error'];
        const errorCode = parsedParams['error_code'];
        const errorDescription = parsedParams['error_description'];
        this.accessToken = parsedParams['access_token']
        this.tokenType = parsedParams['token_type']
        this.refreshToken = parsedParams['refresh_token']
        console.log(this.accessToken)
      }
    });
  }

  password = new FormControl('', [Validators.required]);
  confirmPassword = new FormControl('', [Validators.required]);

  passwordCheck(){
    if(this.password.value!==this.confirmPassword.value){
      this.errorMessage = "Password must be same."
    }else{
      this.errorMessage = ""
    }
  }

  async submitPassword() {
    if(this.password.value===this.confirmPassword.value){
      this.errorMessage = ""
      const data: any = await this.supabaseService.resetPassword(this.accessToken, this.tokenType, this.password.value)
      if(data?.error){
        this.errorMessage = data?.error
      }else{
        this.successMessage = "Password updated successfully. Please go back to login."
        this.password.setValue('')
        this.confirmPassword.setValue('')
      }
    }
    else{
      this.errorMessage = "Password must be same."
    }
  }
}
