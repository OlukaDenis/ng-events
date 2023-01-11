import { Component } from '@angular/core';

@Component({
  selector: 'denny-app',
  template: `
    <div>
      <nav-bar></nav-bar>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent {
  title = 'app';
}
