import { Component } from "@angular/core";

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15; }
        #searchForm { margin-right: 100px; }
        @media (max-width: 1200px) { #searchForm { display: none; } }
        li > a.active { color: #f97924; font-weight: bold;}
    `]
})
export class NavbarComponent { }