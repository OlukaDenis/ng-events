import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./app/events/details/event-details.component";
import { EventListComponent } from "./app/events/events-list.component";
import { CreateEventComponent } from "./app/events/create/create-event.component";
import { Error404Component } from "./app/errors/404.components";
import { EventRouteActivator } from "./app/events/details/event-route-activator.service";

export const appRoutes: Routes = [
    { path: 'events', component: EventListComponent },
    { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
]