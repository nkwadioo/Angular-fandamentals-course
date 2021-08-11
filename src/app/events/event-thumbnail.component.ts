import { Component, Input, Output, EventEmitter } from "@angular/core";
// import {  } from "events";

@Component({
    selector: 'event-thumbnail',
    template: `
    <div class="well hoverwell thumbnail" *ngIf="event">
        <h2>{{event.name}}</h2>
        <div>Date: {{event.date}}</div>
        <div [ngClass]="getStartTimeClass()" [ngSwitch]="event.time">
            Time: {{event.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: R{{event.price}}</div>
        <div *ngIf="event?.location">
            <span class="pad-left">Location: {{event.location.city}}, {{event.location.country}}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            <span class="pad-left">Online URL: {{event.onlineUrl}}</span>
        </div>
    </div>
    `,
    styles: [`
    .pad-left {padding-left: 1rem}
    .bold { font-weight: bold;}
    .well div {color: #bbb;}
    .green { color: #003300 !important;}
    `
    ]
})

export class EventThumbnailComponent {
    @Input() event: any;
    

    logFoo() {
        alert('being trigged by a template variable')
    }

    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';
        return {green: isEarlyStart, bold: isEarlyStart};
    }
}