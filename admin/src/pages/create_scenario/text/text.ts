import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Content,ViewController  } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms'
import {
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 MarkerOptions,
 Marker
 
} from '@ionic-native/google-maps';


import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { LoadingController } from 'ionic-angular';

declare var google;
@Component({
  selector: 'page-text',
  templateUrl: 'text.html'
})

export class TextPage {
	


	
	public Text;
 
  constructor(public viewCtrl: ViewController, public navParams: NavParams,private fb: FormBuilder) {
	  
	  

  }

  ngOnInit(){
	  
	
  }
  
 
	
	  dismiss() { //Dismiss the current viewController
	
   this.viewCtrl.dismiss(this.Text);
 }
 

		
	}



 
