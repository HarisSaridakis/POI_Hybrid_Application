import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController} from 'ionic-angular';
import {BLE} from '@ionic-native/ble';

import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';


@Component({
  selector: 'page-beacon',
  templateUrl: 'beacon.html'
})
export class BeaconPage {
	
obj:  FirebaseObjectObservable<any>;
lst: FirebaseListObservable <any>;	

    public devices: any =[];
	public deviceId: any ;
	public BeaconId;
    public id :any;	
    public i=0;
gform={GameName:''};

  constructor(public viewCtrl: ViewController,public af: AngularFireDatabase,private ble: BLE,public navCtrl: NavController, public navParams: NavParams) {
	  

	  
	  
	  
  }

ngAfterViewInit() {

 this.bluetooth();

}

bluetooth(){ //Enables device bluetooth
	this.ble.enable().then(function(){ 
       console.log("bluetooth is enabled");
      
},
    function(){
		
		this.ble.showBluetoothSettings();
		console.log("bluetooth is not enabled");
	  
	
});	
     this.startScanning();
}





  
  
    //Page refresh
   doRefresh(refresher) {
	   this.devices=[];
	     this.startScanning();
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 4000);
  }

  
  startScanning() { //Start scanning for beacons


this.ble.scan([],5).subscribe(device => {
	 var adData = new Uint8Array(device.advertising)
	 
	
		   
	this.devices.push(device);
	
	   
	console.log("devices are:",this.devices);
 
	           
    }, error => {
		console.log("scan error",error);
   
    });
	
	
	
	

	
	
}


    list(deviceId){
	this.deviceId=deviceId
   this.dismiss();
 }
  



    dismiss(){ //Dismiss the current viewController
	
   this.viewCtrl.dismiss(this.deviceId);
 }
  
  
  

}
