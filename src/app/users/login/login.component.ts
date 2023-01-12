import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/'
import { Router } from '@angular/router';
import { ToastrService } from 'src/app/common/toastr.service';

@Component({
    selector: 'user-login',
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #e05c65; padding-left: 10px; font-size: 10px;}
    `]
})

export class LoginComponent implements OnInit {
    password: any;
    username: any;

    constructor(
        private authService: AuthService,
        private router: Router,
        private toastr: ToastrService
    ) { }

    login(formValues: any) {
        console.log(formValues)
        this.authService.loginUser(formValues.username, formValues.password)
        this.toastr.success('Login success')
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }


    ngOnInit() { }
}