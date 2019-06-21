import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ViewController, Content, NavParams, AlertController, ModalController, LoadingController } from 'ionic-angular';
import { FileChooser } from '@ionic-native/file-chooser';
import { File } from '@ionic-native/file';
import { FilePath } from '@ionic-native/file-path';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { FinderPage } from './finder';
import { ResponsePage } from '../response/response';
import { ReplacementPage } from './replacement';
import { PoiPage } from './poi';
import { TabsPage } from '../tabs/tabs';
import { CamPage } from '../create_scenario/gps/cam';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { ModalPopPage } from '../modal/modalpop';
import {RootPage} from '../start/Root';
import { StringManipulationPage } from '../create_scenario/StringManipulation/string_manipulation';
import * as MarkerClusterer from 'node-js-marker-clusterer';
import { Events } from 'ionic-angular';
import * as firebase from 'firebase';
import {
	GoogleMaps,
	GoogleMap,
	GoogleMapsEvent,
	LatLng,
	CameraPosition,
	MarkerOptions,
	Marker
} from '@ionic-native/google-maps';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/takeUntil';
declare var google;
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})

export class HomePage {
	@ViewChild('map') mapElement: ElementRef;
	

	public map: any;
	public snaps;
	public Vdata = [];
	public Rdata = [];
	public Names = [];
	public formData = [];
	public VideoUrls = [];
	public blobs = [];
	public GameName;
	public Multiple;
	public BeaconPoi = [];
	public GamePath;
	public Scenario;
	public Sounds = [];
	public AutoSounds;
	public ReplaceSound;
	public InitilaName;
	public txt;
	public markers = [];
	public CordsArray = [];
	public onMap = [];
	public vid;
	public img;
	public loader = [];
	public Vloader = [];
	public key;
	public type;
	public check;
	public MarkerName;
	public Rtext = [];
	public InumsArray = [];
	public Clatlng;
	public Rights = [];
	public root;
	private ngUnsubscribe: Subject<void> = new Subject<void>();
	constructor(public events: Events, private mediaCapture: MediaCapture, private filePath: FilePath, private file: File, private fileChooser: FileChooser, public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, public afAuth: AngularFireAuth, public af: AngularFireDatabase, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {


	}





	ngOnInit() {

		this.root=new RootPage().DBroot();
		this.GameName = this.navParams.get('Name');
		


		this.Names = [];
		
		this.CallToFind();

	}


	CallToFind() { //Retrieves  data from firebase
		this.CordsArray = [];
		this.onMap = [];
		var path = this.root;



		new FinderPage(this.events, this.af).RetrieveKey(path).takeUntil(this.ngUnsubscribe).subscribe(keys => {  


			for (let key of keys) {

				new FinderPage(this.events, this.af).RetrievePath(path, key, this.GameName).takeUntil(this.ngUnsubscribe).subscribe(GPath => {

					if (GPath != undefined) {
						this.key = key;
						this.GamePath = GPath + "/GameName/" + this.GameName;

					

						new FinderPage(this.events, this.af).RetrivePosition(this.GamePath).takeUntil(this.ngUnsubscribe).subscribe(cordinates => {

							this.CordsArray = cordinates;
							this.LatlngOnMap(this.CordsArray);

						




						})

					}

				})


			}

		})


	}


	Refresh() { //Sets array empty and calls a function


		this.unsub();
		this.Names = [];
		this.CallToFind();
		this.FindData(this.MarkerName);



	}







	LatlngOnMap(CordsArray) { //Loads map on screen
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();

		var Names = [];
		var BeaconPoi = [];
		for (let cords of CordsArray) {



			if (cords.key.substr(0, 6) != "Marker") {
			
				this.Names.push(cords.key);
				var latlng = new google.maps.LatLng(cords.val().Lat, cords.val().Long);
				let temp: object = {
					latlng: latlng,
					visited: cords.key
				};




				

				this.BeaconPoi.push(temp);

			}
			else {

				
				
				var latlng = new google.maps.LatLng(cords.val().Lat, cords.val().Long);

				let temp: object = {
					latlng: latlng,
					visited: cords.key
				};
				
				this.onMap.push(temp);
				

			}


		


		}

		this.loadMap(this.onMap, this.BeaconPoi);


	}

	loadMap(onMap, BeaconPoi) { //loads map on screen

		var Bimg = "https://png.icons8.com/online-filled/ios7/32";

		let options = { timeout: 10000, enableHighAccuracy: true };
  

	
		
		if(onMap.length ==0){
			
				let mapOptions = {
			center: BeaconPoi[0].latlng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,

		}
		this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
		}else{
			
			
				let mapOptions = {
			center: onMap[0].latlng,
			zoom: 15,
			mapTypeId: google.maps.MapTypeId.ROADMAP,

		}
			 this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
	}

		


		for (let Bpoi of BeaconPoi) {
			
			
			var marker = new google.maps.Marker({});

			marker.setPosition(Bpoi.latlng);
			marker.setMap(this.map);
			marker.setIcon(Bimg);
		}
		

		var map = this.map;
		let markers = onMap.map((visit, i) => {
			return new google.maps.Marker({
				position: visit.latlng,
				

			});
		});




	

		var markerCluster = new MarkerClusterer(this.map, markers, // groups markers when zoom out
			{ imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });

		var i = 0;
		for (let visit of onMap) {
			markers[i].addListener('click', () => this.FindData(visit.visited));
			i++;
		}






	}



	FindData(visited) { //Retrieves already visited POIs data  

		this.check = true;
		this.MarkerName = visited;


		for (let cord of this.CordsArray) {
			if (cord.key == visited) {
				var data = cord.val().Data;

				this.DisplayFile(data);
			}

		}
	}

	DisplayFile(data) { //Display data on screen by substring the first letter of data

		
		this.formData = [];
		this.VideoUrls = [];
		this.blobs = [];
		this.Sounds = [];
		this.AutoSounds = [];
		this.txt = "";
		this.vid = "";
		this.img = "";

		for (var key in data) {
		

			if (key.substr(0, 1) == "A") {



				new FinderPage(this.events, this.af).GetData(data, key).then(audio => {

					this.Sounds.push(audio);

					



				})




			}

			if (key.substr(0, 1) == "T") {

				
				this.txt = data[key];



			}

			if (key.substr(0, 1) == "M") {
				
				this.Multiple = true;



			}




			

			if (key.substr(0, 1) == "G") {
				

				var Tobj: object = {
					Text: data[key],
					Name: key
				};


				this.formData.push(Tobj);



			}



			if (key.substr(0, 1) == "v") {
				
				

				new FinderPage(this.events, this.af).GetVidData(data, key).then(urlobj => {
					this.VideoUrls.push(urlobj);
					this.vid = true;



				})
			}

			if (key.substr(0, 1) == "i") {
				
				new FinderPage(this.events, this.af).GetData(data, key).then(urlobj => {
					
					this.blobs.push(urlobj);
					this.img = true;
				})
			}









		}

	
	}








	replaceVid(url, name, data) { //Replace an existing video file with another



		
		var tmp: object = {
			name: name,
			url: url,
			data: data,

		};
		this.Rdata.push(tmp);
	


	}


	Up(name, Autoplay) { //Replace an existing audio file with another
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
		







		this.fileChooser.open()
			.then(uri => {
				console.log(uri);


				this.filePath.resolveNativePath(uri).then((filePath) => {




					var DataInfo = new StringManipulationPage().CheckType(filePath);
					

					if (DataInfo.Type == "mp3")
						new CamPage(this.file, this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + "." + DataInfo.Type).then(FileEntry => {
							this.ReplaceSound = FileEntry;
							
							
						})




				})
			})



		
		this.Rdata = [];




	}

	RSound(name, Autoplay) { //Replace an existing audio file with aother

		this.unsub();
		this.InitilaName = name;

		if (Autoplay == true) {
			if (name.includes("Aplay") == false) // maintain current options
				name = "Aplay" + name;


		} else
			if (name.includes("Aplay") == true)
				name = name.substring(5, name.length);

		

		new ReplacementPage(this.af, this.loadingCtrl).ChaneOnlyPlayOption(name, this.GamePath, this.MarkerName, this.key, this.InitilaName, this.ReplaceSound);
		this.ReplaceSound = undefined;
	

	}


	text(txt, name) { 
		this.ngUnsubscribe.next(); //unsubscribe from a subscription
		this.ngUnsubscribe.complete();
		
		new ReplacementPage(this.af, this.loadingCtrl).ReplaceText(txt, name, this.GamePath, this.MarkerName, this.key);



	}







	Loading(loader) { //Puts a loader on screen
		loader.push(this.loadingCtrl.create({
			content: "Please wait...",

		})
		)


	}

	presentAlert() { //Shows an alert on screen
		let alert = this.alertCtrl.create({
			title: 'Attention',
			subTitle: 'Please insert an mp3 audio',
			buttons: ['Dismiss']
		});
		alert.present();
	}

	Response() { // Push data on another page

		


		this.navCtrl.push(ResponsePage, {
			MarkerName: this.MarkerName,
			GamePath: this.GamePath
		});

	}

	points() { //push data on another page

		
		this.ngUnsubscribe.next();
		this.ngUnsubscribe.complete();
		
		this.navCtrl.push(PoiPage, {
			onMap: this.onMap,
			BeaconPoi: this.BeaconPoi,
			GamePath: this.GamePath,
			cordsArray: this.CordsArray,
			key: this.key

		});

	}

	ClickPhoto(blob, type, name) { //opens a modal when click on image

	

		let profileModal = this.modalCtrl.create(ModalPopPage, {
			Blob: blob,
			Type: type,
			Name: name,
			GamePath: this.GamePath,
			Key: this.key,
			MarkerName: this.MarkerName
		});
		profileModal.onDidDismiss((res) => {
			if (res == true)
				this.FindData(this.MarkerName);

		})

		profileModal.present();


	}

	unsub() {

		this.ngUnsubscribe.next(); 
		this.ngUnsubscribe.complete();

	}

}