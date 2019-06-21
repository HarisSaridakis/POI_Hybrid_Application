import { Component ,ElementRef,ViewChild,Renderer } from '@angular/core';
import { NavController, NavParams, ModalController,ViewController,LoadingController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { HomePage } from '../home/home';
import { CamPage } from '../create_scenario/gps/cam';
import { VidPage } from '../create_scenario/gps/vid';
import { VideoEditor } from '@ionic-native/video-editor';
import { StringManipulationPage } from '../create_scenario/StringManipulation/string_manipulation';
import {AngularFireDatabase} from 'angularfire2/database';
import {ReplacementPage} from '../home/replacement';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Events } from 'ionic-angular';
@Component({
  selector: 'page-ModalPop',
  templateUrl: 'modalpop.html',
})
export class ModalPopPage{
	
	@ViewChild('canvas') canvasEl : ElementRef;
	
public visited;	
public image;
public video;
public type;
public check;
public GamePath;
public key;
public MarkerName;
public name;
public thumbnail;
public res;
public vid;
public lat;
public longt;
Icords={lat:'',longt:''};
  constructor(private videoEditor: VideoEditor,private mediaCapture: MediaCapture,private filePath: FilePath,private file: File,private fileChooser: FileChooser,public events: Events,public loadingCtrl: LoadingController,public af: AngularFireDatabase,public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController ) {
	  
	  
  }
  



ngOnInit(){
	
	
	
	
	this.type=this.navParams.get('Type');
	this.GamePath=this.navParams.get('GamePath');
	this.key=this.navParams.get('Key');
	this.MarkerName=this.navParams.get('MarkerName');
	this.name=this.navParams.get('Name');
	this.visited=this.navParams.get('visited');
	var CordsArray=this.navParams.get('CordsArray');
	
	if( this.type=="cords"){
		
		
		this.FindCords(CordsArray)
		
		
	}
	
	
	if( this.type=="Image"){
	  this.image= this.navParams.get('Blob');
	  
	}
    if( this.type=="Video"){
		this.video= this.navParams.get('Blob');
	
	     
		
	 }
	 
	
}



FindCords(CordsArray){ //If the current marker is the same with one retrieved from firebase
					   //assigns latitude and longtitude to public variables
	
	   for( let cord of CordsArray){
		     if(cord.key == this.MarkerName){
				 this.lat=cord.val().Lat;
				 this.longt=cord.val().Long;
				 
				
				
			 
			 }
		   
	   }

}

SubmitCordinates(){ //Replace cordinates
	
	new ReplacementPage(this.af,this.loadingCtrl).ReplaceCordinates(this.MarkerName,this.GamePath,this.Icords.lat,this.Icords.longt);
	
	
}

Open(){ //Opens file system 
	
	
	 this.fileChooser.open()
  .then(uri =>{ console.log(uri);
   
this.filePath.resolveNativePath(uri).then((filePath)=> {




var DataInfo= new StringManipulationPage().CheckType(filePath);

if(DataInfo.Type.toLowerCase()== "mp4"){



	 
				
		  this.MakeVideoThumnail(filePath,DataInfo.Name).then(thumbnail =>{ 
	      
				this.AddPlayIcon(thumbnail).then(img => {
		
		
  
           new ReplacementPage(this.af,this.loadingCtrl).ReplaceData(img,this.name+"thumbnail",this.GamePath,this.MarkerName,this.key);
          this.res=true;
	
			new CamPage(this.file,this.mediaCapture).dataUrl(DataInfo.DirPath,DataInfo.Name+".mp4").then(FileEntry =>
		        {
			  
		 
			   new ReplacementPage(this.af,this.loadingCtrl).ReplaceData(FileEntry,this.name,this.GamePath,this.MarkerName,this.key);
		
			
			
			})
			
			
		})
				
})
				
				
				}
				
				if(DataInfo.Type.toLowerCase()== "jpg"){ 
				
				
				
				
			
				
					new CamPage(this.file,this.mediaCapture).dataUrl(DataInfo.DirPath,DataInfo.Name+".jpg").then(FileEntry =>
		        {
			
		 
			   new ReplacementPage(this.af,this.loadingCtrl).ReplaceData(FileEntry,this.name,this.GamePath,this.MarkerName,this.key);
		     this.res=true;
			
			
			})
				
				
				}
				
				



})

  })
	
	
	
	
}







   MakeVideoThumnail(vidUri,thumbName){ //Makes a thumbnail for a given video
			   

			   
			   return  new VidPage(this.mediaCapture,this.videoEditor).VideoThumbnail(vidUri,thumbName).then(result=>{
			
			
			
			
			
				return   new CamPage(this.file,this.mediaCapture).ThumbdataUrl(result,thumbName).then(FileEntry =>
		        {
			           
						return FileEntry;
				})
			
		})
			   
			   
		   }




AddPlayIcon(thumbnail){  //Adds play icon to thumbnail
	 
	return new Promise(resolve =>{
		
		  var c = (<HTMLCanvasElement>document.createElement("canvas"));
 c.width = 128;
  c.height = 128;
  var ctx = c.getContext("2d");
  var imageObj2 = new Image();
  var imageObj1 = new Image();
		  imageObj1.src = thumbnail; 
		
	imageObj2.src = "file:///android_asset/www/icon.png";
 imageObj1.onload = function() {
   ctx.drawImage(imageObj1, 0, 0, 128, 128);

   imageObj2.onload = function() {
      ctx.drawImage(imageObj2, 39, 39, 50, 50 );
      var image = c.toDataURL("image/jpeg");
   
	    resolve(image);
	   
   }
  }
	})
	
	
	
}
	


  dismiss() { //Dismiss the current viewController
	  
    this.viewCtrl.dismiss(this.res);
  }
}
