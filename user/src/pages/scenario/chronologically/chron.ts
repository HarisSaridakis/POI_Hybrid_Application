import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';
import {
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 MarkerOptions,
 Marker
 

 
} from '@ionic-native/google-maps';
import { BeaconPage } from '../starter/beacon';
import {AngularFireDatabase} from 'angularfire2/database';


import { BLE } from '@ionic-native/ble';
declare var google;
@Component({
  selector: 'page-chron'
  
})


export class ChronPage {
	
	constructor(public navCtrl: NavController, public navParams: NavParams,public af: AngularFireDatabase,private ble: BLE) {
	}
	
	
	
	LowestNum(MapCords){
		
		
		MapCords.sort(function(a, b) {
          return a.Inum - b.Inum});

	
		
	}
	
	
	
		LowNum(InumArray){
		
	
		
		InumArray.sort(function(a, b){return a-b});
		
	
		
		

		
		
	}
	

	// Starts chronoligicall scenario
	startchron(accuracy,InumArray,CordsArray,Currentlatlng,visitedInfo,devices,BIDs){
			for (let cord of CordsArray){ //lopps through cordinates array
			
		
			var data=this.Nearest(accuracy,InumArray,cord,Currentlatlng,visitedInfo,devices,BIDs);
			if( data != undefined){
		
			     return data; 
				
			}
		
		
	}
	
	}
	
	 Nearest(accuracy,InumArray,cord,Currentlatlng,visitedInfo,devices,BIDs){ //Searches if the current coordinates matches with any of POIs

	 var data;
  
	 if(accuracy == undefined){
		 
		 accuracy=6;
		 
		 
	 }
	 
	 var Clat=Currentlatlng.lat().toString().substr(0,accuracy);
	  
	 var Clng= Currentlatlng.lng().toString().substr(0,accuracy);
	  
 

		
		  var lat=cord.val().Lat.toString().substr(0,accuracy);
		  var lng=cord.val().Long.toString().substr(0,accuracy);
				
					var latlng = new google.maps.LatLng(cord.val().Lat,cord.val().Long);
					
					  if(InumArray[0]==cord.val().Inum)
						   if( Clat == lat)
						  if( Clng == lng)
		
		  if(cord.key.substr(0,6) == "Marker"){ //check if it is a map marker 
						var value=this.CheckExistence(cord.key,visitedInfo);
					     
						if(value == "-1"){
					
                        this.MakeData(InumArray,visitedInfo,cord,latlng);
							var data=cord.val().Data;
							 
						        return data;        
						}
						  }
			else{        //check if it is a beacon 			  
                     
					
						 for (let device of devices){ 
					
		  if(visitedInfo.indexOf(device.id) === -1 || visitedInfo ==  undefined) //check if poi is already visited
	           if(cord.key == device.id)  
						
					{
						
						this.MakeData(InumArray,visitedInfo,cord,latlng);
					
					 BIDs.push(cord.key);
					var data=cord.val().Data;
					     
			               return data;   
            					
					}
						} 
						
						
			  }
          
 }   
 
 //Returns the data submited from the admin to the POI
 MakeData(InumArray,visitedInfo,cord,latlng){
	 
	 InumArray.shift(); 
						
					
		           
					  var temp ={ latlng : latlng,
					                    visited: cord.key
										};
					 visitedInfo.push(temp);
	 
	 
	 
	 
	 
 }
 
 
	
	
	

	

	
	CheckExistence(key,visitedInfo){ //Returns -1 if POI is already visited
	 var val="-1";
	          for (let visit of visitedInfo) {
						if(visit.visited == key)
						     val=key;
                             
						}
	
	return val;
	
}
	
	
}