import { ProfileComponent, LoginComponent } from '.';
import { Routes } from "@angular/router";

export const userRoutes: Routes = [
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent }
]