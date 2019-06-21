import { Component,Provider } from '@angular/core';
import { NavController, NavParams, ModalController,ViewController,App } from 'ionic-angular';
import { StartPage } from '../starter/start';
import {CheckPage} from '../../home/check';
import { MenuPage } from '../../home/menu';
import { FilePath } from '@ionic-native/file-path';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { CamPage } from '../../gps/cam';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import {StringManipulationPage} from '../../StringManipulation/string_manipulation';
import { NativeStorage } from '@ionic-native/native-storage';
import { Media, MediaObject } from '@ionic-native/media';
import { Geolocation } from '@ionic-native/geolocation';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage{
public image;
public video;
public type;
public sound: MediaObject;
public  myTracks: any[];
public  allTracks: any[];
   constructor( public navParams: NavParams,private geolocation: Geolocation,public appCtrl: App,public navCtrl: NavController,private media: Media,private nativeStorage: NativeStorage,private mediaCapture: MediaCapture,private file: File,private fileChooser: FileChooser,private filePath: FilePath,public viewCtrl: ViewController) {
	   


			   
	   
   }

   
  


   
   
   
   	      Open(){ //Opens filesystem
			  
	 this.nativeStorage.clear()
  .then(
    () => console.log("cleared"),
    error => console.error('Error clearing', error)
  );

	 this.fileChooser.open()
  .then(uri =>{ console.log(uri);
	
 this.filePath.resolveNativePath(uri).then(filePath => {



  
  
		 this.nativeStorage.setItem('ring', filePath)
  .then(
    () => console.log('Success!'),
    error => console.error('Error storing item', error)
  );
  

  
  

	
	
		}, error => console.error('Error resolveing Url ', error) );
	

 
  },
(e) =>{ console.log(e);
})


	   
   }
   
exit(){ //exists and sets CheckPage as root page 
	
	  var geo = this.navParams.get('geo'); 
	   geo.unsubscribe();
	  var index = this.navCtrl.getActive().index;

  this.navCtrl.remove(0, index);


	
	this.navCtrl.setRoot(CheckPage);
	
	
}

  close() {
	   
    this.viewCtrl.dismiss();
  }
}
