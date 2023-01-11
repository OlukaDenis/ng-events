import { Routes } from "@angular/router";
import { EventDetailsComponent } from "./events/details/event-details.component";
import { EventListComponent } from "./events/events-list.component";
import { CreateEventComponent } from "./events/create/create-event.component";
import { Error404Component } from "./errors/404.components";
import { EventRouteActivator } from "./events/details/event-route-activator.service";
import { EventResolverService } from "./events/shared/event-list-resolver.service";

export const appRoutes: Routes = [
    {
        path: 'events',
        component: EventListComponent,
        resolve: { events: EventResolverService }
    },
    {
        path: 'events/new',
        component: CreateEventComponent,
        canDeactivate: ['canDeactivateCreateEvent']
    },
    { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: () => import('./users/user.module').then(m => m.UserModule) }
]