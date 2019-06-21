import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import {
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 MarkerOptions,
 Marker
 
} from '@ionic-native/google-maps';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';
import {RootPage} from '../../StringManipulation/Root'
declare var google;
@Component({
  selector: 'page-finder',
  templateUrl: '../chronologically/chron.html'
})
export class FinderPage {
 	obj:  FirebaseObjectObservable<any>;
    lst: FirebaseListObservable <any>;
	
    public blob;
	public GamePath;
    public keys=[];
	public Cords=[];
    public GameArray;
	public root;
  constructor(public af: AngularFireDatabase) {
	  
	  this.root=new RootPage().DBroot();
  
  }
  
  
  
//Finds and retrieves data from firebase database


	    	RetrieveUserPrivileges(uid){
			

	 return  firebase.database().ref( uid).once('value').then((snapshot)=> {
  var prvl = snapshot.val().UserType;
   
	if(prvl == "Creator")
  return  true;
 else 
	  return false;

});
			
			}
			
	
			
					RetrieveOnce(path){ //Retrieve snapshot from firebase once
				
			 return  firebase.database().ref(path).once('value').then((snapshot)=> {



	  return snapshot.val();

});	
				
			
			}
			
			 
				CheckForResponse(GPath){ //Retrieve snapshot from firebase once
				
			 return  firebase.database().ref(GPath).once('value').then((snapshot)=> {
		

            if(snapshot.val() != "True")
			  	return false;
			
	  return snapshot.val();

});	
				
			
			}
	
	   
	   RetrieveKey(path){ //Retrieves the keys of each snapshot

    this.lst = this.af.list(path,{ preserveSnapshot: true });
				        
  return	  this.lst.map(snapshots => {
                
			     snapshots.forEach(snapshot => {

	            this.keys.push(snapshot.key);
				
		 
    });
	  return this.keys;
           
				})
				
  } //end of Retrieve function
  
  
  RetrievePath(path,key,GameName){ //Retrieves the Path of scenario in firebase
	  
	  
	  			  
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
  
  
    RetrieveGameName(path,key){ // Retrieves the path of scenario  and the key of scenario in firebase 
	  
	  
	  		 var obj;	  
	  this.lst = this.af.list(path+key+"/GameName", { preserveSnapshot: true });
   return this.lst.map(snapshots => {
               path=path+key;
			      snapshots.forEach(snapshot => {
   
	          
	    	  
			   obj={ GameName: snapshot.key,
			            GamePath: path
			          }
             
		
	  
});
    return obj;
	})
	  
 
  }
  
  
  
  
  
  RetrivePosition(GamePath){ // Retrieves the snapshot of given path
	    
	  this.lst = this.af.list(GamePath, { preserveSnapshot: true });
   return  this.lst.map(snapshots => {
            

    return snapshots;
	})
	  
	 
	  
	  
  }
  
  
   Nearest(CordsArray,Currentlatlng,visited){ //  
	 
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

  GetData(data,key){//Gets the downlad url of given data
	  

	    var storageRef = firebase.storage().ref();
	 return  storageRef.child(data[key]).getDownloadURL().then(function(url) {
 
 
 
 

  return url;
	

});
 
	 
	
  }
   
    GetVidData(data,key){//Gets the video data as download url
	 
 var Tkey=data[key].toString()+"thumbnail";
			   
	    var storageRef = firebase.storage().ref();
	 return  storageRef.child(data[key]).getDownloadURL().then(function(url) {
		      
         return storageRef.child(Tkey).getDownloadURL().then(function(Turl){
  var urlobj :object={ url: url,
                       thumbnail: Turl,
				
							};
 

  return urlobj;
	
});
});
 
	 
	
  }

	
}
