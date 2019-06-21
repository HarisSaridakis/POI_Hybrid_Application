import { Component,ViewChild,ElementRef } from '@angular/core';
import { NavController, NavParams,Content,ModalController,ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { VideoEditor } from '@ionic-native/video-editor';
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import {FinderPage} from './finder';
import { File } from '@ionic-native/file';
import { BeaconPage } from './beacon';
import {GeoPage} from '../geographically/geo';
import {ChronPage} from '../chronologically/chron';
import { AlreadyVisitedPage } from '../visited/AlreadyVisited';

import { CamPage } from '../../gps/cam';
import { VidPage } from '../../gps/vid';
import { ResponsePage } from '../response/response';
import {StringManipulationPage} from '../../StringManipulation/string_manipulation';
import { ModalPopPage } from '../modal/modalpop';

import { BackgroundMode } from '@ionic-native/background-mode';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import {FirePage} from '../../gps/fire';
import {
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 MarkerOptions,
 Marker
 
} from '@ionic-native/google-maps';
import { BLE } from '@ionic-native/ble';




declare var google;
@Component({
  selector: 'page-opencam',
    templateUrl: 'start.html'
})


export class OpenCamPage {
	@ViewChild(Content) content: Content;
    public Images=[];
	public Videos=[];
	public Audio=[];
	public id;
    public InumArray=[];
	public MapCords=[];
	public visited: boolean;

  constructor(private filePath: FilePath,private fileChooser: FileChooser,public navParams: NavParams,private videoEditor: VideoEditor,private mediaCapture: MediaCapture,private file: File,public modalCtrl: ModalController /*public af: AngularFireDatabase*/) {

  }

    ngOnInit(){

	}


 

  
 
OpenCam(){ //Opens the device camera for capturing a photograph
	
            
				
       return new CamPage(this.file,this.mediaCapture).Cam().then(imgData =>
		   { 
		   
                        
						
						
						var CameraDataInfo= new StringManipulationPage().CameraData(imgData);
			
		   
		   
				return new CamPage(this.file,this.mediaCapture).dataUrl(CameraDataInfo.DirPath,CameraDataInfo.Name).then(FileEntry =>
		        {
					
		          this.Images.push(FileEntry); 
		         return  FileEntry;
			
		     
				  })
         
		   })
		
 }
 
 
     //Capture  video and reads it as data url
  OpenVid(){
       
	  
				   
     return   new VidPage(this.mediaCapture,this.videoEditor).Vid().then(VidData =>
		   { 
	
	         	  
						
						     var vidUri =VidData[0].fullPath;
		 var thumbName = VidData[0].name.substring(0,VidData[0].name.length-4);
	return this.MakeVideoThumnail(vidUri,thumbName).then(thumbnail =>{ 
	       
			

			   var CameraDataInfo= new StringManipulationPage().CameraData(VidData);
			
	return	new CamPage(this.file,this.mediaCapture).dataUrl(CameraDataInfo.DirPath,CameraDataInfo.Name).then(FileEntry =>
		        {
			
			var tmp ={ video : FileEntry,
						       thumbnail : thumbnail
						
						
					};
			 this.Videos.push(tmp);
			 	
			 return tmp;
		
	
	     })
	 })

		   })
 }		   
	  

		   //Adds a play icon in video thumbnail
		   MakeVideoThumnail(vidUri,thumbName){
			   

			   
			   return  new VidPage(this.mediaCapture,this.videoEditor).VideoThumbnail(vidUri,thumbName).then(result=>{
			
			
			
			
			
				return   new CamPage(this.file,this.mediaCapture).ThumbdataUrl(result,thumbName).then(FileEntry =>
		        {
			         
						
						 return this.AddPlayIcon(FileEntry).then(thumbnail => { 
						
						         return thumbnail;
						
						
						})
						
						
				})
			
		})
			   
			   
		   }
		   
		   
		    AddPlayIcon(thumbnail){ //Adds a play icon to thumbnail with use of canvas
	 
	return new Promise(resolve =>{
	
		  var c = (<HTMLCanvasElement>document.createElement("canvas"));
  var ctx = c.getContext("2d");
   c.width = 128;
  c.height = 128;
  var imageObj2 = new Image();
  var imageObj1 = new Image();
		  imageObj1.src = thumbnail; 

	imageObj2.src = "file:///android_asset/www/icon.png";
 imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0, 128, 128);

   imageObj2.onload = function() {
      ctx.drawImage(imageObj2, 39, 39, 50, 50, );
      var image = c.toDataURL("image/jpeg");
  
	    resolve(image);
	   
   }
  }
	})
	
	
	
}
		   
		   
		   
		      Open(){ //Opens the filesystem
	   
	 return  this.fileChooser.open()
  .then(uri =>{ console.log(uri);
   
return this.filePath.resolveNativePath(uri).then(filePath => {

 
  return filePath;


	 
  })
  },
(e) =>{ console.log(e);
})


	   
   }


 
 


 

  
}
