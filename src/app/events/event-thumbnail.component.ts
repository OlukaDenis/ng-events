import { Component, Input } from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
         <div class="well hoverwell thumbnail">
            <h2>{{event?.name}}</h2>
            <div>Date: {{event?.date}}</div>
            <div [ngSwitch]="event?.time">Time: {{event?.time}}
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
    `]
})
export class EventThumbnailComponent {
    @Input() event: any
} 