import { Component } from '@angular/core';
import { contactsData } from 'src/app/repository/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contacts = contactsData;
}
