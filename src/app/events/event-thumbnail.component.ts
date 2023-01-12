import { Component, Input } from "@angular/core";
import { Event } from "./shared";

@Component({
    selector: 'event-thumbnail',
    template: `
         <div [routerLink]="['/events', event?.id]" class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngStyle]="getStartTimeStyle()" [ngSwitch]="event?.time">Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'"><i class="event-start">(Early Start)</i></span>
                <span *ngSwitchCase="'10:00 am'"><i class="event-start">(Late Start)</i></span>
                <span *ngSwitchDefault><i class="event-start">(Normal Start)</i></span>
            </div>
            <div>Price: \${{event?.price}}</div>
            <div *ngIf="event?.location">
                <span>Location: {{event?.location?.address}}</span>
                <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
            </div>
            <div *ngIf="event?.onlineUrl">Online URL: {{event?.onlineUrl}}</div>
        </div>
    `,
    styles: [`
        .thumbnail { min-height: 210px;}
        .pad-left { margin-left: 8px}
        .event-start { font-size: 12px }
        .success { color: #00cc66; }
        .pending { color: #ffcc00; }
        .normal { color: #1aa3ff;}
        .bold { font-weight: bold; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: Event | undefined

    getStartTimeClass() {
        if (this.event && this.event.time === '8:00 am') return 'success bold'
        else if (this.event && this.event.time === '10:00 am') return 'pending bold'
        return 'normal bold';
    }

    getStartTimeStyle() {
        if (this.event && this.event.time === '8:00 am')
            return { color: '#00cc66', 'font-weight': 'bold' };
        else if (this.event && this.event.time === '10:00 am')
            return { color: '#ffcc00', 'font-weight': 'bold' };
        return { color: '#1aa3ff', 'font-weight': 'bold' };
    }
} 