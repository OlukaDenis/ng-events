import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'event-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <div class="row" >
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail [event] = "event" (click)="handleEventClick(event)"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
    styles: [`
       
    `]
})
export class EventListComponent implements OnInit {
    events: any[] = [];

    constructor(
        private eventService: EventService,
        private toastrService: ToastrService
    ) { }

    ngOnInit() {
        this.events = this.eventService.getEvents();
    }

    handleEventClick(event: any) {
        this.toastrService.info(event?.name)
    }
}