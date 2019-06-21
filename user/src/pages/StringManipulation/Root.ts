import { Component,ViewChild  } from '@angular/core';
import { NavController, NavParams,Content } from 'ionic-angular';
/*
@Component({
  templateUrl: 'tabs.html'
})*/
export class RootPage {

public root;


  constructor() {
	  
	   
  }
  
DBroot(){ //changes the root of firebase structure
		
		
		this.root="/Presentation/";
		
		
		return this.root;
		
	}
  
  
}

