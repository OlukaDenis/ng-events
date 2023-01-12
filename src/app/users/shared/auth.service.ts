import { Injectable } from "@angular/core";
import { User } from './user.model';

@Injectable()
export class AuthService {

    currentUser: User;

    loginUser(username: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: 'denis-oluka',
            firstName: 'Denis',
            lastName: 'Oluka'
        }
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName
        this.currentUser.lastName = lastName
    }

    isAuthenticated() {
        return !!this.currentUser
    }

}