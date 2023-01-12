import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import {
  EventListComponent,
  EventThumbnailComponent,
  CreateEventComponent,
  EventDetailsComponent,
  EventService,
  EventRouteActivator,
  EventResolverService
} from './events'

import { NavbarComponent } from './nav'

import { AppComponent } from './app.component';
import { Error404Component } from './errors/404.components';
import { ToastrService } from './common/toastr.service';
import { AuthService } from './users/shared'

/** ROUTES */
import { appRoutes } from 'src/app/routes';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    CreateEventComponent,
    Error404Component,
    EventDetailsComponent
  ],
  providers: [
    EventService,
    ToastrService,
    EventRouteActivator,
    EventResolverService,
    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel');
  return true;
}
