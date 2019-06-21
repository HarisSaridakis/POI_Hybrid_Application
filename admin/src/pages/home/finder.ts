import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import 'rxjs/add/operator/takeUntil';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';
import { Events } from 'ionic-angular';
import {RootPage} from '../start/Root'
declare var google;
@Component({
  selector: 'page-finder',
  templateUrl: 'finder.html'
})
export class FinderPage {
 	obj:  FirebaseObjectObservable<any>;
    lst: FirebaseListObservable <any>;
	private ngUnsubscribe: Subject<void> = new Subject<void>();
    public blob;
	public GamePath;
    public keys=[];
	public Cords=[];
    public list;
	public root;
  constructor(public events: Events,public af: AngularFireDatabase) {
  
      this.root=new RootPage().DBroot();
		}


	    
		
	
	
	   
	   RetrieveKey(path){ // Retrieves keys from firebase

    this.lst = this.af.list(path,{ preserveSnapshot: true });
				        
  return	  this.lst.map(snapshots => {
             
			     snapshots.forEach(snapshot => {
   
	    
	
	            this.keys.push(snapshot.key);
				
		 
    });
	  return this.keys;
           
				})
				
  } //end of Retrieve function 
  
   RetrieveSnapshot(path){ //Retrieves an entire snapshot

   this.lst = this.af.list(path,{ preserveSnapshot: true });
			         
  return	  this.lst.map(snapshots => {
             
			
		

		
	   return snapshots;
           
				})
				
  } 
  
  		RetrieveOnce(GPath){ //Retrieves  snapshot values
							 //gets as argument the path of the snapshot in firebase
				
			return  firebase.database().ref(GPath).once('value').then((snapshot)=> {
				
  var type = snapshot.val();

	  return type;
	  

});	


		
		   }
		   
  RetrievePath(path,key,GameName){ // Retrieve path of certain scenario 
								   //gets as argument the path of the snapshot tha name of scenario and its ID
	  
	  			 
	  this.lst = this.af.list(path+key+"/GameName", { preserveSnapshot: true });
	  
   return this.lst.map(snapshots => {
               path=path+key;
			      snapshots.forEach(snapshot => {
    
	          
	    	 if (snapshot.key == GameName){
			      this.GamePath=path;
			
			   
		   }
		   else{
			   path=this.root;
		   }
	  
});
    return this.GamePath;
	})
	  
 
  } // end of RetrievePath
  
  

  
  
  
  
  
  
  
  
  RetrivePosition(GamePath){ //Retrieves scenario snapshot
	                         
		
	  this.list = this.af.list(GamePath, { preserveSnapshot: true });
   return  this.list.map(snapshots => {
	   
           
        
    return snapshots;
	})
	  
		 
	  
	  
  }
  
  
   Nearest(CordsArray,Currentlatlng,visited){ //If the current location is the same with a POIs location
											  //returns the data of it
	 
 	for (let cord of CordsArray){
					
					var latlng = new google.maps.LatLng(cord.val().Lat,cord.val().Long);
					
					if(visited.length == 0)
					  if( Currentlatlng.equals(latlng))
					   {
					
						var data=cord.val().Data;
		             
		               visited.push(cord.key);			
					    }
					
					
					for (let visit of visited) {
						if(visit == cord.key){
						

						}
						else
					if( Currentlatlng.equals(latlng))
					{
						
						var data=cord.val().Data;
		            
		               visited.push(cord.key);
			
            					
					}
						
					}
					
				}
					
 	 	  
        return data;        
 }
  
  GetVidData(data,key){ // Retrieves video from firebase storage 
	 
 var Tkey=data[key].toString()+"thumbnail";
			   
	    var storageRef = firebase.storage().ref();
	 return  storageRef.child(data[key]).getDownloadURL().then(function(url) {
		      
         return storageRef.child(Tkey).getDownloadURL().then(function(Turl){
  var urlobj :object={ url: url,
                       thumbnail: Turl,
					    key: key
							};
 
  
  return urlobj;
	
});
});
 
	 
	
  }
   
     GetData(data,key){ // Retrieves data from firebase storage 
	 
  var autoplay ;
	    var storageRef = firebase.storage().ref();
	 return  storageRef.child(data[key]).getDownloadURL().then(function(url) {
		   if (key.includes("Aplay") != false) //Aplay stand  for audio Autoplay
			   autoplay=true;
		   else
			    autoplay=false;
  var urlobj :object={ url : url,
                        autoplay: autoplay,
					    key: key
							};
 
 
  return urlobj;
	

});
 
	 
	
  }
  
     GetUserData(data,key){ // Retrieves user data from firebase storage
	

	    var storageRef = firebase.storage().ref();
	 return  storageRef.child(data ).getDownloadURL().then(function(url) {
		  
  var urlobj :object={ url : url,
                 
					    key: key
							};
 

  return urlobj;
	

});
 
	 
	
  }
  
    ReplaceInum(Inums,GamePath,CordsArray){ //Change the increment number of a POI
	  var InumA=[];
	    for(let Inum of Inums){
			
			InumA.push(Inum.Inum);
			
			
			
		}
	           
	    
		 var GamePath2=GamePath;
		  
		   for( let cord of CordsArray){
			    GamePath=GamePath+"/"+cord.key;
	       
				
	    var obj=this.af.object(GamePath+"/Inum");
                obj.set( InumA[0]);
				
				 InumA.shift();
				GamePath=GamePath2;
			 
		   }
	 
  }
  
  
  


	
}
