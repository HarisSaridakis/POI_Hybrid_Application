import { Component,ViewChild ,ElementRef,AfterViewInit,OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { File } from '@ionic-native/file';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { VideoEditor } from '@ionic-native/video-editor';

@Component({
  selector: 'page-cam',
  templateUrl: 'gps.html'
})


 export class VidPage  {


  constructor(private mediaCapture: MediaCapture,private videoEditor: VideoEditor) {

	 
	  
  }


 
Vid(){// Opens device camera for capturing video



 
let options: CaptureImageOptions = { limit: 1};
 return this.mediaCapture.captureVideo(options)
  .then(
    function(data: MediaFile[]) { 
	
	
	
	
	
	


	return data;
	},(err: CaptureError) => {
		console.error("error",err);
		return false;
	});
	

 }
 
 VideoThumbnail(vidUri,thumbName){ //Creates a thumbnail from the video  
                                   //gets as argument the uri of video and the name of generated thumbnail
	    

	return  this.videoEditor.createThumbnail({fileUri:vidUri,outputFileName: thumbName, width: 128, height: 128}).then(
	(result) => {
		console.log('Success');
	    return result;
    },(error: any) =>{
     console.log('error', error)
 
 });
	 
	 
	 
 }

}
