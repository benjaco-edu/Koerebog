import {Component, OnInit} from '@angular/core';
import {MdSnackBar} from '@angular/material';
import {AuthService} from "../auth.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    opretBrugerToggle = false;

    email = "";
    password = "";
    gentag_password = "";

    constructor(private auth: AuthService, public snackBar: MdSnackBar) {


        auth.af.auth.subscribe(auth => {
            if(auth) {
                console.log(auth);
            }
        });

    }

    ngOnInit() {
    }

    login() {
        this.auth
            .login(this.email, this.password)
            .then(d => {
                console.log(d);
            }).catch(d => {
                console.log(d, typeof d);

                if (typeof d == "string") {
                    this.snackBar.open(d)
                } else {
                    this.snackBar.open(d.message.toString())
                }
            });


    }

    opretBruger() {
        if (this.password != this.gentag_password) {
            this.snackBar.open("Password ikke ens");
            return
        }
        this.auth
            .createUser(this.email, this.password)
            .then(d => {
                console.log(d);
            }).catch(d => {

                console.log(d, typeof d);
                this.snackBar.open( d.message.toString() )

            });

    }


    switchFunctions() {
        this.opretBrugerToggle = !this.opretBrugerToggle;
    }
}
