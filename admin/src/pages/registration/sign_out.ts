import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams ,Content} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {CheckPage} from './check';
import {TabsPage} from '../tabs/tabs';
import { LoadingController,App,ViewController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import * as firebase from 'firebase';
@Component({
  selector: 'page-sign_out',
 templateUrl: 'sign_out.html'
})


export class SignoutPage {
 
  

  constructor( public viewCtrl: ViewController,public appCtrl: App,public fcm: Firebase,public af : AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth,public loadingCtrl: LoadingController) {
	  
  
	  
  }
  







ngOnInit(){


	 

	 var auth=firebase.app("secondary").auth();
	  auth.signOut().then(()=> { //Sign out the user  
  // Sign-out successful.
    var index = this.navCtrl.getActive().index;
	
  this.navCtrl.remove(0, index);
  console.log("Sign-out ");

}).catch((error) =>{
	 console.log("error ",error);

});

	  
  




	
}
 
  

  
  

  

  


  
  }

