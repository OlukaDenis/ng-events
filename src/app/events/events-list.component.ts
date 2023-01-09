import { Component } from '@angular/core'

@Component({
    selector: 'event-list',
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr />
            <event-thumbnail [event] = "eventModel"></event-thumbnail>
        </div>
    `
})
export class EventListComponent {
    eventModel = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:10am',
        price: 100,
        imageUrl: '/assests/images/angularconnect-shield.png',
        location: {
            address: '192 St Avenue',
            city: 'Kampala',
            country: 'Uganda'
        }
    }
}