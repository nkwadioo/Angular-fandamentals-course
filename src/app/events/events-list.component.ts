import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from './shared/event.service';



@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailLick(event.name)" [event]='event'></event-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventsListComponent implements OnInit {
    events: any[];
    constructor(private eventService: EventService, private toastr: ToastrService) {
    }
    
    ngOnInit(){
        this.events = this.eventService.getEvents();
    }

    handleThumbnailLick(eventName) {
        this.toastr.success(eventName)
    }
}