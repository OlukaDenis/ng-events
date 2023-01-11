import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.components";

import {
    EventListComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventResolverService,
    EventDetailsComponent
} from './events'

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