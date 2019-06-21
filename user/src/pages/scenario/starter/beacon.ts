import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import {FinderPage} from './finder';
import { StartPage } from './start';
import { BLE } from '@ionic-native/ble';
import 'rxjs/add/operator/map';
@Component({
  selector: 'page-beacon',
  templateUrl: 'start.html'
})
export class BeaconPage {
	
	public devices=[];
	
	
 	obj:  FirebaseObjectObservable<any>;
    lst: FirebaseListObservable <any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,private ble: BLE) {
  

   
  
  }


   
 
  startScanning() { //Start scanning for nearby beacons
	 
   console.log("startScanning");

  this.ble.startScan([]).subscribe(device => {
	    var adData = new Uint8Array(device.advertising)
		
	
    console.log(JSON.stringify(device));
	 this.devices.push(device);
	

});

return new Promise((resolve) => {
   setTimeout(() => {
     this.ble.stopScan().then(() => {
console.log("Scanning has stopped");



resolve(this.devices);
});
}, 3500)

});
  


	
	
}


findId(CordsArray){ //Check if id of beacon devices exists in Scenario POIs
	

	 var minRssi=-350;
	 var RightId;
	 var data;
	for (let id of CordsArray){ 
	 for (let device of this.devices){
	     if(id.key == device.id){
		 
       if(  minRssi < device.rssi ) {  
		 minRssi=device.rssi;
         RightId=device.id;
		 data=id.val().Data;
	             }
		
		 }
	
	 }
}
	
	
  return data;

 
    }
	
	
}
