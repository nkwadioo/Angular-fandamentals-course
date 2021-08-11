import { EventService } from './../shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  event: any;
  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.event = this.eventService.getEvent(1);

  }

}
