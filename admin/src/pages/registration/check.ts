import { Component,ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

import {FirePage} from '../create_scenario/gps/fire';
import {TabsPage} from '../tabs/tabs';
import {MenuPage} from '../home/menu';
import {RegistrationPage} from './registration';
import { LoadingController,App,ViewController,NavController,NavParams,AlertController} from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import * as firebase from 'firebase';
@Component({
  selector: 'page-check',
  templateUrl: 'check.html'
})


export class CheckPage {

  
      public token;
      public show;
	  
	  public CreateGame: boolean ;
    Rform={Email:"",Password:""};

  constructor(public navParams: NavParams,public af : AngularFireDatabase, public viewCtrl: ViewController,public navCtrl: NavController, public afAuth: AngularFireAuth) {
	  
  
	  
	  
  }
  

ngOnInit(){
	



  	if(firebase.apps.length >1){ 
			firebase.app("secondary").delete().then(()=> { //Deletes the secondary firebase
              
	this.SecondFirebase(); //initializes second firebase again
		 });
		}
else{
	this.SecondFirebase();

}
}



SecondFirebase(){ //Parameters for initiallize a second firebase   
	
	
			   var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };




	
	var secondary=firebase.initializeApp(config, "secondary");
	var secondaryDatabase = secondary.auth();
      this.check(secondaryDatabase);
             
	
	
	
}

check(secondaryDatabase){ //Check if user is signed in
	
	 secondaryDatabase.onAuthStateChanged((user) =>{
		
		
  if (user) {
	

		 
		this.navCtrl.push(TabsPage);


      
    console.log("Signed In");
  } else {
	  
  
	    this.navCtrl.push(RegistrationPage,{auth: secondaryDatabase} );
	         
  }

});

}


   }