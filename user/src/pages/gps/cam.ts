import { Component,ViewChild ,ElementRef,AfterViewInit,OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { VideoEditor } from '@ionic-native/video-editor';
@Component({
  selector: 'page-cam'
})



 export class CamPage  {


  constructor(private file: File,private mediaCapture: MediaCapture ) {

	 
	  
  }


 Cam(){ //opens camera  





let options: CaptureImageOptions = { limit: 1};
 return this.mediaCapture.captureImage(options)
  .then(
    function(data: MediaFile[]) { 
	

	
	
	
      
	return data;
	},(err: CaptureError) => {
		console.error(" CaptureError error",err);
		return false;
	});



 }
 
 //Read file and return data as a base64 encoded data url
 dataUrl(DirPath,Name){
	 

	return  this.file.readAsDataURL(DirPath,Name).then(function (FileEntry) {
           

             return FileEntry;

      },function (error) {
         console.log(" FileEntry error",error);
      });  
	 
	 
	 
	 
 }

 
  ThumbdataUrl(result,thumbName){ 

	            var Path="file://"+result;
			
              var thumbPath = Path.replace(thumbName+".jpg", ""); 
           
		        
	return  this.file.readAsDataURL(thumbPath,thumbName+".jpg").then(function (FileEntry) {
          

             return FileEntry;

      },function (error) {
         console.log("error",error);
      });  
	 
	 
	 
	 
 }

}
