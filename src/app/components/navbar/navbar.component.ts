import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  activeButton: string = 'home';

  setActiveButton(button: string): void {
    this.activeButton = button;
  }
}
