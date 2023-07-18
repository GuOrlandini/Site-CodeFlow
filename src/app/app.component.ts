import { Component, OnInit } from '@angular/core';
import { BackgroundService } from '../background.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private backgroundService: BackgroundService) {}
  
  ngOnInit() {
    this.backgroundService.applyBackgroundStyles();
  }
}
