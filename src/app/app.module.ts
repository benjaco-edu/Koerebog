import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';

import {AppComponent} from './app.component';
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {AuthService} from "./auth.service";
import { DriverlistComponent } from './driverlist/driverlist.component';
import { DirMapComponent } from './dir-map/dir-map.component';


const myFirebaseConfig = {
    apiKey: "AIzaSyBtnxn3hN-1kIPAE_jyboTg36uERZdeaZ8",
    authDomain: "skole-mandatory.firebaseapp.com",
    databaseURL: "https://skole-mandatory.firebaseio.com",
    projectId: "skole-mandatory",
    storageBucket: "skole-mandatory.appspot.com",
    messagingSenderId: "993390201100"
};
const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
};


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        LoginComponent,
        DriverlistComponent,
        DirMapComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        AngularFireModule.initializeApp(myFirebaseConfig, myFirebaseAuthConfig),
        MaterialModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
