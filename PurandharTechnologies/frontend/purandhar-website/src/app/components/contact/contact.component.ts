import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  onSubmit() {
    alert('Your message has been sent! (Backend integration coming soon 🚀)');
  }
}
