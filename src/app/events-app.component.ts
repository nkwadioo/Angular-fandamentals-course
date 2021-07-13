import { Component } from '@angular/core';

@Component({
  selector: 'events-app',
  template: `
  <nav-bar></nav-bar>
  <events-list></events-list>
  `,
  styleUrls: ['./app.component.scss']
})
export class EventsAppComponent {
  title = 'Angular-fundamentals-course';
}
