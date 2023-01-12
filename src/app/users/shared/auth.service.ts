import { Injectable } from "@angular/core";
import { User } from './user.model';

@Injectable()
export class AuthService {

    currentUser: User | undefined;

    loginUser(username: string, password: string) {
        this.currentUser = {
            id: 1,
            userName: 'denis-oluka',
            firstName: 'Denis',
            lastName: 'Oluka'
        }
    }

    isAuthenticated() {
        return !!this.currentUser
    }

}