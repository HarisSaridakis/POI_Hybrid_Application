import { Component,ViewChild,Pipe } from '@angular/core';
import { NavController, NavParams,Content,ViewController  } from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable,FirebaseObjectObservable} from 'angularfire2/database';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms'
import {
 GoogleMap,
 GoogleMapsEvent,
 LatLng,
 MarkerOptions,
 Marker
 
} from '@ionic-native/google-maps';

import {GpsPage} from './gps';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { File } from '@ionic-native/file';
import { LoadingController } from 'ionic-angular';

declare var google;
@Component({
	
  selector: 'page-multiplechoice',
  templateUrl: 'multiplechoice.html'
})


export class MultipleChoicePage {
	





	public Name=[];
  public formcrt  : any;
  public Subformcrt  : any;  
 private myForm : FormGroup;
  private mySubForm : FormGroup;
    formData ={Data1:'',Data2:'',Data3:''};
   public Title;
  constructor(public viewCtrl: ViewController, public navParams: NavParams,private fb: FormBuilder) {
	  


  }

  ngOnInit(){ //Default field of form
	  
	  this.Name=this.navParams.get("Name"); //gets Parameters from previous page
	

	   

	
		
	
		this.myForm = this.fb.group({
        
		
            inputData: this.fb.array([
               
				this.fb.group({
        
			
        })
            ])
        });
	 this.formcrt = <FormArray>this.myForm.controls['inputData'];
	 
	    var temp=this.Name
		 this.Name=[];
	 for (let Name of temp){
	
		     this.addFields(Name);
  }
		   this.DataObject();
	
  }
  

	
	   addFields(Name) { //Adds an extra field to the form
	   
	   
			   if(!(Name.Title == undefined || Name.Title == "")){
               
			   this.Name.push(Name);
		this.formcrt.push(this.fb.group({}));
		 }
    }
	
   addData() { //Adds data to the form
	   
	
  this.DataObject();
  
		this.formcrt.push(this.fb.group({multiple: ['']}));
	
    }
	
	 removeData(i: number) {
       
         this.formcrt.removeAt(i);
    }

	
	
	
	  dismiss() { //Closes page
		
		   	   
	   
	
   this.viewCtrl.dismiss(this.Name);
 }
 
 DataObject(){ //Puts an object to Name array for displaying later
	 var CorrectAnswer;
	 var Title;
	var   formData ={};
       
	
	 
	 var tmp ={Title : Title , 
               Fdata :  formData,
		       CorrectAnswer: CorrectAnswer
                   }
this.Name.push(tmp);

	 
	 
	 
 }
		
	}



 
