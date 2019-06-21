import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams ,Content,} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {CheckPage} from './check';
import { ScenarioPage } from '../scenario/starter/scenario';
import {FinderPage} from '../scenario/starter/finder';
import {RegistrationPage} from './registration';
import { LoadingController,App,ViewController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';


@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})


export class MenuPage {
	@ViewChild(Content) content: Content;

public token;
constructor(public fcm: Firebase,public af : AngularFireDatabase,public afAuth: AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
 	
 }


 
 	

  SignOut(){ //Signs out the user with firebase auth
	  

	  
	  this.afAuth.auth.signOut().then(()=> {
  // Sign-out successful.
   this.navCtrl.pop();
 
}).catch((error) =>{
  // An error happened.
});

	  
  }
  
   GoToScenario(){//Pushes a page on screen
	
	
	 this.navCtrl.push(ScenarioPage);
	
}


 


  
 
}