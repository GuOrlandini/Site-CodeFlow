import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) {}
  isHomeActive: boolean = false;
  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.isHomeActive = (event.urlAfterRedirects === '/');
        
      }
    });
  }
  
  isActive(url: string): boolean {
    return this.router.isActive(url, false);
  }
}

