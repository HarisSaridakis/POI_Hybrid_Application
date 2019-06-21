import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Content, ModalController, LoadingController, PopoverController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { VideoEditor } from '@ionic-native/video-editor';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { FinderPage } from './finder';
import { File } from '@ionic-native/file';
import { BeaconPage } from './beacon';
import { GeoPage } from '../geographically/geo';
import { ChronPage } from '../chronologically/chron';
import { AlreadyVisitedPage } from '../visited/AlreadyVisited';
import { Events } from 'ionic-angular';
import { CamPage } from '../../gps/cam';
import { OpenCamPage } from './opencam';
import { Media, MediaObject } from '@ionic-native/media';
import { VidPage } from '../../gps/vid';
import { ResponsePage } from '../response/response';
import { StringManipulationPage } from '../../StringManipulation/string_manipulation';
import { ModalPopPage } from '../modal/modalpop';
import { SettingsPage } from '../settings/settings';
import { BackgroundMode } from '@ionic-native/background-mode';
import { AngularFireAuth } from 'angularfire2/auth';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FirePage } from '../../gps/fire';
import { NativeStorage } from '@ionic-native/native-storage';

import {
	GoogleMap,
	GoogleMapsEvent,
	LatLng,
	MarkerOptions,
	Marker

} from '@ionic-native/google-maps';
import { BLE } from '@ionic-native/ble';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
import {RootPage} from '../../StringManipulation/Root'


declare var google;
@Component({
	selector: 'page-start',
	templateUrl: 'start.html'
})


export class StartPage {
	@ViewChild(Content) content: Content;
	obj: FirebaseObjectObservable<any>;
	lst: FirebaseListObservable<any>;
	public geo;
	public formData = [];
	public blobs = [];
	public text;
	public VideoUrls = [];
	public GamePath;
	public Currentlatlng;
	public GameType;
	public ResponseValue;
	public Scenario: String;
	public notvisited = [];
	public CordsArray = [];
	public visitedInfo = [];
	public markers = [];
	public Images = [];
	public Audio = [];
	public Sounds = [];
	public AutoSounds = [];
	public notification;
	public Videos = [];
	public data = "stop";
	public search;
	public id;
	public BIDs = [];
	public newid;
	public ring;
	public InumArray = [];
	public MapCords = [];
	public accuracy;
	public Multiples;
	public Poi;
	public devices;
	public MCvisited = [];
	public visited;
	public dt;
	public MyMarker;
	public Icnt=0;
	public Vcnt=0;
	public Acnt=0;
	@ViewChild('map') mapElement: ElementRef;
	public map: any;
	public root;
	private ngUnsubscribe: Subject<void> = new Subject<void>();
	constructor(private alertCtrl: AlertController, private media: Media, private nativeStorage: NativeStorage, public popoverCtrl: PopoverController, public loadingCtrl: LoadingController, public afAuth: AngularFireAuth, private filePath: FilePath, private fileChooser: FileChooser, private backgroundMode: BackgroundMode, private videoEditor: VideoEditor, private mediaCapture: MediaCapture, private file: File, public modalCtrl: ModalController, private geolocation: Geolocation, public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, private ble: BLE) {

	}

	ngOnInit() {


    this.root=new RootPage().DBroot();


		this.nativeStorage.keys()
			.then(
			keys => {
				console.log("success");
			},
			error => console.error("keys error", error)
			);




		this.backgroundMode.enable();
		this.backgroundMode.disableWebViewOptimizations();

		

		this.FindMyPosition();



	}

	presentPopover(myEvent) {
		let popover = this.popoverCtrl.create(SettingsPage, { geo: this.geo });
		popover.present({
			ev: myEvent
		});
	}


	CheckAlert(subtitle) {
		let alert = this.alertCtrl.create({
			title: 'Low battery',
			subTitle: subtitle,
			buttons: ['Dismiss']
		});
		alert.present();
	}

	FindMyPosition() { // 
	

		var path = "/test/";
		var GameName: string = this.navParams.get('Name');
		

		new FinderPage(this.af).RetrieveKey(this.root).takeUntil(this.ngUnsubscribe).subscribe(keys => {

			for (let key of keys) {
				
				new FinderPage(this.af).RetrievePath(this.root, key, GameName).takeUntil(this.ngUnsubscribe).subscribe(GPath => {

					if (GPath != undefined) {
						this.id = key;
						this.GamePath = GPath + "/GameName/" + GameName;
						
						
					
						this.GetScenarioType(GPath, GameName);



					}

				})
			}


		})

	}


	GetScenarioType(GPath, GameName) { //Retrieves the scenario type from firebase

		

		new FinderPage(this.af).RetrieveOnce(GPath + "/ScenarioType").then(type => {
			this.Scenario = type;
			this.IamIn(GameName);
			this.GetAccuracy(GPath);
			this.Position();


		})



	}

	GetAccuracy(GPath) {// Retrieves Accuracy from firebase

		

		new FinderPage(this.af).RetrieveOnce(GPath + "/Accuracy").then(type => {
			this.accuracy = type;
			


		})

		

	}



	IamIn(GameName) { //

		var usr = this.afAuth.auth.currentUser;
		this.lst = this.af.list("/User/" + usr.uid + "/ResponseData");
		this.newid = this.lst.push('');
		this.obj = this.af.object("/User/" + usr.uid + "/ResponseData/" + this.newid.key);
		this.obj.set({ GamePath: this.GamePath, GameName: GameName });


	}


	Position() { //Retrieves POI cordinates and puts it to an array

		new FinderPage(this.af).RetrivePosition(this.GamePath).takeUntil(this.ngUnsubscribe).subscribe(Cords => {
			this.CordsArray = Cords;

			

			for (let Cord of Cords) {
				this.InumArray.push(Cord.val().Inum);
				new ChronPage(this.navCtrl, this.navParams, this.af, this.ble).LowNum(this.InumArray);
			
				var latlng = new google.maps.LatLng(Cord.val().Lat, Cord.val().Long);
				var PoiName = Cord.key;
				var Inum = Cord.val().Inum
				var obj = {
					PoiName: PoiName,
					latlng: latlng,
					Inum: Inum
				}
				this.MapCords.push(obj);


			}
			new ChronPage(this.navCtrl, this.navParams, this.af, this.ble).LowestNum(this.MapCords);
			
			this.loadMap(this.visitedInfo, this.MapCords);
			
            this.watch();


           



			
		})


	}

	beacons() {

		new BeaconPage(this.navCtrl, this.navParams, this.af, this.ble).startScanning().then((devices: any) => {

			this.devices = devices;



		})
	}

	watch() { //Check position and updates marker on map
       
        this.geo = this.geolocation.watchPosition({ timeout: 5000,enableHighAccuracy: true}).subscribe(position => {
		
			this.Currentlatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
			
		
			this.MyMarker.setPosition(this.Currentlatlng);
	
			this.ScenarioType();
			new BeaconPage(this.navCtrl, this.navParams, this.af, this.ble).startScanning().then((devices: any) => {

				this.devices = devices;
				


			})

        }, error => { console.log("geolocation error", error); } )


	}




	

	    
	ScenarioType() { 
        
		var Data;
		

		if (this.data != "stop") {
			this.Multiples = false;
			this.visited = undefined;


			
			if (this.Scenario == "Chron") { //check for scenario type




				Data = new ChronPage(this.navCtrl, this.navParams, this.af, this.ble).startchron(this.accuracy, this.InumArray, this.CordsArray, this.Currentlatlng, this.visitedInfo, this.devices, this.BIDs);
		
			
				this.backgroundMode.enable();
				this.backgroundMode.disableWebViewOptimizations();
				if (Data != undefined) // check if  a POI exists in current position
				{
					this.visited = this.visitedInfo[this.visitedInfo.length - 1].visited;
					this.data = "stop";
					this.search = false;
					this.RingMyBell();
					this.MarkersSet(this.visitedInfo, this.MapCords);
					this.DisplayFile(Data);
				}
			



			}

			if (this.Scenario == "Geo") {


		  
				Data = new GeoPage(this.geolocation, this.navCtrl, this.navParams, this.af, this.ble).startgeo(this.accuracy, this.CordsArray, this.Currentlatlng, this.visitedInfo, this.devices, this.BIDs);
			
				this.backgroundMode.enable();
				this.backgroundMode.disableWebViewOptimizations();
				if (Data != undefined) {
					this.visited = this.visitedInfo[this.visitedInfo.length - 1].visited;
					this.search = false;
					this.data = "stop";
					this.RingMyBell();
					this.MarkersSet(this.visitedInfo, this.MapCords);
					this.DisplayFile(Data);
				}

			


			}
		}

	

		
	}


	FindData(visited) { //Retrieves data 
		this.visited = visited;
		
		this.data = "stop";
		this.Multiples = false;
		this.search = false;
	
		for (let cord of this.CordsArray) {
			if (cord.key == visited) {
				var data = cord.val().Data;
				this.setToNull();
				this.DisplayFile(data);
			}

		}
	}




	AlreadyVisited() { //Push a new page on stack



		this.navCtrl.push(AlreadyVisitedPage, {
			Name: this.visitedInfo,
			CordsArray: this.CordsArray,
			GameType: this.GameType,
			MapCords: this.MapCords
		});


	}

	RingMyBell() {//Retrives a sound and plays it if  finds a POI

		this.nativeStorage.getItem('ring')
			.then(
			data => {
				
				
				this.play(data);

			},
			error => {
				console.error("error", error);
				var dt = "file:///android_asset/www/audio/ring.mp3";
				this.play(dt);
			});
	}


	play(data) {// Sound play

		var sound = this.media.create(data);
		sound.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes

		sound.onSuccess.subscribe(() => console.log('Action is successful'));

		sound.onError.subscribe(error => console.log('Error!', error));

		sound.play();




	}


   // Puts data to arrays/ variables to display it on screen
	DisplayFile(data) {
		this.setToNull();
		
		



		for (var key in data) {

			
			if (key.substr(0, 1) == "T") {

				


				this.text = data[key];




			}





			if (key.substr(0, 1) == "A") {

				if (key.substr(0, 2) == "Ap") {
					new FinderPage(this.af).GetData(data, key).then(audio => {

						this.Sounds.push(audio);
						



					})

				} else {
					new FinderPage(this.af).GetData(data, key).then(audio => {

						this.AutoSounds.push(audio);
						



					})
				}

			}


			if (key.substr(0, 1) == "G") {
			
				
				this.formData.push(data[key]);

			}


			if (key.substr(0, 1) == "v") {


				new FinderPage(this.af).GetVidData(data, key).then(url => {
					this.VideoUrls.push(url);
				

				})
			}


			if (key.substr(0, 1) == "i") {
				new FinderPage(this.af).GetData(data, key).then(img => {

					this.blobs.push(img);
				

				})
			}

			if (key.substr(0, 1) == "M") {

				this.Multiples = true;
			

			}




		}

	
	}







	

	setToNull() { //Sets variables and arrays empty

		this.VideoUrls = [];
		this.blobs = [];
		this.formData = [];
		this.Sounds = [];
		this.AutoSounds = [];
		this.text = "";
		this.Videos = [];
		this.Images = [];
		this.Audio = [];



	}



	loadMap(visitedInfo, MapCords) { //Loads map on screen
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();

		let options = { timeout: 10000, enableHighAccuracy: true };


		let mapOptions = {
			center: MapCords[0].latlng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
		
		}




		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
		
		this.MarkersSet(visitedInfo, MapCords);
	}

	MarkersSet(visitedInfo, MapCords) { // Sets appropriate marker on screen
		var map = this.map;

		var VMimg = "http://maps.google.com/mapfiles/ms/icons/green-dot.png";
		var Mimg = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
		var Myimg = "https://thumb.ibb.co/ee2skm/walker.png";
		var Bimg = "https://thumb.ibb.co/khngd6/Online35.png";
	
		var VBimg = "https://thumb.ibb.co/j1Mk5m/Online_G35.png";



		this.MyMarker = new google.maps.Marker({});
		
		this.MyMarker.setMap(map);
		this.MyMarker.setIcon(Myimg);



		var markers;
		var num: number;
		if (this.Scenario == "Chron") {
			
			if (visitedInfo.length < MapCords.length) {
				num = visitedInfo.length;
			
				if (MapCords[num].PoiName.substring(0, 6) != "Marker")
					var img = Bimg;
				else
					var img = Mimg;
				var marker = new google.maps.Marker({

					position: MapCords[num].latlng,
					map: map,
					icon: img


				});
			}
		}
		else {
			for (let i = 0; i < MapCords.length; i++) {
				

				markers = new google.maps.Marker({});

				markers.setPosition(MapCords[i].latlng);
				markers.setMap(map);
			
				if (MapCords[i].PoiName.substring(0, 6) != "Marker")
					markers.setIcon(Bimg);
				else
					markers.setIcon(Mimg);


			}
		}


		if (visitedInfo.length > 0) {
			for (let i = 0; i < visitedInfo.length; i++) {
				map.setCenter(visitedInfo[i].latlng);
		
				markers = new google.maps.Marker({});

				markers.setPosition(visitedInfo[i].latlng);
				markers.setMap(map);
				markers.addListener('dblclick', () => this.FindData(visitedInfo[i].visited));
				


				if (visitedInfo[i].visited.substring(0, 6) != "Marker")
					markers.setIcon(VBimg);


				else
					markers.setIcon(VMimg);
			}
		}









	}




	GetPhoto() { //Calls a function to get  a photo and pushes to an array



		new OpenCamPage(this.filePath, this.fileChooser, this.navParams, this.videoEditor, this.mediaCapture, this.file, this.modalCtrl).OpenCam().then(img => {
			this.Images.push(img);
			
			this.upload();
		});










	}

	GetData() { //Calls a function to open file system and pushes to an array


		new OpenCamPage(this.filePath, this.fileChooser, this.navParams, this.videoEditor, this.mediaCapture, this.file, this.modalCtrl).Open().then(filePath => {
		
			var DataInfo = new StringManipulationPage().CheckType(filePath);



			new CamPage(this.file, this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + "." + DataInfo.Type).then(FileEntry => {

			
                     
                  
				this.DataType(DataInfo, FileEntry, filePath);

			
			})




		});


	}
      //Check the type of imported data if it is not the appropriate rejects it
	DataType(DataInfo, FileEntry, filePath) {

		switch (DataInfo.Type) {

			case "mp4":

				new OpenCamPage(this.filePath, this.fileChooser, this.navParams, this.videoEditor, this.mediaCapture, this.file, this.modalCtrl).MakeVideoThumnail(filePath, DataInfo.Name).then(thumbnail => {
					
					var tmp = {
						video: FileEntry,
						thumbnail: thumbnail


					};
					this.Videos.push(tmp);
					
					this.upload();
				})

				break;
			case "jpg":
				this.Images.push(FileEntry);
				
				this.upload();
				break;
			case "mp3":
				this.Audio.push(FileEntry);
				
				this.upload();
				break;
			default:
				var subtitle = "Only mp4,jpeg and mp3 are allowed";
				this.CheckAlert(subtitle);

		}



	}

	GetVideo() {//Calls a function to get  video and pushes to an array


		new OpenCamPage(this.filePath, this.fileChooser, this.navParams, this.videoEditor, this.mediaCapture, this.file, this.modalCtrl).OpenVid().then(vid => {

			this.Videos.push(vid);
			
			this.upload();
		});






	}

	upload() { //Sets the paths of data  and uploads them in firebase

		var usr = this.afAuth.auth.currentUser;
	
		var dbPath = "/User/" + usr.uid + "/ResponseData/" + this.newid.key + "/" + this.visitedInfo[this.visitedInfo.length - 1].visited;
		var StoragePath = "/User/" + this.newid.key + "/" + this.visitedInfo[this.visitedInfo.length - 1].visited;
		var counters=new FirePage(this.af, this.loadingCtrl).FirebaseResponseUpload(dbPath, this.Videos, this.Images, this.Audio, this.id, StoragePath,this.Icnt,this.Vcnt,this.Acnt);
	
		this.Icnt=counters.Icnt;
		this.Vcnt=counters.Vcnt;
		this.Acnt=counters.Acnt;
		this.setToNull();
	}



	Response() { //Uploads the user response to firebase
		var dbPath;
	
		dbPath = this.GamePath + "/" + this.visited;
		
		

		let profileModal = this.modalCtrl.create(ResponsePage, {
			id: this.id,
			GamePath: this.GamePath,
			dbPath: dbPath,
			MCvisited: this.MCvisited,
			CurrentPoi: this.visited
		});

		profileModal.onDidDismiss((results, check) => {

			


			if (check == "false") {
				this.MCvisited.push({
					Name: this.visited,
					MultipleChoices: results[0].MultipleChoices,
					MultipleChoicesAnswers: results[0].MultipleChoicesAnswers
				});
				

				var usr = this.afAuth.auth.currentUser;
				var usrid = usr.uid
				var newid = this.newid.key;
			
			
				var path = "/User/" + usr.uid + "/ResponseData/" + newid + "/" + this.visited;
			
				new FirePage(this.af, this.loadingCtrl).FirebaseMultipleChoiceUpload(results[0].MultipleChoicesAnswers, path, dbPath);
			
			}
		});
		profileModal.present();
	}


	pressPhoto(blob, type) { //Opens a modal on screen

	

		let profileModal = this.modalCtrl.create(ModalPopPage, {
			URL: blob,
			Type: type
		});

		profileModal.present();


	}

}
