import {Component, OnInit} from '@angular/core';
import {AngularFire} from "angularfire2";

@Component({
    selector: 'app-driverlist',
    templateUrl: './driverlist.component.html',
    styleUrls: ['./driverlist.component.css']
})
export class DriverlistComponent implements OnInit {

    koersler;
    km;
    km_i_alt = 0;

    vis_kort = false;

    constructor(public af: AngularFire) {

        af.auth.subscribe(auth => {
            if (auth) {
                this.koersler = af.database.list('/koersler/' + auth.uid);

                this.koersler.subscribe(snapshot => {
                    this.km_i_alt = 0;

                    snapshot.forEach(i => {
                        this.km_i_alt += i.km
                    })
                });

            }
        });


    }

    ngOnInit() {
    }


    gem() {
        this.koersler.push({km: this.km, date: DriverlistComponent.getDate()})
        this.km = ""
    }

    static getDate() {
        let date = new Date();
        return [date.getDate(), date.getMonth(), date.getFullYear()]
    }

    formatDate(date) {
        return date[0] + "/" + date[1] + "-" + date[2]
    }

    clear() {
        if(!confirm("Er du sikker?")){
            return
        }
        this.koersler.remove()
        this.km_i_alt = 0
    }

}
