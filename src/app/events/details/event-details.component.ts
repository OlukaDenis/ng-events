import { Component, OnInit } from "@angular/core";
import { EventService } from "../shared/event.service";
import { ToastrService } from "src/app/common/toastr.service";
import { ActivatedRoute } from "@angular/router";
import { Event } from "../shared";

@Component({
    selector: 'event-details',
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px;}
        .event-image { height: 100px;}
    `]
})
export class EventDetailsComponent implements OnInit {
    event: Event | undefined;

    constructor(
        private eventService: EventService,
        private toastrService: ToastrService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        const id: number = this.route.snapshot.params['id']
        this.event = this.eventService.getEvent(id);
    }

    handleEventClick(event: any) {
        this.toastrService.info(event?.name);
    }
}