import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController,ViewController } from 'ionic-angular';
import * as firebase from 'firebase';
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import {HomePage} from './home';
import {RootPage} from '../start/Root';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
@Component({
  selector: 'page-replacement',
  templateUrl: 'home.html'
})
export class ReplacementPage {
	   
	   public root;
	   public loader=[];
       public percentage;
obj:  FirebaseObjectObservable<any>;
  constructor(public af: AngularFireDatabase,public loadingCtrl: LoadingController) {
	  
		this.root=new RootPage().DBroot();
  }
  
  ChangeRights(user,uid){ //Change the type of user
	  
	  
	
	     this.obj=this.af.object("/User/"+uid);
                this.obj.update({UserType: user });
	
	  
	  
	  
  }
  
  
  FirebaseMultipleChoiceReplace(MultipleChoices,newMultipleChoices,path){ //Replace existing multiple choice
	  
	  this.obj=this.af.object(path); 
		 this.obj.remove();
		 
	  	for (let i=0; i< newMultipleChoices.length; i++){
			
		   
		 if(newMultipleChoices[i].Title==null){
			 this.ReplaceLoop(path,newMultipleChoices[i],MultipleChoices[i],MultipleChoices[i].Title);
		
		 }
		 else{
		
				  
				   
               this.ReplaceLoop(path,newMultipleChoices[i],MultipleChoices[i],newMultipleChoices[i].Title);
	             
			   
	               
	            }
		 
		 
		 }
 
		 
	}
	  
	  

	 
  
  
  ReplaceLoop(path,newMultipleChoices,MultipleChoices,Title){ //Replace the Multiple choice  questions and answer  
	  
	  
	  
	  
	    this.obj=this.af.object(path +"/"+Title+"/CorrectAnswer"); 
			  
				
			   if(newMultipleChoices.CorrectAnswer == null)
					      this.obj.set(MultipleChoices.CorrectAnswer);
				   else
				           this.obj.set(newMultipleChoices.CorrectAnswer);
					   
			 
		 for (let k=0; k< 3; k++){ // new tiltle
		   var num=k+1;
		 
		 
		      this.obj=this.af.object(path +"/"+Title+"/Answer"+num); 
		   
	           if(newMultipleChoices.Answers[k]==null)
		
                  this.obj.set(MultipleChoices.Answers[k]);
			    else

                  this.obj.set(newMultipleChoices.Answers[k]);

      }
  }
  
  ReplaceText(txt,name,GamePath,MarkerName,key){ //Replace text of an existing POIs text
	  
	  
		  GamePath=GamePath+"/"+MarkerName;
		  
		  
		  
	   this.obj=this.af.object(GamePath+"/Data"+"/"+name);
                this.obj.set(txt);
	  
	  
	  
  }
  ReplaceInum(Inums,GamePath,CordsArray){ //Replace increasing number of an existing POI
 var Gpath=GamePath;
	
	    for(let Inum of Inums){
			
			
			
			  GamePath+="/"+Inum.MarkerName;
	       
				
	    this.obj=this.af.object(GamePath+"/Inum");
		
                this.obj.set( Inum.Inum);
				
			
				GamePath=Gpath;
			
			
			
		}
	            
	    
	
	 
  }
  
  
   ReplaceCordinates(name,GamePath,lat,longt){ //Replace coordinates of an existing POI
	   
	   if(lat != "")
	   {
	    this.obj=this.af.object(GamePath+"/"+name+"/Lat");
		 
                this.obj.set(lat);
	   }
	if(longt != ""){
		
	
	   		
	    this.obj=this.af.object(GamePath+"/"+name+"/Long");
		 
                this.obj.set(longt);
	}
	   
	   
   }
  
  
  ChangeScenarioType(ScenarioType,Path,type){ //Change the scenario type  
  
  
	   this.obj=this.af.object(Path+"/"+type);
   this.obj.set(ScenarioType);
  
  
  }
  ChaneOnlyPlayOption(name,GamePath,MarkerName,key,InitialName,file){ //Sets audio to autoplay by changing its name
	 
	    var StoragePath=key+"/"+MarkerName;
		  GamePath=GamePath+"/"+MarkerName;
	   this.obj=this.af.object(GamePath+"/Data"+"/"+InitialName);
			this.obj.remove();
	  if(file==undefined){
	
	       
				  this.obj=this.af.object(GamePath+"/Data"+"/"+name);
                this.obj.set(StoragePath+"/"+name);
				
				 
	  }
	  else{
	         var storageRef = firebase.storage().ref();
	          var dataRef = storageRef.child(StoragePath+"/"+name);
	          var task;
	          
 
	 
	          task=dataRef.putString(file,'data_url');
			  	 var loader=this.loadingCtrl.create({
      content: "Please wait...",
   
    }) ;
	   	 this.storeInputData(StoragePath,GamePath,this.af,name,task,loader).then( ()=>
		        {
			  
			   
					
			})
	  }
  }
  
ReplaceData(file,name,GamePath,MarkerName,key){ //Replace data of a POI
	
	
	
		
	
	  var StoragePath=this.root+key+"/"+MarkerName;
		  GamePath=GamePath+"/"+MarkerName;
	

	     var storageRef = firebase.storage().ref();
	   var dataRef = storageRef.child(StoragePath+"/"+name);
	var task;
	
 
	 
	  task=dataRef.putString(file,'data_url');

	
	 
 
	 
	 var loader=this.loadingCtrl.create({
      content: "Please wait...",
   
    }) ;

	 this.storeInputData(StoragePath,GamePath,this.af,name,task,loader);

}



  
    storeInputData(StoragePath,GamePath,af,name,task,loader) { //Stores Replaced data to firebase
	  
   
	
	 return   new Promise( function(resolve,reject){
		
		loader.present();
		
	
	 
	task.on('state_changed',
            function progress(snapshot){
          
            this.percentage =(task.snapshot.bytesTransferred / task.snapshot.totalBytes) * 100;
            console.log(this.percentage,"% of completed ");
			
			 
		
			  
            },
             
            function error(err){
               console.log("error is:",err);
            },
            function complete(){
				 if  (name.includes("Audio") == true){
				  this.obj=af.object(GamePath+"/Data"+"/"+name);
                this.obj.set(StoragePath+"/"+name);
				console.log("completed");
				 }
			 loader.dismiss();
				
				
					 
            });
	 
          
             
	 });
	 

	 
 }

 

   Loading(loader) { //Puts a loader on screen
    loader.push(this.loadingCtrl.create({
      content: "Please wait..."
    }) 
	 )
  

  }
 

 
	

	

}
