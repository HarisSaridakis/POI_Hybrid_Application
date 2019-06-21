import { Component,ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Diagnostic } from '@ionic-native/diagnostic';
import { AlertController } from 'ionic-angular';

import {FinderPage} from '../scenario/starter/finder';
import {MenuPage} from './menu';
import {RegistrationPage} from './registration';
import { LoadingController,App,ViewController,NavController } from 'ionic-angular';

import * as firebase from 'firebase';
@Component({
  selector: 'page-check',
  templateUrl: 'check.html'
})


export class CheckPage {

  
     
     



  constructor(public alertCtrl: AlertController,private diagnostic: Diagnostic,public af : AngularFireDatabase, public viewCtrl: ViewController,public navCtrl: NavController, public afAuth: AngularFireAuth) {
	  
  
	  
  }
  //check if gps, wifi and bluetooth are enabled

ngOnInit(){

	

	this.diagnostic.isGpsLocationEnabled()
  .then((state) => {
      
		if(state == false){
			var subtitle="Please Turn on your Gps";
			
			this.LocationAlert(subtitle);
		}
		
  }).catch(e => console.error("Gps error is:",e));
		
	 
	 	this.diagnostic.isBluetoothAvailable()
  .then((state) => {
      
		if(state == false){
			var subtitle="Please Turn on your Bluetooth"
			this.LocationAlert(subtitle);
		}
		
  }).catch(e => console.error("bluetooth error is:",e));


	this.diagnostic.isWifiAvailable()
  .then((state) => {
        console.log("success");
		if(state == false){
			var subtitle="Please Turn on your wifi"
			this.LocationAlert(subtitle);
		}
		
  }).catch(e => console.error("wifi error is:",e));


	  

	 this.afAuth.auth.onAuthStateChanged((user) =>{

		
  if (user) {
	

	  
			 this.navCtrl.push(MenuPage); 

    console.log("Signed In");
  } else {
	  
 
       console.log("Not Signed In");
	 
	    this.navCtrl.push(RegistrationPage,{privilege: false});
	      
  }

});

}

LocationAlert(subtitle) {   //Displays the appropriate message on screen
  let alert = this.alertCtrl.create({
    title: 'Warning',
    subTitle: subtitle,
    buttons: ['Ok']
  });
  alert.present();
}



   }