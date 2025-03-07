import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";
  logoUrl: string = "https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";
  
  openBridgeLabz(): void {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
