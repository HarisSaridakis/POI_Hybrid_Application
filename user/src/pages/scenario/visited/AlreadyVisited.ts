import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, NavParams,App,Content,ModalController   } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import { BeaconPage } from '../starter/beacon';
import {FinderPage} from '../starter/finder';
import { ModalPopPage } from '../modal/modalpop';
import { StartPage } from '../starter/start';
import { BLE } from '@ionic-native/ble';
import * as MarkerClusterer from 'node-js-marker-clusterer';
import {
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 MarkerOptions,
 Marker
 
} from '@ionic-native/google-maps';

declare var google;
@Component({
  selector: 'page-AlreadyVisited',
  templateUrl: 'AlreadyVisited.html'
})
export class AlreadyVisitedPage {
	@ViewChild(Content) content: Content;
	public visitedInfo=0;
 public markers=[];
 public infowindow=[];
 public data;
 public IDs=[];
 public formData=[];
 public VideoUrls=[];
 public blobs=[];
 public CordsArray=[];
@ViewChild('map') mapElement: ElementRef;
 public  map: any;
  
 constructor( public modalCtrl: ModalController, public appCtrl: App,private geolocation: Geolocation,public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase,private ble: BLE) {

  }
  
  // Class finds and displays already visited POIs
  
     ngOnInit(){
		

 var visitedInfo: any = this.navParams.get('Name');
var CordsArray : any = this.navParams.get('CordsArray');
var GameType : any = this.navParams.get('GameType');
var MapCords : any = this.navParams.get('MapCords');
 this.CordsArray=CordsArray;

if( GameType == "Beacons"){
	
	 this.IDs=visitedInfo;

}
else{
	 this.visitedInfo=visitedInfo;
	 this.loadMap(visitedInfo);
   
}
	
		
	}
	
	
	
	// Load map on screen

	 loadMap(visitedInfo){ 
	

	  let options = {timeout: 10000, enableHighAccuracy: true};


  let mapOptions = {
      center: visitedInfo[0].latlng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
  
    }

   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	
	 
	

		 	var map=this.map;
			   let markers = visitedInfo.map((visit,i) => {
                return new google.maps.Marker({
                    position: visit.latlng,
                    label: i.toString()
					
                });
            });
			var i=0;
            for (let visit of visitedInfo){
			 markers[i].addListener('dblclick',() => this.FindData(visit.latlng,visit.visited,this.CordsArray));
			 i++;
		   }
	
	
	 var markerCluster = new MarkerClusterer(this.map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
       


 

 
          
		
	 }

 
     FindData(latlng,visited,CordsArray){
	    this.Top();
	 
	   
	   for( let cord of this.CordsArray){
		     if(cord.key == visited){
				 var data=cord.val().Data;
				
				this.DisplayFile(data);
			 }
		   
	   }
   }

   // Displays the POIs id
  IdDispalay(id){
	     for( let cord of this.CordsArray){
		     if(cord.key == id){
				 var data=cord.val().Data;
				
				this.DisplayFile(data);
			
			 }
	   }

  }


    DisplayFile(data){ //Puts files to appropriate arrays for displaying them  


	        this.formData=[];
		   this.VideoUrls=[];
		   this.blobs=[];
				
			for (var key in data) {
			
			   
			   
				
				 if(key.substr(0,1) == "G"){
					
					 this.formData.push(data[key]);
					 
				 }
				 
				 if(key.substr(0,1) != "G"){
				   if(key.substr(0,1) == "v"){
				
					 
			  new FinderPage(this.af).GetVidData(data,key).then(url =>
			  {
				 this.VideoUrls.push(url); 
			
		
	

		
			  })
	 }
		else {
			  if(key.substr(0,1) != "M"){
			
                  new FinderPage(this.af).GetData(data,key).then(urlobj =>
			  { 
			    
                      this.blobs.push(urlobj); 

			  } )
			 }
		}		
				   
				   
				   
	}
	


	}

               
				  
			 

	  }
Top(){
	
		
 this.content.resize();

	
}
 pressPhoto(blob,type){//Opens a modal on screen
	 
	
		
   let profileModal = this.modalCtrl.create(ModalPopPage, { Blob: blob,
                                                             Type: type       });
   
   profileModal.present();
  
 
 }

}