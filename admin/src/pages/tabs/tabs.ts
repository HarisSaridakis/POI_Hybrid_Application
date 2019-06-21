import { Component,ViewChild  } from '@angular/core';
import { MakePoiPage } from '../create_scenario/MakePoi/MakePoi';
import { GpsPage } from '../create_scenario/gps/gps';
import {SignoutPage } from '../registration/sign_out';
import { StartPage } from '../start/start';
import {MenuPage } from '../home/menu';
import { NavController, NavParams,Content } from 'ionic-angular';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {



  tab1Root = MenuPage;
  tab2Root = StartPage;
  tab3Root = MakePoiPage;

  tab4Root = SignoutPage;

  constructor(private navCtrl: NavController, public navParams: NavParams) {
	  
	   
  }
  

}

