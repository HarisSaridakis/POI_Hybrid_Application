import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams ,Content,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirePage} from '../create_scenario/gps/fire';
import { AngularFireModule } from 'angularfire2';
import {MenuPage} from '../home/menu';
import {CheckPage} from './check';
import {TabsPage} from '../tabs/tabs';
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
      public show;
	   public secondaryDatabase;
	
    Rform={Email:"",Password:""};

  constructor( public viewCtrl: ViewController,public alertCtrl: AlertController,public fcm: Firebase,public af : AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth,public loadingCtrl: LoadingController) {
	  
  
	  
  }
  







ngOnInit(){

	 this.secondaryDatabase=firebase.app("secondary").auth();
		 var auth=firebase.app("secondary").auth();
		
}
    Register(){ //Registers the user in firebase auth and creaters an entry to database
	
	  
	  
	


 
	   
	 
	  this.secondaryDatabase.createUserWithEmailAndPassword(this.Rform.Email, this.Rform.Password).then(()=>{
	 
	  var user =   this.secondaryDatabase.currentUser;
	  
	   var dbPath="/Admin/";
	   new FirePage(this.af,this.loadingCtrl,this.alertCtrl).AddUser(dbPath,user,this.token);
       
	  
	  
	  },(error) =>{
	
  
   var errorMessage = error.message;
   
	 
   this.AlreadyExist(errorMessage);
});


	
	   
	
	  
  }
  

  
  SignIn(){ //Registers the user in firebase auth
	  
	 
 firebase.app("secondary").auth().signInWithEmailAndPassword(this.Rform.Email, this.Rform.Password).then(()=>{
		     var usr =  firebase.app("secondary").auth().currentUser;



	
		
	  } ,(error)=> {
  // Handle Errors here.

  var errorMessage = error.message;
   console.log("error",errorMessage);
   this.AlreadyExist(errorMessage);
 

});
   


  }
  

    AlreadyExist(subtitle) { //Shows the error message 
  let alert = this.alertCtrl.create({
    title: 'Warning',
    subTitle: subtitle,
    buttons: ['Ok']
  });
  alert.present();
}


  
  }

