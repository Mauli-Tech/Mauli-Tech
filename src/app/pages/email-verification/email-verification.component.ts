import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  errorMessage: any 
  successMessage: any 
  appendMessage = "Redirecting to MAULI TECH."

  ngOnInit(): void {
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        const params = fragment.split('&');
        let parsedParams: any = {};
        params.forEach((param) => {
          const [key, value] = param.split('=');
          parsedParams[key] = decodeURIComponent(value);
        });
        this.errorMessage = parsedParams['error_description']
        this.errorMessage = this.errorMessage.replaceAll('+', ' ')
        if(!this.errorMessage){
          this.successMessage = "Email Verified Successfully. Please open the DELICIO app and login."
        }
      }
    });
    setTimeout(() => {
      this.router.navigateByUrl('/')
    }, 10000);  
  }

}