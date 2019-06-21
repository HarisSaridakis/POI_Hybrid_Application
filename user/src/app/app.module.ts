import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';
import { File } from '@ionic-native/file';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Media, MediaObject } from '@ionic-native/media';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/scenario/settings/settings';
import { StartPage } from '../pages/scenario/starter/start';
import { OpenCamPage } from '../pages/scenario/starter/opencam';
import { ScenarioPage } from '../pages/scenario/starter/scenario';
import { NativeStorage } from '@ionic-native/native-storage';
import { VideoEditor } from '@ionic-native/video-editor';
import { FileChooser } from '@ionic-native/file-chooser';
import { BeaconPage } from '../pages/beacon/beacon';


import { CheckPage } from '../pages/home/check';
import { MenuPage } from '../pages/home/menu';
import { RegistrationPage } from '../pages/home/registration';
import { AlreadyVisitedPage } from '../pages/scenario/visited/AlreadyVisited';
import { ModalPopPage } from '../pages/scenario/modal/modalpop';
import { Firebase } from '@ionic-native/firebase';
import { BLE } from '@ionic-native/ble';
import { ResponsePage } from '../pages/scenario/response/response';
import { FilePath } from '@ionic-native/file-path';
import { BackgroundMode } from '@ionic-native/background-mode';

export const firebaseConfig = {

	apiKey: "",
	authDomain: "",
	databaseURL: "",
	storageBucket: "",
	messagingSenderId: ""

};

@NgModule({
	declarations: [
		MyApp,
		RegistrationPage,

		BeaconPage,
		ResponsePage,
		ScenarioPage,
		ModalPopPage,
		StartPage,
		AlreadyVisitedPage,
		MenuPage,
		CheckPage,
	


		OpenCamPage,
		SettingsPage
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(firebaseConfig),
		AngularFireDatabaseModule,
		AngularFireAuthModule,
		IonicModule.forRoot(MyApp)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		RegistrationPage,

	
		BeaconPage,
		ResponsePage,
		ModalPopPage,
		ScenarioPage,
		StartPage,
		AlreadyVisitedPage,
		MenuPage,
		CheckPage,
	


		OpenCamPage,
		SettingsPage
	],
	providers: [
		StatusBar,
		Geolocation,
		VideoEditor,
		SplashScreen,
		MediaCapture,
		Diagnostic,
		File,
		FileChooser,
		FilePath,
		Firebase,
		BLE,
		BackgroundMode,
		Media,
		NativeStorage,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule { }
