import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  constructor(private router: Router) {}

  applyBackgroundStyles() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.router.url;
        this.setBodyBackground(currentRoute);
      }
    });
  }

  private setBodyBackground(currentRoute: string) {
    const body = document.querySelector('body');
    if (body) {
      if (currentRoute === '/' || currentRoute === '/services' || currentRoute === '/blog') {
        body.classList.add('black-background');
        body.classList.remove('white-background');
      } else {
        body.classList.remove('black-background');
        body.classList.add('white-background');
      }
    }
  }
}
