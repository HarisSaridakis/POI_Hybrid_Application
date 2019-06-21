import { Component,ViewChild ,ElementRef,AfterViewInit,OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { File } from '@ionic-native/file';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { VideoEditor } from '@ionic-native/video-editor';

@Component({
  selector: 'page-string_manipulation'

})


 export class StringManipulationPage  {


  constructor() {

	 
	  
  }

   CheckType(filePath){ //Manipulate string and extracts the name,type and path of it
	   
	   
	    var TypeExtraction = filePath.lastIndexOf(".");
        var type = filePath.substring(filePath.length,TypeExtraction+1);
	   console.log("type is :",type);
	   
	    var a = filePath.lastIndexOf("/");
		var b = filePath.lastIndexOf(".");
        var name = filePath.substring(a+1,b);
       var DirPath = filePath.replace(name+"."+type, ""); 
	   console.log("name is:",name);
	   console.log("DirPath is:",DirPath);
	   
	   var DataInfo={ Type : type,
		         Name: name,
		         DirPath : DirPath
		   
	             }
	   
	   
	   return DataInfo;
	   
   }
 
   CameraData(CamData){ //Returns the name of photo/video and the path of it
	   
	   
	    var name = CamData[0].name; 
	            var path=CamData[0].fullPath;
				console.log("Path",path);
               var DirPath = path.replace(name, ""); 
			   
			   var CameraDataInfo={ Name: name,
				                   DirPath: DirPath
			                      }
	   
	     return CameraDataInfo;
	   
   }

}
