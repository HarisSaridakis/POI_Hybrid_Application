import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams ,Content} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirePage} from '../gps/fire';

import { AlertController } from 'ionic-angular';
import {MenuPage} from './menu';
import { LoadingController,App,ViewController } from 'ionic-angular';
import { Firebase } from '@ionic-native/firebase';
import * as firebase from 'firebase';
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html'
})



export class RegistrationPage {
@ViewChild(Content) content: Content;
  
      public token;
      
	  

    Rform={Email:"",Password:""};

  constructor(public alertCtrl: AlertController, public viewCtrl: ViewController,public appCtrl: App,public af : AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth,public loadingCtrl: LoadingController) {
	  
  
	  
  }
  









//Registers a user with firebase auth
    Register(){
	
	  
	  
	
	  
	  this.afAuth.auth.createUserWithEmailAndPassword(this.Rform.Email, this.Rform.Password).then(()=>{
	  
	  
	  var user =  this.afAuth.auth.currentUser;
	  
	   var dbPath="/User/";
	   if(user != null)
	      new FirePage(this.af,this.loadingCtrl).AddUser(dbPath,user,this.token);
        
	  
	  
	  },(error) =>{
	
 
   var errorMessage = error.message;
    console.log("error",errorMessage);
	this.AlreadyExist(errorMessage);
});


	

	  
  }
  

  
  SignIn(){  //Sign in with firebase auth
	  
	 
	  
	  
 this.afAuth.auth.signInWithEmailAndPassword(this.Rform.Email, this.Rform.Password).then(()=>{
		     var usr = this.afAuth.auth.currentUser;



		  
	  } ,(error)=> {
  // Handle Errors here.

  var errorMessage = error.message;
   console.log("error",errorMessage);
   var subtitle="A user with that email already exists";
   this.AlreadyExist(errorMessage);
  // ...

});
   


  }
  

  AlreadyExist(subtitle) {  //Displays the appropriate message on screen
  let alert = this.alertCtrl.create({
    title: 'Warning',
    subTitle: subtitle,
    buttons: ['Ok']
  });
  alert.present();
}


  
  }

