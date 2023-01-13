import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { EventService } from "../shared";

@Component({
    selector: 'create-event',
    templateUrl: './create-event.component.html',
    styles: [`
        em { float: right; color: #e05c65; padding-left: 10px; font-size: 10px;}
        .error input {background-color: #e3c3c5; }
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
    `]
})
export class CreateEventComponent {
    isDirty: boolean = true;
    newEvent: any

    constructor(private router: Router, private eventService: EventService) { }

    saveEvent(formValues: any) {
        console.log(formValues)
        if (formValues) this.isDirty = false;
        this.eventService.saveEvent(formValues)
        this.goBack()
    }

    goBack() {
        this.router.navigate(['/events']);
    }
}