import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./app/events/details/event-details.component";
import { EventListComponent } from "./app/events/events-list.component";
import { CreateEventComponent } from "./app/events/create/create-event.component";

export const appRoutes: Routes = [
    { path: 'events', component: EventListComponent },
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]