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
  selector: 'page-ShowImage',
  templateUrl: 'ShowImage.html',
})
export class ShowImagePage{
	
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
	

	
	
	if( this.type=="Image"){ //Check for the type of data
	  this.image= this.navParams.get('Blob');
	  this.check=true;
	}
    if( this.type=="Video"){
		this.video= this.navParams.get('Blob');
	
	      this.check=false;
		
	 }
	 
	
}

















	


  dismiss() { //Dismiss the current viewController
    this.viewCtrl.dismiss();
  }
}
