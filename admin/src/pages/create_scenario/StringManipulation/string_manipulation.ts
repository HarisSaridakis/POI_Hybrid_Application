import { Component,ViewChild ,ElementRef,AfterViewInit,OnInit} from '@angular/core';



@Component({
  selector: 'page-string_manipulation'

})


 export class StringManipulationPage  {


  constructor() {

	 
	  
  }
  
  CheckForSpace(input){ //Replace spaces 
	  
	   
	    
	   return input.replace(/ /g,'');
	 
  }

   CheckType(filePath){ // Substrings path of file and returns type, name and path of file
	   
	    var a = filePath.lastIndexOf("/");
		var b = filePath.lastIndexOf(".");
	  
        var type = filePath.substring(filePath.length,b+1);
	  
	   
	   
        var name = filePath.substring(a+1,b);
       var DirPath = filePath.replace(name+"."+type, ""); 
	 
	   
	   var DataInfo={ Type : type,
		         Name: name,
		         DirPath : DirPath
		   
	             }
	   
	   
	   return DataInfo;
	   
   }
 
   CameraData(CamData){ //Substrings path of file and returns name and path of file
	   
	   
	    var name = CamData[0].name; 
	            var path=CamData[0].fullPath;
				
               var DirPath = path.replace(name, ""); 
			   
			   var CameraDataInfo={ Name: name,
				                   DirPath: DirPath
			                      }
	   
	     return CameraDataInfo;
	   
   }

}
