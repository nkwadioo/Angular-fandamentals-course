import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class EventsAppComponent {
  title = 'Angular-fundamentals-course';
}
