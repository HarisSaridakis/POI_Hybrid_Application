import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture';
import { CamPage } from './cam';
import { StringManipulationPage } from '../StringManipulation/string_manipulation';
import { TextPage } from '../text/text';
import { VidPage } from './vid';
import { FirePage } from './fire';
import { BeaconPage } from '../beacon/beacon';
import { MultipleChoicePage } from './multiplechoice';
import { File } from '@ionic-native/file';
import { LoadingController, AlertController } from 'ionic-angular';
import { VideoEditor } from '@ionic-native/video-editor';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import {RootPage} from '../../start/Root'
import {
	GoogleMap,
	GoogleMapsEvent,
	LatLng,
	MarkerOptions,
	Marker
} from '@ionic-native/google-maps';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

declare var google;
@Component({
	selector: 'page-gps',
	templateUrl: 'gps.html'
})


export class GpsPage {
	lst: FirebaseListObservable<any>;
	obj: FirebaseObjectObservable<any>;
	Dobj: FirebaseObjectObservable<any>;
	@ViewChild('map') mapElement: ElementRef;
	map: any;
	public Vspin: boolean = false;
	public Ispin: boolean = false;
	public Fspin: boolean = false;
	public chk: boolean = true;


	public Images = [];
	public Videos = [];
	public formcrt: any; //form control
	public myForm: FormGroup;
	public markers = [];
	public i = 0;
	public Uri;
	public id: any;
	public latit: any;
	public longit: any;
	public GameName: string;
	public PoiName: string;
	public Audio = [];
	public StoragePath;
	public dbPath;
	public keimeno;
	public ScenarioType;
	public Response;
	public Autoplay;
	public audio;
	public Name = [];
	public root;
	gform = { GameName: '', Data1: '', Data2: '' };



	constructor(private filePath: FilePath, private fileChooser: FileChooser, private videoEditor: VideoEditor, public modalCtrl: ModalController, public loadCtrl: LoadingController, private diagnostic: Diagnostic, private alertCtrl: AlertController, public loadingCtrl: LoadingController, private file: File, public plt: Platform, private mediaCapture: MediaCapture, private _fb: FormBuilder, public navCtrl: NavController, public navParams: NavParams, public af: AngularFireDatabase, private geolocation: Geolocation) {

	
	this.root=new RootPage().DBroot();
		this.lst = this.af.list(this.root);
		this.id = this.lst.push('');

	}



	ngOnInit() { //Call on init
	
		this.CheckGps();
		this.loadMap();



	}




	doRefresh(refresher) { //Refresh the page 

		this.loadMap();
		console.log('Begin async operation', refresher);

		setTimeout(() => {
			console.log('Async operation has ended');
			refresher.complete();
		}, 4000);
	}

	CheckGps() { //Check if gps in on
		this.diagnostic.isGpsLocationEnabled()
			.then((state) => {
			
				if (state == false) {
					var subtitle = "Please Turn on your Gps and refresh the page";
					this.ShowAlert(subtitle);
				}

			}).catch(e => console.error("error is:", e));
	}





	ShowAlert(subtitle) { //Show an alert on screen
		let alert = this.alertCtrl.create({
			title: 'Warning',
			subTitle: subtitle,
			buttons: ['Ok']
		});
		alert.present();
	}


	Open() { //Opens filesystem tand reads video/image/audio and puts it in an array
			 //for video files makes also a thumbnail


		this.chk = true;
		this.Autoplay = ""
		this.fileChooser.open()
			.then(uri => {
				console.log("Uri",uri);

				this.filePath.resolveNativePath(uri).then((filePath) => {
				

					var DataInfo = new StringManipulationPage().CheckType(filePath);
					
					this.Fspin = true;
					if (DataInfo.Type.toLowerCase() == "mp4") {

						this.MakeVideoThumnail(filePath, DataInfo.Name).then(thumbnail => {
							

							new CamPage(this.file, this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + ".mp4").then(FileEntry => {

								var tmp = {
									video: FileEntry,
									thumbnail: thumbnail


								};
								this.Videos.push(tmp);

								this.Fspin = false;
							})


						})


					}
					else {
						if (DataInfo.Type.toLowerCase() == "jpg") {
							new CamPage(this.file, this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + ".jpg").then(FileEntry => {

								this.Images.push(FileEntry);
								

								this.Fspin = false;
							})

						} else {
							if (DataInfo.Type.toLowerCase() == "mp3")
								new CamPage(this.file, this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + "." + DataInfo.Type).then(FileEntry => {
									this.chk = false;
									var tmp = {
										Audio: FileEntry,
										Autoplay: "No"


									};
									this.Audio.push(tmp);
									this.Fspin = false;
								})


							else {
								var subtitle = "Valid data types are only jpg,mp3 and mp4";
								this.ShowAlert(subtitle);
								this.Fspin = false;
							}

						}

					}




				})
			},
			(e) => {
				console.log(e);
			})



	}


	Aplay() { //sets audio to autoplay



		this.Audio[this.Audio.length - 1].Autoplay = this.Autoplay;
		



	}

	OpenCam() { //Opens device camera 

		this.Ispin = true;
	
		

		new CamPage(this.file, this.mediaCapture).Cam().then(imgData => {

			if (imgData == false)
				this.Ispin = false;


		


			this.filePath.resolveNativePath(imgData[0].fullPath).then((filePath) => { //resolve the native filesystem path for Android content URI
				var DataInfo = new StringManipulationPage().CheckType(filePath);
				
				new CamPage(this.file, this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + ".jpg").then(FileEntry =>{
				

					this.Images.push(FileEntry);

					this.Ispin = false;
				



				})

			})
		})

	}


	OpenVid() { //Opens device camera for video capture the rest is same as above function


		this.Vspin = true;
	

		new VidPage(this.mediaCapture, this.videoEditor).Vid().then(VidData => {

			if (VidData == false)
				this.Vspin = false;

			var vidUri = VidData[0].fullPath;
			var thumbName = VidData[0].name.substring(0, VidData[0].name.length - 4);
			this.MakeVideoThumnail(vidUri, thumbName).then(thumbnail => {
				


				var CameraDataInfo = new StringManipulationPage().CameraData(VidData);

				new CamPage(this.file, this.mediaCapture).dataUrl(CameraDataInfo.DirPath, CameraDataInfo.Name).then(FileEntry => {

					var tmp = {
						video: FileEntry,
						thumbnail: thumbnail



					};
					this.Videos.push(tmp);
					
					this.Vspin = false;
					
				})
			})

		})
	}



	MakeVideoThumnail(vidUri, thumbName) {  //Creates a thumbnail from the video



		return new VidPage(this.mediaCapture, this.videoEditor).VideoThumbnail(vidUri, thumbName).then(result => {



			

			return new CamPage(this.file, this.mediaCapture).ThumbdataUrl(result, thumbName).then(FileEntry => {
				


				return this.AddPlayIcon(FileEntry).then(thumbnail => {

					return thumbnail;


				})


			})

		})


	}




	AddPlayIcon(thumbnail) { //adds a play icon to the center of an image 
							 // to create a thumbnail

		return new Promise(resolve => {
			
			var c = (<HTMLCanvasElement>document.createElement("canvas"));
			var ctx = c.getContext("2d");
			c.width = 128;
			c.height = 128;
			var imageObj2 = new Image();
			var imageObj1 = new Image();
			imageObj1.src = thumbnail;
			
			imageObj2.src = "file:///android_asset/www/icon.png";
			imageObj1.onload = function () {
				ctx.drawImage(imageObj1, 0, 0, 128, 128);
			
				imageObj2.onload = function () {
					ctx.drawImage(imageObj2, 39, 39, 50, 50, );
					var image = c.toDataURL("image/jpeg");
				
					resolve(image);

				}
			}
		})



	}


	loadMap() { //Puts a map on screen  



		let options = { timeout: 10000, enableHighAccuracy: true };
		this.geolocation.getCurrentPosition(options).then((position) => {
			
			let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

			let latitude = position.coords.latitude;
			let longitude = position.coords.longitude;


			let mapOptions = {
				center: latLng,
				zoom: 15,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				
			}

			this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


			this.MarkerStaff()
		})
			.catch((err) => {
				console.log(err);
				google.maps.event.trigger(this.map, 'resize');

			});


	};

	MarkerStaff() { //Creates a new marker and adds a listener to it

		this.markers[this.i] = new google.maps.Marker({});
		this.map.addListener('click', (e) => this.AddMarker(e, this.markers));
		this.markers[this.i].addListener('dblclick', (e) => this.RemoveMarker(e, this.markers[this.i]));

	}

	AddMarker(e, markers) { //Adds a marker on map

		var img = "https://png.icons8.com/online/ultraviolet/40"; //custom icon for beacon marker

		
		this.markers[this.i].setPosition(e.latLng);
		this.markers[this.i].setMap(this.map);
	
		var val = e.latLng.toString();
		this.latit = e.latLng.lat();
		this.longit = e.latLng.lng();
		if (this.PoiName != undefined) {
			if (this.PoiName.substring(0, 6) != "Marker") {
				
				this.markers[this.i].setIcon(img);
				
				this.markers[this.i].addListener('mousedown', (e) => console.log("mousedown"));
				this.markers[this.i].addListener('mouseup', (e) => this.AddMarker(e, this.markers));

			}
		}
		else {
		
			this.PoiName = "Marker" + this.i;
		}
	}

	RemoveMarker(e, markers) { //Removes a marker from the map

		
		for (let marker of this.markers) {
		

			this.latit = null;
			this.longit = null;

			if (marker.getPosition().lat() == e.latLng.lat()) { // elegxos latitude gia na ginei delete o marker apo ton xarth 
				if (marker.getPosition().lng() == e.latLng.lng()) // elegxos longitude gia na ginei delete o marker apo ton xarth
					marker.setMap(null);
				if (this.id != undefined) {
					for (var k = 0; k <= this.i; k++) { //for loop gia ton elegxo twn timwn twn markers
						
						this.obj = this.af.object(this.root + this.id.key + "/GameName/" + this.GameName + "/" + k, { preserveSnapshot: true });
						this.obj.remove();
					
					}                
				}

				break;


			} 	
		}

	}





	submitData() { //Uploads files to firebase by calling 
				   //appropriate functions




		

		var GameName = this.navParams.get('Name');
		var ScenarioType = this.navParams.get('Scenario');
		var Password = this.navParams.get('Password');
		var Accuracy=Password = this.navParams.get('Accuracy');
		this.StoragePath = this.root + this.id.key + "/" + this.PoiName;
		this.dbPath = this.root + this.id.key + "/GameName/" + GameName + "/" + this.PoiName;
		var ScenarioPath = this.root + this.id.key;
		
	
		if (this.PoiName != null) {

			new FirePage(this.af, this.loadingCtrl, this.alertCtrl).FirebaseSet(this.dbPath, this.latit, this.longit);
		var Password = this.navParams.get('Accuracy');
		this.i = new FirePage(this.af, this.loadingCtrl, this.alertCtrl).FirebaseUpload(this.keimeno, Password, this.StoragePath, this.dbPath, this.Videos, this.Images, this.Audio, this.gform, this.i, ScenarioPath, ScenarioType, this.Name, Accuracy);

			this.setToNull();
		}



	
		this.MarkerStaff();

	}

	setToNull() { //Sets arrays and variables to null


		
		this.gform.Data1 = "";
		this.gform.Data2 = "";
		this.Response = "";
		this.Videos = [];
		this.Images = [];
		this.Audio = [];
		this.latit = null;
		this.longit = null;
		this.Name = [];
		this.keimeno = undefined;
		this.PoiName = undefined;

	}


	beacon() { //Shows a modal page 

		let profileModal = this.modalCtrl.create(BeaconPage);
		profileModal.onDidDismiss(deviceId => {
			if (deviceId != undefined) {
			
				this.PoiName = deviceId;
			}
		});
		profileModal.present();
	}

	Text() { //Shows a text page 

		let profileModal = this.modalCtrl.create(TextPage);
		profileModal.onDidDismiss(keimeno => {

			if (keimeno != undefined) {
				
				this.keimeno = keimeno;

			}

		});
		profileModal.present();






	}

	Modal() { //shows a modal page for multiple choices

		let profileModal = this.modalCtrl.create(MultipleChoicePage, { Name: this.Name });
		profileModal.onDidDismiss((Name, CorrectAnswer) => {



			

			for (let k = 0; k < Name.length; k++) {
				var c = 0;
			
				if (!(Name[k].Title == undefined || Name[k].Title == "")) {


					for (let i = 0; i < 3; i++) {
					
						if (Name[k].Fdata[i] == undefined) {
							c++;
						}
						if (Name[k].Fdata[i] == "") {
							c++;
						}
					}
					
					if (c >= 2) {

						
						Name[k].Title = undefined;
					}

				}
			}

			this.Name = Name;
		

		});
		profileModal.present();
	}



}
