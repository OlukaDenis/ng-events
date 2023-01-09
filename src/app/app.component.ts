import { Component } from '@angular/core';

@Component({
  selector: 'denny-app',
  template: `
    <div>
      <nav-bar></nav-bar>
      <event-list></event-list>
    </div>
  `,
})
export class AppComponent {
  title = 'app';
}
