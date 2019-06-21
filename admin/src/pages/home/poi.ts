import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController,ViewController,Content,NavParams, AlertController,ModalController,LoadingController  } from 'ionic-angular';
import {FinderPage} from './finder';
import { ResponsePage } from '../response/response';
import {ReplacementPage} from './replacement';
import {TabsPage} from '../tabs/tabs';
import {AngularFireDatabase} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import {ModalPopPage} from '../modal/modalpop';
import {RootPage} from '../start/Root';
import * as MarkerClusterer from 'node-js-marker-clusterer';
import { Events } from 'ionic-angular';
import * as firebase from 'firebase';
import {
 GoogleMaps,
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 CameraPosition,
 MarkerOptions,
 Marker
} from '@ionic-native/google-maps';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
declare var google;
@Component({
  selector: 'page-poi',
  templateUrl: 'poi.html'
})

export class PoiPage {
	@ViewChild('map') mapElement: ElementRef;
	@ViewChild(Content) content: Content;

 public  map: any; 
  public  snaps; 
  public Vdata=[];
  public Rdata=[];
  public Names=[];
  public formData=[];
 public VideoUrls=[];
 public blobs=[]; 
 public GameName;
 public BeaconPoi;
public GamePath;
public Accuracy;
public Scenario;
public ScenarioType;
public markers=[];
public CordsArray =[];
public onMap =[];
public nums=[];
public loader=[];
public Vloader=[];
public key;
public type;
public check;
public MarkerName;
Rtext={Data1:'',Data2:''};
public InumsArray=[];
public Clatlng;
public Rights=[];
public root;
private ngUnsubscribe: Subject<void> = new Subject<void>();
  constructor(public events: Events,public navCtrl: NavController,public modalCtrl: ModalController,public navParams: NavParams,public afAuth: AngularFireAuth,public af: AngularFireDatabase,public loadingCtrl: LoadingController,private alertCtrl: AlertController) {

	
  }
  
 
 

    ngOnInit(){
		
		this.root=new RootPage().DBroot();
this.onMap =  this.navParams.get('onMap');
this.ngUnsubscribe=this.navParams.get('Names');
this.CordsArray=this.navParams.get('cordsArray');
this.GamePath=this.navParams.get('GamePath');
this.key=this.navParams.get('key');
	
this.BeaconPoi=this.navParams.get('BeaconPoi');	 

 this.GetInums();
  this.loadMap(this.onMap,this.BeaconPoi); 
   this.GetAccuracy(this.root+this.key)
  this.GetScenarioType(this.root+this.key)
  
	
	


	}
	
		   GetScenarioType(GPath){ //Retrieves scenario path

          new FinderPage(this.events,this.af).RetrieveOnce(GPath+"/ScenarioType").then(type =>{
			
		   this.Scenario=type;
	
		  
		  })

	}
	

	   GetAccuracy(GPath){//Retrieves accuracy of coordinates path

          new FinderPage(this.events,this.af).RetrieveOnce(GPath+"/Accuracy").then(type =>{
			
		   this.Accuracy=type;
	
		
		  
		  })
		  
		  

		
	}
	
		numConflict() { //Message if there is a dublicate increment number
  let alert = this.alertCtrl.create({
    title: 'Warning',
    subTitle: 'There are two numbers with the same value',
    buttons: ['Ok']
  });
  alert.present();
}
	
	
	GetInums( ){ //Retrieve increment numbers of POIs
		
		
		
			for (let cords of this.CordsArray)
	 {
		 
		 
		 if(cords.key.substr(0,6) != "Marker")
			  this.Names.push(cords.key);

		     
		
					var InumObj :object={ Inum : cords.val().Inum,
					    MarkerName: cords.key
							};
				  this.nums.push(InumObj);

		
	}
		
		

		
	}
	

	 loadMap(onMap,BeaconPoi){ //Loads map onscreen
	
	 var Bimg="https://png.icons8.com/online-filled/ios7/32";

	  let options = {timeout: 10000, enableHighAccuracy: true};

	if(onMap.length ==0){
			
				let mapOptions = {
			center: BeaconPoi[0].latlng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,

		}
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
		}else{
		
			
				let mapOptions = {
			center: onMap[0].latlng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,

		}
			 this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}

 
for (let Bpoi of BeaconPoi){

	
		var marker=new google.maps.Marker({});
		
	     marker.setPosition(Bpoi.latlng);
		 marker.setMap(this.map);
           marker.setIcon(Bimg);
		 }
	

	 
	 	 	var map=this.map;
			  let markers = this.onMap.map((visit,i) => {
                return new google.maps.Marker({
                    position: visit.latlng,
                  label: i.toString()
                });
            });
			
			 	
		

    
		 
		 
			
              var i=0;
            for (let visit of onMap){
			markers[i].addListener('dblclick',() => this.ChangeCordinates(visit.visited));
			 i++;
		   }	
	
	
	var markerCluster = new MarkerClusterer(this.map, markers,
          {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
	

  }

	
	 ChangeCordinates(MarkerName){ //Opens a modal for changing coordinates of a POI
	
     
	   var blob;
	   var type="cords";
	   let profileModal = this.modalCtrl.create(ModalPopPage, {
                                                            Type: type, 
 														 
															GamePath: this.GamePath,
															
															MarkerName   :   MarkerName,
															CordsArray:  this.CordsArray,
															
															  });

   
   profileModal.present();
	   


  }
  

  

	  
	
	
	  IncreasingNumber(){ //check if there is a conflict from duplicate values after change the increasing number value
						  //if it is does not make the change


 var i;
	  

 loop1:	  
	  for(let CheckNum of this.nums){
		     CheckNum=CheckNum.Inum;
		    
			   
		  for(let num of this.nums){
			  num=num.Inum;
			
		     if(CheckNum == num){ 
	              i++;
			  if(i>1){
				  
				
				   this.numConflict();
				  i="not";
			  break loop1;
			  }
			   }
		  }
		 
			i=0;  
	  }
	
	 
	  if(i != "not"){
	
	
	    
	 new ReplacementPage(this.af,this.loadingCtrl).ReplaceInum(this.nums,this.GamePath,this.CordsArray); 
	 }
	 else{
		 this.nums=[];
	      this.Names=[];
		  this.GetInums();
	 }
	  }
	  
	  
	  
	 
	  
	  
	  
	  
	  



  }