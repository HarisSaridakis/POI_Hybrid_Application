import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NavController,ModalController  } from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import { HTTP } from '@ionic-native/http';
import {FinderPage} from '../home/finder';
import { AngularFireAuth } from 'angularfire2/auth';
import { Subject } from 'rxjs/Subject';
import {ReplacementPage} from '../home/replacement';
import {AngularFireDatabase} from 'angularfire2/database';
import { LoadingController } from 'ionic-angular';
import { ResponsePage } from '../response/response';
import {ShowImagePage} from './ShowImage'
import { Events } from 'ionic-angular';
@Component({
	  selector: 'page-start',
  templateUrl: 'start.html'
})
export class StartPage {

public MultipleChoicesAnswers=[];
public MultipleChoices=[];
public audio;
public VideoUrls=[];
public blobs=[];
public Privilege=[];
public snaps;
public path;
public Data;
public UserDetails;
public UserData;
public token;
public PoiName=[];
public Rights=[];
public UserAnswers=[]
private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(public events: Events,public modalCtrl: ModalController,private http: HTTP,private navCtrl: NavController,public af: AngularFireDatabase,public afAuth: AngularFireAuth,public loadingCtrl: LoadingController) {
	  


  }
  
  ngOnInit(){
	  
	 this.ShowUsers(); 
	  
	  
	  
  }
ShowUsers(){ //Retrieve the users 
		  
	  
	var path="/User/";
	new FinderPage(this.events,this.af).RetrieveSnapshot(path).takeUntil(this.ngUnsubscribe).subscribe(snaps =>
		      {
				  this.snaps=snaps;
		
		
		
				
		 
    });
	
  
}





ShowDetails(key){ //Retrieves the scenarios user has participate
		
	  
	this.path="/User/"+key+"/ResponseData/";
	new FinderPage(this.events,this.af).RetrieveSnapshot(this.path).takeUntil(this.ngUnsubscribe).subscribe(snaps =>
		      {
				
				  this.UserDetails=snaps;
		
		this.setToNull();
				
		 
    });

  
}



UserResponses(Name){ //Retrieves the response of the user to a certain scenario
	this.setToNull();
	
	var path=this.path+Name;
	
		new FinderPage(this.events,this.af).RetrieveSnapshot(path).takeUntil(this.ngUnsubscribe).subscribe(snaps =>
		      {
				  
				 
			 snaps.forEach(snapshot => {
			    
		 if(snapshot.key.substr(0,4) != "Game"){
			
			  this.showData(snapshot.val());
		  this.PoiName.push(snapshot.key);
		 new FinderPage(this.events,this.af).RetrieveSnapshot(path+"/"+snapshot.key).takeUntil(this.ngUnsubscribe).subscribe(snaps =>
		      {
				  	 
				  var value;
				  
				 
				  	 snaps.forEach(snapshot => {
					
				     
	    if(snapshot.key == "MultipleChoices"){
	             this.UserAnswers=snapshot.val().Answers; 
	                  this.Mchoices(snapshot.val().MCpath,snapshot.val().Answers);
		 }
		  
			
	
		 
    });
				
		 
    });
		 }
          });
	
	
})

			 }

 Mchoices(path,UserAnswers){ //Retrieves the answer(s) of user in multiple choices questions 
	
	new FinderPage(this.events,this.af).RetrieveKey(path+"/Data/MultipleChoices").subscribe(MultipleChoicesKeys =>{	
				
				
							
				for  (let key of MultipleChoicesKeys) {
					
					if(UserAnswers[key] != undefined){
					  var tmp={ Title: key,
						          Answer: "",
						         UserAnswers : UserAnswers[key]
						}
					this.MultipleChoicesAnswers.push(tmp);
					}
					
					
					new FinderPage(this.events,this.af).RetrivePosition(path+"/Data/MultipleChoices/"+key).subscribe(MultipleChoices =>{	
				
						  var CorrectAnswer;
						  var answers=[];
					  for (let answer of MultipleChoices){
						  
						  if(answer.key== "CorrectAnswer")
							  CorrectAnswer=answer.val();
						  else
							  answers.push( answer.val());
						   
					   }
					   var tmp;
					   	if(UserAnswers[key] != undefined){
							if(UserAnswers[key] == CorrectAnswer){ 
					     tmp={ Title: key,
						          Answers: answers,
								  CorrectAnswer: CorrectAnswer,
						      
						}
							}
							else{
								   tmp={ Title: key,
						          Answers: answers,
								  CorrectAnswer: CorrectAnswer,
						         UserAnswers : UserAnswers[key]  
						}
							}
						
					
						   answers=[];
						this.MultipleChoices.push(tmp);
						}
						
					})
					  
				}
	  });
	   
	  
	   
  }
  
  
showData(data){ //According the initiall letter of retrieved data puts their url  in certain arrays
                //for displaying thyem
	
								
			this.setToNull;
		
				 	
			for (var key in data) {
						
			   
		
				 
			
				   if(key.substr(0,1) == "v"){
					
		
			  new FinderPage(this.events,this.af).GetVidData(data,key).then(urlobj =>
			  {
				 this.VideoUrls.push(urlobj); 
				
	

		
			  })
	 }
		
			  if(key.substr(0,1) == "i"){
			
                 new FinderPage(this.events,this.af).GetData(data,key).then(urlobj =>
			  { 
			      
                      this.blobs.push(urlobj); 

			  } )
			 }
				
				   
				  if(key.substr(0,1) == "a"){
			
                 new FinderPage(this.events,this.af).GetData(data,key).then(urlobj =>
			  { 
			      
                      this.audio.push(urlobj); 

			  } )
			 }   
				   

	
              

	}

           
	
	
}

setToNull(){ //Sets arrays empty
	
	
			this.PoiName=[];
		   this.VideoUrls=[];
		   this.blobs=[];
		 this.audio=[];
		 this.MultipleChoices=[];
		 this.MultipleChoicesAnswers=[];
	
	
}
UpdatePrivileges(num,uid,token,Rights){ //Update the  privillages of a user to admin  
	
	 var tmp :object={  num: num,
		                    uid : uid,
					        token : token,
							
							};
				this.Privilege.push(tmp);			

}
  

 ShowModalPop(Url,type,name){ //Shows a modal on click
	 
		
		
   let profileModal = this.modalCtrl.create(ShowImagePage, { Blob: Url,
                                                            Type: type, 
 															Name: name,  
														
															  });

   
   profileModal.present();
  
 
 }





}
