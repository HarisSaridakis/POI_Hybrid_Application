import { Component, ViewChild, ElementRef, AfterViewInit, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';
import { File } from '@ionic-native/file';
import { LoadingController, AlertController } from 'ionic-angular';



@Component({
	selector: 'page-cam',
	templateUrl: 'gps.html'
})


export class FirePage {


	public Iloader = [];
	public Vloader = [];
	public Aloader;
	public Floader = [];
	public dataRef;
	public task;
	public storagePath;
	public dbpath;

	obj: FirebaseObjectObservable<any>;
	lst: FirebaseListObservable<any>;

	constructor(public af: AngularFireDatabase, public loadingCtrl: LoadingController, public alertCtrl: AlertController) {



	}


	AddUser(dbPath, user, token) { //Adds a user with the use of firebase Auth


		if (user != null) {
			this.obj = this.af.object(dbPath + user.uid);
			this.obj.set({ email: user.email });
		
		}


	}



	FirebaseResponseSetPath(GamePath, dbPath, StoragePath, MultipleChoicesAnswers, id, uid) { //Sets the firebase structure/path 

		dbPath = "/User/" + uid + "/ResponseData";
		StoragePath = "/User/" + uid;


	
		this.lst = this.af.list(dbPath);
		var key = this.lst.push('');
		var ukey = key.key;

		this.obj = this.af.object(dbPath + "/" + ukey);
		this.obj.set({ GamePath: GamePath });
		dbPath = dbPath + "/" + ukey + "/" + id;
		StoragePath = StoragePath + "/" + ukey + "/" + id;
		

		var tmp = {
			dbResponePath: dbPath,
			StoragePath: StoragePath
		}
		return tmp;



	}

	FirebaseResponseUpload(dbPath, Videos, Images, Audio, id, StoragePath) { //Uploads data to firebase storage
																		     //by calling the appropriate functions


		var storageRef = firebase.storage().ref();



		for (let i = 0; i < Audio.length; i++) { 


			
			this.Loading(this.Aloader);

			this.SetResponseParams(StoragePath, dbPath, Audio[i], i, "Audio", storageRef);
			this.storeInputData(this.task, this.storagePath, this.dbpath, this.af);

		}


		for (let i = 0; i < Videos.length; i++) {

			
			this.Loading(this.Vloader);

			this.SetResponseParams(StoragePath, dbPath, Videos[i].video, i, "video", storageRef);
			this.storeInputData(this.task, this.storagePath, this.dbpath, this.af);
			this.Loading(this.Vloader);
			this.SetResponseParams(StoragePath, dbPath, Videos[i].thumbnail, i + "thumbnail", "video", storageRef);
			this.storeInputData(this.task, this.storagePath, this.dbpath, this.af);

		}

		

		for (let i = 0; i < Images.length; i++) {

			
			this.Loading(this.Iloader);
			this.SetResponseParams(StoragePath, dbPath, Images[i], i, "image", storageRef);
			this.storeInputData(this.task, this.storagePath, this.dbpath, this.af);



		}





	}

	FirebaseMultipleChoiceUpload(clicked, path, dbpath) { //Uploads multiple choice data 


		for (let Mc of clicked) {

			this.obj = this.af.object(path + "/MultipleChoices/Answers/" + Mc.Title);
			this.obj.set(Mc.Answer);


		}
		this.obj = this.af.object(path + "/MultipleChoices/");
		this.obj.update({ MCpath: dbpath });




	}
	FirebaseSet(dbPath, latit, longit) { //Sets firebase path
	
		this.obj = this.af.object(dbPath);
		this.obj.set({ Lat: latit, Long: longit });





	}

	//Uploads to firebase
	FirebaseUpload(keimeno, Password, StoragePath, dbPath, Videos, Images, Audio, gform, i, ScenarioPath, ScenarioType, McData, Accuracy) {




		var mdbPath = dbPath + "/Data/MultipleChoices";



		this.obj = this.af.object(mdbPath);
		for (let Name of McData) {
			

			
			for (let i = 0; i < 3; i++) {
				var num = i + 1
				this.obj = this.af.object(mdbPath + "/" + Name.Title + "/Answer" + num);
				this.obj.set(Name.Fdata[i]);
			}
			
			this.obj = this.af.object(mdbPath + "/" + Name.Title + "/CorrectAnswer");
			this.obj.set(Name.CorrectAnswer);

		}












		if (i == 0) {
			this.obj = this.af.object(ScenarioPath);
			this.obj.update({ ScenarioType: ScenarioType, Password: Password, Accuracy: Accuracy });
		}


		

		var storageRef = firebase.storage().ref();

		var vdata = [];


		this.obj = this.af.object(dbPath);
		this.obj.update({ Inum: i });







		if (keimeno != undefined) {
			this.obj = this.af.object(dbPath + "/Data");
			this.obj.update({ Text: keimeno });

		}
		if ( gform.Data1 != ""){
		this.obj = this.af.object(dbPath + "/Data/Gform1");
		this.obj.set(gform.Data1);
		}

		if ( gform.Data2 != ""){
			this.obj = this.af.object(dbPath + "/Data/Gform2");
			this.obj.set(gform.Data2);
			}
	






		var k = 0;
		for (let i = 0; i < Audio.length; i++) {

		
			if (Audio[i].Autoplay == "Auto") {
				
				this.SetParams(StoragePath, dbPath, Audio[i].Audio, i, "AplayAudio", storageRef);

			}
			else {
			
				this.SetParams(StoragePath, dbPath, Audio[i].Audio, i, "Audio", storageRef);

			}

			

			this.Aloader = this.loadingCtrl.create({
				content: "Please wait..."
			})


			this.storeInputData(this.task, this.storagePath, this.dbpath, this.af).then(function (loader: any) {
				
			
				if (k == Audio.length - 1) {
				
					alert("Upload of Audio Complete");


				}
				k++;
			})



		}


	
		var v = 0;
		for (let i = 0; i < Videos.length; i++) {

			
			this.Loading(this.Vloader);

		
			this.SetParams(StoragePath, dbPath, Videos[i].video, i, "video", storageRef);
			this.storeInputData(this.task, this.storagePath, this.dbpath, this.af).then(function () {
			
			
				if (v == Videos.length - 1) {
				
					alert("Upload of Video Complete");


				}
				v++;
			})
			this.Loading(this.Vloader);
			this.SetParams(StoragePath, dbPath, Videos[i].thumbnail, i + "thumbnail", "video", storageRef);
			this.storeInputData(this.task, this.storagePath, this.dbpath, this.af, );

		}
		

		var im = 0;
		for (let d = 0; d < Images.length; d++) {

	 
		
			this.Loading(this.Iloader);
			this.SetParams(StoragePath, dbPath, Images[d], d, "image", storageRef);
			this.storeInputData(this.task, this.storagePath, this.dbpath, this.af).then(function () {
			
				if (im == Images.length - 1) {
					
					alert("Upload of Image Complete");


				}
				im++;
			})



		}


		i++;


		return i;




	}


	storeInputData(task, StoragePath, dbPath, af) { //Uploads data to firebase


		return new Promise(resolve => {

			task.on('state_changed',
				function progress(snapshot) {
				
					var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
					
					
					if (dbPath.includes("thumbnail") == false) {
						
						this.obj = af.object(dbPath);
						this.obj.set(StoragePath);
					}


				},
				function error(err) {
					console.log("error is:", err);
				},
				function complete() {



					resolve("");
				}
			);


		});






	}








	SetParams(StoragePath, dbPath, file, count, type, storageRef) { //Set path for firebase 

		if (type == "Data") {
			this.dataRef = storageRef.child(StoragePath + "/" + file.name);
			this.task = this.dataRef.put(file);
			this.storagePath = StoragePath + "/" + file.name;
			this.dbpath = dbPath + "/Data" + "/" + type + count;
		}

		else {
			this.dbpath = dbPath + "/Data/" + type + "Input" + count;
			this.storagePath = StoragePath + "/" + type + "Input" + count;
			this.dataRef = storageRef.child(this.storagePath);
			this.task = this.dataRef.putString(file, 'data_url');
		}

	}

	SetResponseParams(StoragePath, dbPath, file, count, type, storageRef) { //Set path for user response to poi for 
																			// upload to firebase 


		this.dbpath = dbPath + "/" + type + "Input" + count;
		this.storagePath = StoragePath + "/" + type + "Input" + count;
		this.dataRef = storageRef.child(this.storagePath);
		this.task = this.dataRef.putString(file, 'data_url');


	}




	Loading(loader) { //Shows a loader on screen
		loader.push(this.loadingCtrl.create({
			content: "Please wait..."
		})
		)


	}








}
