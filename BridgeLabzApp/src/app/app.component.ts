import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-root',
  standalone: true, // Mark as standalone component
  imports: [FormsModule], // Import FormsModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = "Hello from BridgeLabz";
  logoUrl: string = "https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";
  userName: string = ""; // Property for two-way binding

  openBridgeLabz(): void {
    window.open("https://www.bridgelabz.com", "_blank");
  }
}
