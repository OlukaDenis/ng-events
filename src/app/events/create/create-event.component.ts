import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'creat-event',
    template: `
        <h2>New Event</h2>
        <hr />
        <div>
            <h3>Form</h3>
            <button type="submit" class="btn btn-primary">Save</button>
            <button type="submit" class="btn btn-default" (click)="goBack()">Cancel</button>
        </div>
    `
})
export class CreateEventComponent {
    isDirty: boolean = true;

    constructor(private router: Router) { }

    goBack() {
        this.router.navigate(['/']);
    }
}