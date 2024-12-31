import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delicio-user-guide',
  templateUrl: './delicio-user-guide.component.html',
  styleUrls: ['./delicio-user-guide.component.scss']
})
export class DelicioUserGuideComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  isImageOpen: boolean = false;
  currentImage: string = '';

  messServicesteps = [
    {
      title: 'Open the Delicio App',
      description: 'Launch the Delicio app from your device and create a new account. If an existing user, then log in with your credentials.',
      images: [
        'assets/Delicio User Guide/non-logged-in-drawer.png',
        'assets/Delicio User Guide/signup.png',
        'assets/Delicio User Guide/login.png'
      ]
    },
    {
      title: 'Navigate to Add Mess/Tiffin Service',
      description: 'Click on the "Add Mess/Tiffin Service" option available in the drawer menu to proceed with adding your service.',
      images: [
        'assets/Delicio User Guide/logged-in-drawer.png',
      ]
    },
    {
      title: 'Enter Service Details',
      description: 'Fill in the required details such as the name, location, and contact information for your mess service.',
      images: [
        'assets/Delicio User Guide/add-mess-service-1.png',
      ]
    },
    {
      title: 'Submit Your Service',
      description: 'Click on the "Submit" button. The listing will be sent to admin for further review and verification. After successfull verification, it will be visible on the app.',
      images: [
        'assets/Delicio User Guide/add-mess-service-2.png'
      ]
    },
    {
      title: 'Manage Your Mess Services',
      description: 'You can manage all your lisitngs in one place. Click on "My Mess Listings". You will be redirected to the Mess Listings page',
      images: [
        'assets/Delicio User Guide/logged-in-drawer.png',
        'assets/Delicio User Guide/my-mess-listings.png'
      ]
    }
  ];

  cookServicesteps = [
    {
      title: 'Open the Delicio App',
      description: 'Launch the Delicio app from your device and create a new account. If an existing user, then log in with your credentials.',
      images: [
        'assets/Delicio User Guide/non-logged-in-drawer.png',
        'assets/Delicio User Guide/signup.png',
        'assets/Delicio User Guide/login.png'
      ]
    },
    {
      title: 'Navigate to Add Cook/Chef Service',
      description: 'Click on the "Add Cook/Chef" option available in the drawer menu to proceed with adding your service.',
      images: [
        'assets/Delicio User Guide/logged-in-drawer.png',
      ]
    },
    {
      title: 'Enter Service Details',
      description: 'Fill in the required details such as the name, location, and contact information for your cook/chef.',
      images: [
        'assets/Delicio User Guide/add-cook-service-1.png',
      ]
    },
    {
      title: 'Submit Your Service',
      description: 'Click on the "Submit" button. The listing will be sent to admin for further review and verification. After successfull verification, it will be visible on the app.',
      images: [
        'assets/Delicio User Guide/add-cook-service-2.png'
      ]
    },
    {
      title: 'Manage Your Cook/Chef Services',
      description: 'You can manage all your listngs in one place. Click on "My Cook/Chef Listings". You will be redirected to the Mess Listings page',
      images: [
        'assets/Delicio User Guide/logged-in-drawer.png',
        'assets/Delicio User Guide/my-cook-listings.png'
      ]
    }
  ];

  openImage(image: string): void {
    this.currentImage = image;
    this.isImageOpen = true;
  }

  closeImage(): void {
    this.isImageOpen = false;
    this.currentImage = '';
  }

  redirectToHome(){
    this.router.navigate(['/'])
  }

}
