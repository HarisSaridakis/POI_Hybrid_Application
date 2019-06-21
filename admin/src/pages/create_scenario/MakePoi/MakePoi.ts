import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GpsPage } from '../gps/gps';
import { BeaconPage } from '../beacon/beacon';
import { StringManipulationPage } from '../StringManipulation/string_manipulation';

@Component({
  selector: 'page-MakePoi',
  templateUrl: 'MakePoi.html'
})


export class MakePoiPage {
	
	 public GameName : any;
	 public Password : String;
	 public Stype : String;
 public Accuracy : any
	
  constructor(public navCtrl: NavController, public navParams: NavParams  ) {

	  
	  
  }
  



  GoToMaps(){ //Navigates to another page
    this.GameName=new StringManipulationPage().CheckForSpace(this.GameName);
   

	  this.navCtrl.push(GpsPage,{Name:this.GameName,
	                              Scenario : this.Stype, 
	                               Password: this.Password, 
								    Accuracy: this.Accuracy});
	  
  }
  

  
 
  

  }

