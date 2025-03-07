import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // ✅ Import CommonModule for *ngIf

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule], // ✅ Add CommonModule here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  message: string = "Hello";
  logoUrl: string = "https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg";
  userName: string = ""; // Stores user input
  errorMessage: string = ""; // Stores validation error message

  openBridgeLabz(): void {
    window.open("https://www.bridgelabz.com", "_blank");
  }

  validateUserName(): void {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/; // Regex: Starts with uppercase, min 3 letters
    if (!namePattern.test(this.userName)) {
      this.errorMessage = "Invalid name! Start with uppercase and use min 3 letters.";
    } else {
      this.errorMessage = ""; // Clear error if input is valid
    }
  }
}
