import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface GuideStep {
  title: string;
  description: string;
  images: string[];
}

interface ServiceGuide {
  id: string;
  icon: string;
  title: string;
  description: string;
  steps: GuideStep[];
}

const accountSteps: GuideStep = {
  title: 'Get started with Delicio',
  description: 'Open Delicio and sign in, or create an account to get started.',
  images: [
    'assets/Delicio User Guide/non-logged-in-drawer.png',
    'assets/Delicio User Guide/signup.png',
    'assets/Delicio User Guide/login.png'
  ]
};

const reviewStep: GuideStep = {
  title: 'Submit your service for review',
  description: 'Submit your listing for review. Once it has been verified, it will be available to people using the app.',
  images: []
};

@Component({
  selector: 'app-delicio-user-guide',
  templateUrl: './delicio-user-guide.component.html',
})
export class DelicioUserGuideComponent implements OnInit, OnDestroy {
  isImageOpen = false;
  currentImage = '';
  currentImageAlt = '';
  private imageTrigger?: HTMLElement;

  private readonly defaultTitle = 'Mauli Tech | Thoughtful Apps & Digital Products';
  private readonly defaultDescription = 'Explore thoughtful apps and digital products from Mauli Tech, built to make everyday tasks simpler and information more accessible.';

  readonly serviceGuides: ServiceGuide[] = [
    {
      id: 'mess-services',
      icon: '⌂',
      title: 'Add a mess or tiffin service',
      description: 'Create a listing so people nearby can discover your mess or tiffin service.',
      steps: [
        accountSteps,
        {
          title: 'Open the service menu',
          description: 'From the navigation drawer, choose “Add Mess/Tiffin Service”.',
          images: ['assets/Delicio User Guide/logged-in-drawer.png']
        },
        {
          title: 'Add your service details',
          description: 'Enter the requested information, including your service name, location, and contact details.',
          images: ['assets/Delicio User Guide/add-mess-service-1.png']
        },
        {
          ...reviewStep,
          images: ['assets/Delicio User Guide/add-mess-service-2.png']
        },
        {
          title: 'Manage your listing',
          description: 'Open “My Mess Listings” from the drawer to view and manage your submitted services.',
          images: [
            'assets/Delicio User Guide/logged-in-drawer.png',
            'assets/Delicio User Guide/my-mess-listings.png'
          ]
        }
      ]
    },
    {
      id: 'cook-services',
      icon: '✳',
      title: 'Add a cook or chef service',
      description: 'Share your cooking services with people looking for a cook or chef nearby.',
      steps: [
        accountSteps,
        {
          title: 'Open the service menu',
          description: 'From the navigation drawer, choose “Add Cook/Chef”.',
          images: ['assets/Delicio User Guide/logged-in-drawer.png']
        },
        {
          title: 'Add your service details',
          description: 'Enter the requested information, including your service name, location, and contact details.',
          images: ['assets/Delicio User Guide/add-cook-service-1.png']
        },
        {
          ...reviewStep,
          images: ['assets/Delicio User Guide/add-cook-service-2.png']
        },
        {
          title: 'Manage your listing',
          description: 'Open “My Cook/Chef Listings” from the drawer to view and manage your submitted services.',
          images: [
            'assets/Delicio User Guide/logged-in-drawer.png',
            'assets/Delicio User Guide/my-cook-listings.png'
          ]
        }
      ]
    }
  ];

  constructor(private title: Title, private meta: Meta) { }

  ngOnInit(): void {
    this.setPageMetadata(
      'Delicio User Guide | Add a Service - Mauli Tech',
      'Step-by-step instructions for adding and managing a mess, tiffin, cook, or chef service in the Delicio app.'
    );
  }

  ngOnDestroy(): void {
    this.setPageMetadata(this.defaultTitle, this.defaultDescription);
  }

  openImage(image: string, alt: string, event: Event): void {
    this.currentImage = image;
    this.currentImageAlt = alt;
    if (event.currentTarget instanceof HTMLElement) {
      this.imageTrigger = event.currentTarget;
    }
    this.isImageOpen = true;
  }

  closeImage(): void {
    this.isImageOpen = false;
    this.currentImage = '';
    this.currentImageAlt = '';
    this.imageTrigger?.focus();
    this.imageTrigger = undefined;
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    window.history.replaceState(
      null,
      '',
      `${window.location.pathname}${window.location.search}#${sectionId}`
    );
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.isImageOpen) {
      this.closeImage();
    }
  }

  private setPageMetadata(title: string, description: string): void {
    this.title.setTitle(title);
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ property: 'og:title', content: title });
    this.meta.updateTag({ property: 'og:description', content: description });
  }
}
