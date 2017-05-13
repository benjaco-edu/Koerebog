import {Component, OnInit, Output, EventEmitter} from '@angular/core';
declare var google;

@Component({
    selector: 'app-dir-map',
    templateUrl: './dir-map.component.html',
    styleUrls: ['./dir-map.component.css']
})
export class DirMapComponent implements OnInit {

    constructor() {
    }

    @Output('close') public close = new EventEmitter();
    @Output('selected-range') public selectedRange = new EventEmitter();


    km = 0;
    map;
    directionsService;
    directionsDisplay = null;

    ngOnInit() {
        this.directionsService = new google.maps.DirectionsService;


        this.map = new google.maps.Map(document.getElementById("googleMap"), {
            center: new google.maps.LatLng(55.6, 12),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });

        const autocompleteFra = new google.maps.places.Autocomplete(
            (document.getElementById('dir_fra')),
            {types: ['geocode']});


        const autocompleteTil = new google.maps.places.Autocomplete(
            (document.getElementById('dir_til')),
            {types: ['geocode']});

        autocompleteFra.addListener('place_changed', () => this.locationUpdate(autocompleteFra.getPlace(), autocompleteTil.getPlace()));
        autocompleteTil.addListener('place_changed', () => this.locationUpdate(autocompleteFra.getPlace(), autocompleteTil.getPlace()));


    }

    static filled(addr) {
        if (typeof addr == "undefined") {
            return false;
        }
        if (addr.name == "") {
            return false;
        }
        return true;
    }

    locationUpdate(fra, til) {

        if (!DirMapComponent.filled(fra) || !DirMapComponent.filled(til)) {
            this.km = 0;

            if (this.directionsDisplay != null) {
                this.directionsDisplay.setMap(null)
                this.directionsDisplay = null
            }

            return;
        }

        this.directionsService.route({
            origin: fra.formatted_address,
            destination: til.formatted_address,
            travelMode: 'DRIVING'
        }, (response, status) => {
            if (status === 'OK') {
                if (this.directionsDisplay == null) {
                    this.directionsDisplay = new google.maps.DirectionsRenderer;
                    this.directionsDisplay.setMap(this.map);
                }

                this.directionsDisplay.setDirections(response);
                this.km = Math.round(response.routes[0].legs[0].distance.value / 100) / 10;

            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });

    }


    ok() {
        if (this.km == 0) {
            alert("Du har ikke valgt en route")
        } else {
            this.selectedRange.emit(this.km)
        }
    }

    fortryd() {
        this.close.emit()
    }
}
