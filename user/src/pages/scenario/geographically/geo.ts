import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { BeaconPage } from '../starter/beacon';
import { FinderPage } from '../starter/finder';
import { ChronPage } from '../chronologically/chron';
import { BLE } from '@ionic-native/ble';


import {
	GoogleMap,
	GoogleMapsEvent,
	LatLng,
	MarkerOptions,
	Marker

} from '@ionic-native/google-maps';
import { AngularFireDatabase } from 'angularfire2/database';

declare var google;
@Component({
	selector: 'page-geo'
})


export class GeoPage {

	public GamePath;
	public CordsArray;

	constructor(private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, private ble: BLE) {

	}





	startgeo(accuracy, CordsArray, Currentlatlng, visitedInfo, devices, BIDs) { //Loops through returned firebase snapshot and calls Nearest function
		for (let cord of CordsArray) {
			

			var data = this.Nearest(accuracy, cord, Currentlatlng, visitedInfo, devices, BIDs);
			if (data != undefined) {
				
				return data;
			}



		}

	}






	Nearest(accuracy, cord, Currentlatlng, visitedInfo, devices, BIDs) { //Searches if the current coordinates matches with any of POIs

		var minRssi = -350; //initializes Rssi as -350
		if (accuracy == undefined) { //if accuracy of latlng is not predifined gets the default value
            
			accuracy = 6; //5 digits plus one dot



		}
		var Clat = Currentlatlng.lat().toString().substr(0, accuracy);
		
		var Clng = Currentlatlng.lng().toString().substr(0, accuracy);
		

		var lat = cord.val().Lat.toString().substr(0, accuracy);
		var lng = cord.val().Long.toString().substr(0, accuracy);



		var latlng = new google.maps.LatLng(cord.val().Lat, cord.val().Long);
		
		if (Clat == lat){
			if (Clng == lng){

				if (cord.key.substr(0, 6) != "Marker") { //check if POI is a beacon
				

					for (let device of devices) {
						if (new ChronPage(this.navCtrl, this.navParams, this.af, this.ble).CheckExistence(device.id, visitedInfo) === "-1" || visitedInfo == undefined)
							if (cord.key == device.id)
								if (minRssi < device.rssi) {
									minRssi = device.rssi;


									
									var data = cord.val().Data;

									var temp = {
										latlng: latlng,
										visited: cord.key
									};

								}
					}
					if (temp != undefined) {
						visitedInfo.push(temp);
						BIDs.push(cord.key);
					}

				}
				else {
					var value = new ChronPage(this.navCtrl, this.navParams, this.af, this.ble).CheckExistence(cord.key, visitedInfo);
                 
					if (value == "-1") {
						
						this.MakeData(visitedInfo, cord, latlng);
						var data = cord.val().Data;
                        

					}
				}

			}
		}




		return data;

	}


	MakeData(visitedInfo, cord, latlng) { //Puts in an array the coordinates and the name of POI
										  //for visited POIs





		var temp = {
			latlng: latlng,
			visited: cord.key
		};
		visitedInfo.push(temp);





	}


	cordinates() {

		return this.geolocation.getCurrentPosition().then((resp) => {
			
			var lat = resp.coords.latitude;
			var lng = resp.coords.longitude;

			
			var Currentlatlng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);

			return Currentlatlng;
		}).catch((error) => {
			console.log('Error getting location', error);
		});


	}







	CheckExistence(key, visitedInfo) { //Returns -1 if POI is already visited
		var val = "-1";
		for (let visit of visitedInfo) {
			if (visit.visited == key)
				val = key;

		}

		return val;

	}



}