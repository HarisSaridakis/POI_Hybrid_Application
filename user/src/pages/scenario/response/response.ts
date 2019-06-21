import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams,Content,ViewController  } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import {
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 MarkerOptions,
 Marker
 
} from '@ionic-native/google-maps';
import {CamPage} from '../../gps/cam';
import {VidPage} from '../../gps/vid';
import {FirePage} from '../../gps/fire';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { LoadingController } from 'ionic-angular';
import { FinderPage } from '../starter/finder';
import { AngularFireAuth } from 'angularfire2/auth';
import { VideoEditor } from '@ionic-native/video-editor';
import {BrowserModule} from '@angular/platform-browser'
import {DomSanitizer, SafeUrl, SafeResourceUrl} from "@angular/platform-browser";
declare var google;
@Component({
  selector: 'page-response',
  templateUrl: 'response.html'
})


export class ResponsePage {
public isAlreadyAnsweres=false;
public Images=[];
public Videos=[];
public id;
public GamePath;
public dbPath;
public dbResponsePath;
public paths;
public StoragePath;
public MultipleChoices=[];
public MultipleChoicesAnswers=[];
public CorrectAnswer;
  constructor(private domSanitizer: DomSanitizer,private videoEditor: VideoEditor,public afAuth: AngularFireAuth,public viewCtrl: ViewController,public af: AngularFireDatabase,private mediaCapture: MediaCapture,private file: File,public loadingCtrl: LoadingController, public navParams: NavParams) {

  }

  
  ngOnInit(){

	 this.GamePath = this.navParams.get('GamePath');
    this.dbPath = this.navParams.get('dbPath'); 


	
	  this.id = this.navParams.get('id');
	 
	  var visited = this.navParams.get('MCvisited');
	  var CurrentPoi = this.navParams.get('CurrentPoi');
	  var isAlreadyAnsweres;
	  if(visited.length != 0){
		 
	  for  (let key of visited) {  
		  if(key.Name==CurrentPoi){
			  this.MultipleChoicesAnswers=key.MultipleChoicesAnswers;
		  this.MultipleChoices=key.MultipleChoices;
		  this.isAlreadyAnsweres=true;
		  this.CheckAnswers();
		  
	
		  }
		 
	  }
	  }
	 if( this.isAlreadyAnsweres == false){
		 
	  this.MCstaff();
	  
	  }
  }
  //Retrieve multiple choices answer
  MCstaff(){
	new FinderPage(this.af).RetrieveKey(this.dbPath+"/Data/MultipleChoices").subscribe(MultipleChoicesKeys =>{	
				
				
				  var CorrectAnswer;
				
				for  (let key of MultipleChoicesKeys) {
					
				 
					
					new FinderPage(this.af).RetrivePosition(this.dbPath+"/Data/MultipleChoices/"+key).subscribe(MultipleChoices =>{	
					   
				
						  var answers=[];
						   var isCorrectAnswer=[];
						   var isYourAnswer=[];
					  for (let answer of MultipleChoices){
						     if(answer.key.substr(0,1) == "C")
								 CorrectAnswer=answer.val();
							 else{
						  answers.push( answer.val());
						  isCorrectAnswer.push(false);
						  isYourAnswer.push(false);
							 }
						  
					   }
					   
					   	  var obj={ Title: key,
						          Answer: "",
								   CorrectAnswer: CorrectAnswer
						
						}
					this.MultipleChoicesAnswers.push(obj)
				
					   
					    var tmp={ Title: key,
						          Answers: answers,
								  isCorrectAnswer: isCorrectAnswer,
								  isYourAnswer: isYourAnswer
								  
						}
						
						   answers=[];
						this.MultipleChoices.push(tmp);
						
					})
					
				
					
					
					  
				}
	  });
	   
	
	   
  }
	
 

 

	
CheckAnswers(){ //Check if the user's answer is the correct one
	
	
	
	

		
		for  (let key of this.MultipleChoicesAnswers) {
			  
			if(key.Answer == key.CorrectAnswer){
				
				 for (let answer of this.MultipleChoices ){ 
				    
				
						 for(let i=0; i< answer.Answers.length; i++){
						 
					 if( answer.Answers[i] == key.CorrectAnswer){
						
                          answer.isCorrectAnswer[i]=true;
						  
					   }
					   
					 }
				 }
					  
					  
			} else{
				 for  (let answer of this.MultipleChoices){
					      
					 for(let i=0; i< answer.Answers.length; i++){
						 
				if(answer.Answers[i] == key.CorrectAnswer){
					 
		          answer.isCorrectAnswer[i]=true;
				}
             	if(key.Answer == answer.Answers[i]){
					
		            answer.isYourAnswer[i]=true;
					
				}
				  
					  }
					  
				 }
				
				
				
				
			}
			
       
			
		}
		

	
	 
	
	
}

dismiss(){ //Dismiss current page
	var results=[];
	results.push({ MultipleChoices: this.MultipleChoices,
                   MultipleChoicesAnswers: this.MultipleChoicesAnswers  });

	
	 
	this.viewCtrl.dismiss(results,this.isAlreadyAnsweres.toString());
}




 


SetToNull(){ //Sets variables and arrays empty
	
	this.Videos=[];
	this.Images=[];
	this.MultipleChoicesAnswers[0].Answer != "";
	
	
}

	
		
	}



 
