import { Component, Input, Output, EventEmitter } from "@angular/core";
// import {  } from "events";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail" *ngIf="event">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.name}}</div>
        <div>Time: {{event.time}}</div>
        <div>Price: R{{event.price}}</div>
        <div *ngIf="event?.location">
            <span class="pad-left">Location: {{event.location.city}}, {{event.location.country}}</span>
        </div>
    </div>
    `,
    styles: [`
    .pad-left {padding-left: 1rem}
    .well div {color: #bbb;}
    `
    ]
})

export class EventThumbnailComponent {
    @Input() event: any;
    

    logFoo() {
        alert('being trigged by a template variable')
    }
}