import { Component,ViewChild } from '@angular/core';
import { NavController,Content } from 'ionic-angular';
import { StartPage } from './start';
import { AlreadyVisitedPage } from '../visited/AlreadyVisited';
import { BeaconPage } from '../starter/beacon';
import { GeoPage } from '../geographically/geo';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import {FinderPage} from './finder';
import {RootPage} from '../../StringManipulation/Root'
@Component({
  selector: 'page-scenario',
  templateUrl: 'scenario.html'
})
export class ScenarioPage {
	@ViewChild(Content) content: Content;
public GameName;
public GamePassword;
public GamesArray=[];
public Digit;
public root;
	private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(private alertCtrl: AlertController,public af: AngularFireDatabase,public navCtrl: NavController,public afAuth: AngularFireAuth) {

  
  }
  
    ngOnInit(){
	  
	  this.root=new RootPage().DBroot();
	  this.AvailableGames();
	  
  }
  
   StartGame(){
	  
	   this.navCtrl.push(StartPage,{Digit:this.Digit,Name:this.GameName });
	  
  }
  
  //Menu of scenarios
   AvailableGames(){
  
  
  
  
	 




	new FinderPage(this.af).RetrieveKey(this.root ).subscribe(keys =>
		      {
					
				for (let key of keys){
					
				new FinderPage(this.af).RetrieveGameName(this.root,key ).subscribe(Names =>{
					 
						if(Names != undefined){
						 
           					
                       this.GamesArray.push(Names);
					
						}
					    
					
				})
				}
		
			
 })
       

  }
 //Present the appropriate promt
 
  presentPrompt(GamePath,GameName) {
	  this.GameName=GameName;
  let alert = this.alertCtrl.create({
    title: 'Login',
	
    inputs: [
     
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
       
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
			

		  
		     new FinderPage(this.af).RetrieveOnce(GamePath+"/Password").then(GamePassword =>
		      {
				
				 
			
					
	    	if(data.password == GamePassword){
			
             this.StartGame();
			}
          else{
			  
		
              this.WpresentPrompt(GamePath);
	          
		  }
			  })
   
        }
      }
    ],
	enableBackdropDismiss: false 
  });

  alert.present();
  
}

//Present the appropriate promt
WpresentPrompt(GamePath) {
	  
  let walert = this.alertCtrl.create({
    title: 'Login',
	subTitle:'wrong password',
    inputs: [
     
      {
        name: 'password',
        placeholder: 'Password',
        type: 'password'
      }
    ],
    buttons: [
      {
        text: 'Cancel',
      
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Login',
        handler: data => {
			
	
		 
		     new FinderPage(this.af).RetrieveOnce(GamePath+"/Password").then(GamePassword =>
		      {
				  
				 
	
					
	    	if(data.password == GamePassword){
			
             this.StartGame();
			}
          else{
			 
              this.WpresentPrompt(GamePath);
	          
		  }
			  })
   
        }
      }
    ],
	enableBackdropDismiss: false 
  });
  

  walert.present();
  
}









}
