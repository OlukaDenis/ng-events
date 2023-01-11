import { Resolve } from "@angular/router";
import { Injectable } from "@angular/core";
import { EventService } from "./event.service";
import { map } from "rxjs";

@Injectable()
export class EventResolverService implements Resolve<any> {
    constructor(private eventService: EventService) { }

    resolve() {
        return this.eventService.getEvents().pipe(map(events => events))
    }
}