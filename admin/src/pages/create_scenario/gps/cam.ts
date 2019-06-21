import { Component,ViewChild ,ElementRef,AfterViewInit,OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';

@Component({
  selector: 'page-cam',
  templateUrl: 'gps.html'
})



 export class CamPage  {


  constructor(private file: File,private mediaCapture: MediaCapture ) {

	 
	  
  }


 Cam(){ //Start the camera application and return information about captured image files


let options: CaptureImageOptions = { limit: 1};
 return this.mediaCapture.captureImage(options)
  .then(
    function(data: MediaFile[]) { 
	
 console.log("Success")

	return data;
	},(err: CaptureError) => {
		console.error("capture error",err);
		return false;
	});



 }
 
 
 dataUrl(DirPath,Name){ //Reads file as Data url
	 
	 

		
	return  this.file.readAsDataURL(DirPath,Name).then(function (FileEntry ) {
	  
	   console.log("Success");
             return FileEntry;

      },function (error) {
         console.log("FileEntry error",error);
      });  
	 
	 
	 
	 
 }

  ThumbdataUrl(result,thumbName){//Reads file as Data url
	 
	 
	 

	            var Path="file://"+result;
			
              var thumbPath = Path.replace(thumbName+".jpg", ""); 
               
		        
	return  this.file.readAsDataURL(thumbPath,thumbName+".jpg").then(function (FileEntry) {
            console.log("Success");

             return FileEntry;

      },function (error) {
         console.log("error",error);
      });  
	 
	 
	 
	 
 }

}
