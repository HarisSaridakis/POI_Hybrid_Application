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
import {FinderPage} from '../home/finder';

import { LoadingController } from 'ionic-angular';
import {ReplacementPage} from '../home/replacement';
import { AngularFireAuth } from 'angularfire2/auth';
import { Events } from 'ionic-angular';
import { Subject } from 'rxjs/Subject';
declare var google;
@Component({
  selector: 'page-response',
  templateUrl: 'response.html'
})

export class ResponsePage {
public Images=[];
public Videos=[];
public newMultipleChoices=[];
public id="red";
public GamePath;
public MarkerName;
public dbResponsePath;
public path;
public StoragePath;
public MultipleChoices=[];
public MultipleChoicesAnswers=[];
MCanswrs={ans1:'',ans2:'',ans3:''};
private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(public events: Events,public navCtrl: NavController,public afAuth: AngularFireAuth,public viewCtrl: ViewController,public af: AngularFireDatabase,public loadingCtrl: LoadingController, public navParams: NavParams) {

  }

  ngOnInit(){
	  
	  	var   MultipleChoicesAnswers=[];
		var   MultipleChoices=[];
	 this.GamePath = this.navParams.get('GamePath');
    this.MarkerName = this.navParams.get('MarkerName');
	
	 
	this.path=this.GamePath+"/"+this.MarkerName+"/Data/MultipleChoices/";
	   this.Mchoices(this.path,MultipleChoicesAnswers,MultipleChoices);

  }
	   Mchoices(path,MultipleChoicesAnswers,MultipleChoices){ // Retrieves the multiple choices for the admin to change it
	
	new FinderPage(this.events,this.af).RetrieveKey(path).takeUntil(this.ngUnsubscribe).subscribe(MultipleChoicesKeys =>{	
				
				
				
				
				for  (let key of MultipleChoicesKeys) {
					
					  var tmp={ Title: key,
						          Answer: ""
						
						}
					this.MultipleChoicesAnswers.push(tmp);
					
					
					new FinderPage(this.events,this.af).RetrivePosition(this.GamePath+"/"+this.MarkerName+"/Data/MultipleChoices/"+key).takeUntil(this.ngUnsubscribe).subscribe(MultipleChoices =>{	
					 
						
						  var CorrectAnswer;
						  var newCorrectAnswer;
						  var answers=[];
						 var newAnswers=[];
                          
					  for (let answer of MultipleChoices){
						   if(answer.key != "CorrectAnswer"){
						  answers.push( answer.val());
						  newAnswers.push(null);
						   }
						   else
						   CorrectAnswer=answer.val();
						  
						 
							
					   }
					   
					    var tmp={ Title: key,
						          Answers: answers,
						          CorrectAnswer:CorrectAnswer
						}
						   var blankTmp={ Title: null,
						          Answers: newAnswers,
								 CorrectAnswer: null
						
						}
						
						   answers=[];
						this.MultipleChoices.push(tmp);
						this.newMultipleChoices.push(blankTmp);
						
					})
					  
				}
	  });
	   

	   
  }
	
 


upload(){ //Unsubscribe from subscription and calls function for upload to firebase
	  this.ngUnsubscribe.next();
       this.ngUnsubscribe.complete();

		
  new ReplacementPage(this.af,this.loadingCtrl).FirebaseMultipleChoiceReplace(this.MultipleChoices,this.newMultipleChoices,this.path)
	

}


SetToNull(){ // Sets all the variables and arrays empty
	
	this.Videos=[];
	this.Images=[];
	this.MultipleChoicesAnswers[0].Answer != "";
	
	
}

	
		
	}



 
