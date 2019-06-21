import { Component,ViewChild ,ElementRef,AfterViewInit,OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { File } from '@ionic-native/file';
import { LoadingController } from 'ionic-angular';


@Component({
  selector: 'page-cam'
})


 export class FirePage  {
	
	   public Iloader=[];	
       public Vloader=[];
       public Aloader=[];	   
       public Floader=[];		   
	   public dataRef;
	   public task;
	   public storagePath;
	   public dbpath;
	 
       obj:  FirebaseObjectObservable<any>;
	   lst: FirebaseListObservable <any>;

  constructor(public af: AngularFireDatabase,public loadingCtrl: LoadingController) {

	
	  
  }
  
  
  AddUser(dbPath,user,token){ //Adds a user in firebase database 
	  
	
	
		    this.obj=this.af.object(dbPath+user.uid);
		   this.obj.set({email: user.email,UserType: "User" });
		  

	  
	  
  }
  

//Uploads to firebase
FirebaseResponseSetPath(GamePath,dbPath,StoragePath,MultipleChoicesAnswers,id,uid){

 dbPath="/User/"+uid+"/ResponseData";
 StoragePath="/User/"+uid;
	
	
	
	 this.lst=this.af.list(dbPath);
	var  key=this.lst.push('');
	   var ukey=key.key;
		
	   this.obj=this.af.object(dbPath+"/"+ukey);
	  
   this.obj.set({GamePath:   GamePath});
    dbPath=dbPath+"/"+ukey+"/"+id;
	StoragePath=StoragePath+"/"+ukey+"/"+id;

	
	var tmp = {dbResponePath :dbPath,
	             StoragePath  : StoragePath}
	return tmp;
	
	

}

//Uploads to firebase

FirebaseResponseUpload(dbPath,Videos,Images,Audio,id,StoragePath,Icnt,Vcnt,Acnt ){

	
	 var storageRef = firebase.storage().ref();
	 

	
	    for (let i=0; i<Audio.length; i++){
	         
                 
			   
	     this.Loading(this.Aloader);

		this.SetResponseParams(StoragePath,dbPath,Audio[i],Acnt,"Audio",storageRef);
		Acnt++;
		 this.storeInputData(this.task,this.storagePath,this.dbpath,this.af,this.Aloader[i]);
		 
	 }
	 
	 
	  for (let i=0; i<Videos.length; i++){
	  
			   
	  this.Loading(this.Vloader);

	   this.SetResponseParams(StoragePath,dbPath,Videos[i].video,Vcnt,"video",storageRef);
	  
	 this.storeInputData(this.task,this.storagePath,this.dbpath,this.af,this.Vloader[i]);
	   this.Loading(this.Vloader);
	   this.SetResponseParams(StoragePath,dbPath,Videos[i].thumbnail,Vcnt+"thumbnail","video",storageRef);
	   Vcnt++;
	 this.storeInputData(this.task,this.storagePath,this.dbpath,this.af,this.Vloader[i+1]);
	   
	 }
	
	

	for (let i=0; i<Images.length; i++){
	 
	
	this.Loading(this.Iloader);
	
		 this.SetResponseParams(StoragePath,dbPath,Images[i],Icnt,"image",storageRef);
		 Icnt++;
		 this.storeInputData(this.task,this.storagePath,this.dbpath,this.af,this.Iloader[i]);
	   
	
	 
	 }

	var counters={}



	
	return counters={
			   Icnt: Icnt,
			   Vcnt: Vcnt,
			   Acnt: Acnt

	}
	
	
}

FirebaseMultipleChoiceUpload(clicked,path,dbpath){ //Uploads multiple choices to 
	
	 
	 for  (let Mc of clicked) {
		
		 this.obj=this.af.object(path+"/MultipleChoices/Answers/" +Mc.Title); 
   this.obj.set( Mc.Answer);
		 
 
	 }
		 this.obj=this.af.object(path+"/MultipleChoices/" ); 
	 this.obj.update({MCpath:dbpath});
	
	
	
	
}
FirebaseSet(dbPath,latit,longit ){ //sets the latitude and longitude to firebase

	  this.obj=this.af.object(dbPath);
  this.obj.set({Lat: latit , Long: longit });
   
    
  
   
}

//Uploads to firebase
	
FirebaseUpload(keimeno,Password,StoragePath,dbPath,Videos,Images,Audio,gform,i,ScenarioPath,ScenarioType,McData,res ){
	
	
	  if(res == "True"){
		   this.obj=this.af.object(dbPath);
          this.obj.update({Response: res});
	  }
     var mdbPath=dbPath+"/Data/MultipleChoices";
 

	 
 this.obj=this.af.object(mdbPath );
 for (let Name of McData){
	  if(Name.Title!= undefined){
	 
	  this.obj=this.af.object(mdbPath+"/"+ Name.Title);
 this.obj.set({Answer1: Name.Fdata.Data1 , Answer2 : Name.Fdata.Data2, Answer3 :Name.Fdata.Data3, CorrectAnswer: Name.CorrectAnswer});
	  }

  }
	
	
	
	
	
	
	
	
	
	
	
	
	 if(i ==0){
	   this.obj=this.af.object(ScenarioPath);
   this.obj.update({ScenarioType:   ScenarioType,  Password: Password});
  }

	   
	  
		 
 var storageRef = firebase.storage().ref();

 var vdata =[];
  

this.obj=this.af.object(dbPath);
	this.obj.update({Inum: i});
	

   
   
   

   
   if(keimeno != undefined){
	this.obj=this.af.object(dbPath+"/Data");
	this.obj.update({ Text: keimeno});
   }

	
	
	if (Videos.length==0){
		console.log("videos lenght enterd",Videos.length);
		if (Images.length==0){
			console.log("image lenght enterd",Images.length);
		      
		}
	}
	
	
	
	
	
	
	
	for (let i=0; i<Audio.length; i++){
	 
	
		this.Loading(this.Aloader);
		 this.SetParams(StoragePath,dbPath,Audio[i],i,"Audio",storageRef);
		 this.storeInputData(this.task,this.storagePath,this.dbpath,this.af,this.Aloader[i]);
	   
	
	 
	 }
	

	   

 for (let i=0; i<Videos.length; i++){
	  
			   
	  this.Loading(this.Vloader);

	   this.SetParams(StoragePath,dbPath,Videos[i].video,i,"video",storageRef);
	 this.storeInputData(this.task,this.storagePath,this.dbpath,this.af,this.Vloader[i]);
	   this.Loading(this.Vloader);
	   this.SetParams(StoragePath,dbPath,Videos[i].thumbnail,i+"thumbnail","video",storageRef);
	 this.storeInputData(this.task,this.storagePath,this.dbpath,this.af,this.Vloader[i+1]);
	   
	 }
	

	for (let d=0; d<Images.length; d++){
	 
		
		this.Loading(this.Iloader);
		 this.SetParams(StoragePath,dbPath,Images[d],d,"image",storageRef);
		 this.storeInputData(this.task,this.storagePath,this.dbpath,this.af,this.Iloader[d]);
	   
	
	 
	 }
      

     i++;
	 
	 
	 return i;
	 
	 
	 
	 
 }
 
//Uploads to firebase storage
	storeInputData(task,StoragePath,dbPath,af,loader){  
   
	
	 return new Promise (function (resolve,reject){
		
		  loader.present();

	 
	 task.on('state_changed',
            function progress(snapshot){
                var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
				console.log(percentage,"%  completed ");
                 
				  if  (dbPath.includes("thumbnail") == false){
			
				 this.obj=af.object(dbPath);
                this.obj.set(StoragePath);
				  }
			 
            },
            function error(err){
               console.log("error is:",err);
            },
            function complete(){
			
				 loader.dismiss();
				
					 
            }
        );
	 
	 
	 
	 
	 
	 });
	 

	 
 }

 
 
 
 
	 
	 
	 
	 SetParams(StoragePath,dbPath,file,count,type,storageRef){ //set the appropriate path for firebase
		 
	
		        this.dbpath=dbPath+"/Data/"+type+"Input"+count;
	            this.storagePath=StoragePath+"/"+type+"Input"+count;
                this.dataRef = storageRef.child(this.storagePath);
	            this.task=this.dataRef.putString(file,'data_url');
		  
		
	 }
 
 	 SetResponseParams(StoragePath,dbPath,file,count,type,storageRef){ //set the response parameters for firebase
		 
	
		        this.dbpath=dbPath+"/"+type+"Input"+count;
	            this.storagePath=StoragePath+"/"+type+"Input"+count;
                this.dataRef = storageRef.child(this.storagePath);
	            this.task=this.dataRef.putString(file,'data_url');
		  
		
	 }
 
 
  
  
Loading(loader) { //puts a loader to the screen
    loader.push(this.loadingCtrl.create({
      content: "Please wait...",
   
    }) 
	 )
   
	

  }


}
