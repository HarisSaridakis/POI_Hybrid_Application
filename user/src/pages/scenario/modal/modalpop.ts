import { Component } from '@angular/core';
import { NavController, NavParams, ModalController,ViewController } from 'ionic-angular';
import { StartPage } from '../starter/start';

@Component({
  selector: 'page-ModalPop',
  templateUrl: 'modalpop.html',
})
export class ModalPopPage{
public image;
public video;
public type;
public check;
  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController ) {
	  
	  
  }

ngOnInit(){ 
	this.type=this.navParams.get('Type');
	
	if( this.type=="Image"){
	  this.image= this.navParams.get('URL');
	  this.check=true;
	}
     else{
		this.video= this.navParams.get('URL');
	      this.check=false;
	 }
	
}
  dismiss() {
    this.viewCtrl.dismiss();
  }
}
