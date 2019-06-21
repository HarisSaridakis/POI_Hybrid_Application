import { Component } from '@angular/core';
import { Diagnostic } from '@ionic-native/diagnostic';
import { HomePage } from '../home/home';
import { NavController,AlertController  } from 'ionic-angular';
import { StartPage } from '../start/start';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { StringManipulationPage } from '../create_scenario/StringManipulation/string_manipulation';

@Component({
  templateUrl: 'menu.html'
})
export class MenuPage {

public GameName;


  constructor(public alertCtrl: AlertController,private diagnostic: Diagnostic,private navCtrl: NavController) {
	  


  }
  
  ngOnInit(){ //Check if wifi is on
	
	this.diagnostic.isWifiAvailable()
  .then((state) => {
        console.log("Success ");
		if(state == false){
			 
			
			this.WifiAlert( );
		}
		
  }).catch(e => console.error("error is:",e));
  }
  
start(){ //Check for spaces on given scenario name
  this.GameName=new StringManipulationPage().CheckForSpace(this.GameName);
    
this.navCtrl.push(HomePage,{Name : this.GameName});

}



WifiAlert( ) { //Message for turning on wifi 
  let alert = this.alertCtrl.create({
    title: 'Warning',
    subTitle: "Please Turn on your Wifi",
    buttons: ['Ok']
  });
  alert.present();
}





}
