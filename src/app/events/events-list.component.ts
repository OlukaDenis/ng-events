import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

@Component({
    // selector: 'event-list', // Removed because the Router redirects to the page directly
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <div class="row" >
                <div *ngFor="let event of events" class="col-md-4">
                    <event-thumbnail [event] = "event" (click)="handleEventClick(event)"></event-thumbnail>
                </div>
            </div>
        </div>
    `,
    styles: [`
       
    `]
})
export class EventListComponent implements OnInit {
    events: IEvent[] | undefined;

    constructor(
        private eventService: EventService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }

    handleEventClick(event: any) {
        // this.toastrService.info(event?.name)
    }
}