import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { VideoEditor } from '@ionic-native/video-editor';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import {BeaconPage} from '../pages/create_scenario/beacon/beacon';
import {TextPage} from '../pages/create_scenario/text/text';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import { ModalPopPage } from '../pages/modal/modalpop';
import { ShowImagePage } from '../pages/start/ShowImage';
import {SignoutPage } from '../pages/registration/sign_out';
import { PoiPage } from '../pages/home/poi';
import { MakePoiPage } from '../pages/create_scenario/MakePoi/MakePoi';
import { GpsPage } from '../pages/create_scenario/gps/gps';
import { MultipleChoicePage } from '../pages/create_scenario/gps/multiplechoice';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';
import { ResponsePage } from '../pages/response/response';
import { MenuPage } from '../pages/home/menu';
import { HomePage } from '../pages/home/home';
import { CheckPage } from '../pages/registration/check';
import { HTTP } from '@ionic-native/http';
import * as firebase from 'firebase';
import { Firebase } from '@ionic-native/firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { StartPage } from '../pages/start/start';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import {BLE} from '@ionic-native/ble';
import { RegistrationPage } from '../pages/registration/registration';




export const firebaseConfig={
	
	 apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""

};




@NgModule({
  declarations: [
    MyApp,
    HomePage,
	StartPage,
	MenuPage,
	TabsPage,
	ModalPopPage,
	ResponsePage,
	PoiPage,
	MakePoiPage,
	GpsPage,
	BeaconPage,
	TextPage,
	MultipleChoicePage,
	RegistrationPage,
	CheckPage,
	SignoutPage,
	ShowImagePage
	
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
	AngularFireModule.initializeApp(firebaseConfig)//,
	//firebase.initializeApp(secondaryAppConfig, "secondary")

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
	StartPage,
	MenuPage,
	TabsPage,
	ModalPopPage,
	ResponsePage,
	PoiPage,
	MakePoiPage,
	GpsPage,
	BeaconPage,
	TextPage,
	MultipleChoicePage,
	RegistrationPage,
	CheckPage,
	SignoutPage,
	ShowImagePage
	
  ],
  providers: [
    VideoEditor,
    MediaCapture,
    FileChooser,
	FilePath,
    File,
    StatusBar,
	AngularFireDatabase,
	AngularFireAuth,
	HTTP,
    SplashScreen,
	Diagnostic,
	Geolocation,
	BLE,
	Firebase,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
