webpackJsonp([0],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__start_Root__ = __webpack_require__(76);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FinderPage = (function () {
    function FinderPage(events, af) {
        this.events = events;
        this.af = af;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.keys = [];
        this.Cords = [];
        this.root = new __WEBPACK_IMPORTED_MODULE_7__start_Root__["a" /* RootPage */]().DBroot();
    }
    FinderPage.prototype.RetrieveKey = function (path) {
        var _this = this;
        this.lst = this.af.list(path, { preserveSnapshot: true });
        return this.lst.map(function (snapshots) {
            snapshots.forEach(function (snapshot) {
                _this.keys.push(snapshot.key);
            });
            return _this.keys;
        });
    }; //end of Retrieve function 
    FinderPage.prototype.RetrieveSnapshot = function (path) {
        this.lst = this.af.list(path, { preserveSnapshot: true });
        return this.lst.map(function (snapshots) {
            return snapshots;
        });
    };
    FinderPage.prototype.RetrieveOnce = function (GPath) {
        //gets as argument the path of the snapshot in firebase
        return __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref(GPath).once('value').then(function (snapshot) {
            var type = snapshot.val();
            return type;
        });
    };
    FinderPage.prototype.RetrievePath = function (path, key, GameName) {
        //gets as argument the path of the snapshot tha name of scenario and its ID
        var _this = this;
        this.lst = this.af.list(path + key + "/GameName", { preserveSnapshot: true });
        return this.lst.map(function (snapshots) {
            path = path + key;
            snapshots.forEach(function (snapshot) {
                if (snapshot.key == GameName) {
                    _this.GamePath = path;
                }
                else {
                    path = _this.root;
                }
            });
            return _this.GamePath;
        });
    }; // end of RetrievePath
    FinderPage.prototype.RetrivePosition = function (GamePath) {
        this.list = this.af.list(GamePath, { preserveSnapshot: true });
        return this.list.map(function (snapshots) {
            return snapshots;
        });
    };
    FinderPage.prototype.Nearest = function (CordsArray, Currentlatlng, visited) {
        //returns the data of it
        for (var _i = 0, CordsArray_1 = CordsArray; _i < CordsArray_1.length; _i++) {
            var cord = CordsArray_1[_i];
            var latlng = new google.maps.LatLng(cord.val().Lat, cord.val().Long);
            if (visited.length == 0)
                if (Currentlatlng.equals(latlng)) {
                    var data = cord.val().Data;
                    visited.push(cord.key);
                }
            for (var _a = 0, visited_1 = visited; _a < visited_1.length; _a++) {
                var visit = visited_1[_a];
                if (visit == cord.key) {
                }
                else if (Currentlatlng.equals(latlng)) {
                    var data = cord.val().Data;
                    visited.push(cord.key);
                }
            }
        }
        return data;
    };
    FinderPage.prototype.GetVidData = function (data, key) {
        var Tkey = data[key].toString() + "thumbnail";
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
        return storageRef.child(data[key]).getDownloadURL().then(function (url) {
            return storageRef.child(Tkey).getDownloadURL().then(function (Turl) {
                var urlobj = { url: url,
                    thumbnail: Turl,
                    key: key
                };
                return urlobj;
            });
        });
    };
    FinderPage.prototype.GetData = function (data, key) {
        var autoplay;
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
        return storageRef.child(data[key]).getDownloadURL().then(function (url) {
            if (key.includes("Aplay") != false)
                autoplay = true;
            else
                autoplay = false;
            var urlobj = { url: url,
                autoplay: autoplay,
                key: key
            };
            return urlobj;
        });
    };
    FinderPage.prototype.GetUserData = function (data, key) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase__["storage"]().ref();
        return storageRef.child(data).getDownloadURL().then(function (url) {
            var urlobj = { url: url,
                key: key
            };
            return urlobj;
        });
    };
    FinderPage.prototype.ReplaceInum = function (Inums, GamePath, CordsArray) {
        var InumA = [];
        for (var _i = 0, Inums_1 = Inums; _i < Inums_1.length; _i++) {
            var Inum = Inums_1[_i];
            InumA.push(Inum.Inum);
        }
        var GamePath2 = GamePath;
        for (var _a = 0, CordsArray_2 = CordsArray; _a < CordsArray_2.length; _a++) {
            var cord = CordsArray_2[_a];
            GamePath = GamePath + "/" + cord.key;
            var obj = this.af.object(GamePath + "/Inum");
            obj.set(InumA[0]);
            InumA.shift();
            GamePath = GamePath2;
        }
    };
    return FinderPage;
}());
FinderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finder',
        templateUrl: 'finder.html'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], FinderPage);

//# sourceMappingURL=finder.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_scenario_gps_cam__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_scenario_gps_vid__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_video_editor__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_scenario_StringManipulation_string_manipulation__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_replacement__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_media_capture__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ModalPopPage = (function () {
    function ModalPopPage(videoEditor, mediaCapture, filePath, file, fileChooser, events, loadingCtrl, af, viewCtrl, navCtrl, navParams, modalCtrl) {
        this.videoEditor = videoEditor;
        this.mediaCapture = mediaCapture;
        this.filePath = filePath;
        this.file = file;
        this.fileChooser = fileChooser;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.af = af;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.Icords = { lat: '', longt: '' };
    }
    ModalPopPage.prototype.ngOnInit = function () {
        this.type = this.navParams.get('Type');
        this.GamePath = this.navParams.get('GamePath');
        this.key = this.navParams.get('Key');
        this.MarkerName = this.navParams.get('MarkerName');
        this.name = this.navParams.get('Name');
        this.visited = this.navParams.get('visited');
        var CordsArray = this.navParams.get('CordsArray');
        if (this.type == "cords") {
            this.FindCords(CordsArray);
        }
        if (this.type == "Image") {
            this.image = this.navParams.get('Blob');
        }
        if (this.type == "Video") {
            this.video = this.navParams.get('Blob');
        }
    };
    ModalPopPage.prototype.FindCords = function (CordsArray) {
        //assigns latitude and longtitude to public variables
        for (var _i = 0, CordsArray_1 = CordsArray; _i < CordsArray_1.length; _i++) {
            var cord = CordsArray_1[_i];
            if (cord.key == this.MarkerName) {
                this.lat = cord.val().Lat;
                this.longt = cord.val().Long;
            }
        }
    };
    ModalPopPage.prototype.SubmitCordinates = function () {
        new __WEBPACK_IMPORTED_MODULE_10__home_replacement__["a" /* ReplacementPage */](this.af, this.loadingCtrl).ReplaceCordinates(this.MarkerName, this.GamePath, this.Icords.lat, this.Icords.longt);
    };
    ModalPopPage.prototype.Open = function () {
        var _this = this;
        this.fileChooser.open()
            .then(function (uri) {
            console.log(uri);
            _this.filePath.resolveNativePath(uri).then(function (filePath) {
                var DataInfo = new __WEBPACK_IMPORTED_MODULE_8__create_scenario_StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CheckType(filePath);
                if (DataInfo.Type.toLowerCase() == "mp4") {
                    _this.MakeVideoThumnail(filePath, DataInfo.Name).then(function (thumbnail) {
                        _this.AddPlayIcon(thumbnail).then(function (img) {
                            new __WEBPACK_IMPORTED_MODULE_10__home_replacement__["a" /* ReplacementPage */](_this.af, _this.loadingCtrl).ReplaceData(img, _this.name + "thumbnail", _this.GamePath, _this.MarkerName, _this.key);
                            _this.res = true;
                            new __WEBPACK_IMPORTED_MODULE_5__create_scenario_gps_cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + ".mp4").then(function (FileEntry) {
                                new __WEBPACK_IMPORTED_MODULE_10__home_replacement__["a" /* ReplacementPage */](_this.af, _this.loadingCtrl).ReplaceData(FileEntry, _this.name, _this.GamePath, _this.MarkerName, _this.key);
                            });
                        });
                    });
                }
                if (DataInfo.Type.toLowerCase() == "jpg") {
                    new __WEBPACK_IMPORTED_MODULE_5__create_scenario_gps_cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + ".jpg").then(function (FileEntry) {
                        new __WEBPACK_IMPORTED_MODULE_10__home_replacement__["a" /* ReplacementPage */](_this.af, _this.loadingCtrl).ReplaceData(FileEntry, _this.name, _this.GamePath, _this.MarkerName, _this.key);
                        _this.res = true;
                    });
                }
            });
        });
    };
    ModalPopPage.prototype.MakeVideoThumnail = function (vidUri, thumbName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_6__create_scenario_gps_vid__["a" /* VidPage */](this.mediaCapture, this.videoEditor).VideoThumbnail(vidUri, thumbName).then(function (result) {
            return new __WEBPACK_IMPORTED_MODULE_5__create_scenario_gps_cam__["a" /* CamPage */](_this.file, _this.mediaCapture).ThumbdataUrl(result, thumbName).then(function (FileEntry) {
                return FileEntry;
            });
        });
    };
    ModalPopPage.prototype.AddPlayIcon = function (thumbnail) {
        return new Promise(function (resolve) {
            var c = document.createElement("canvas");
            c.width = 128;
            c.height = 128;
            var ctx = c.getContext("2d");
            var imageObj2 = new Image();
            var imageObj1 = new Image();
            imageObj1.src = thumbnail;
            imageObj2.src = "file:///android_asset/www/icon.png";
            imageObj1.onload = function () {
                ctx.drawImage(imageObj1, 0, 0, 128, 128);
                imageObj2.onload = function () {
                    ctx.drawImage(imageObj2, 39, 39, 50, 50);
                    var image = c.toDataURL("image/jpeg");
                    resolve(image);
                };
            };
        });
    };
    ModalPopPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.res);
    };
    return ModalPopPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('canvas'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ModalPopPage.prototype, "canvasEl", void 0);
ModalPopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ModalPop',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\modal\modalpop.html"*/'<ion-header>\n\n<ion-navbar>\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n <ion-title >{{type}}</ion-title> \n\n  \n\n\n\n<button color="light" ion-button clear item-end  class="mybtn" (click)="dismiss()"> Close<ion-icon md="md-close-circle"></ion-icon></button>\n\n\n\n   </ion-row>\n\n   </ion-grid>\n\n\n\n</ion-navbar>\n\n\n\n	\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<div *ngIf="type==\'cords\'" >\n\n\n\n <ion-item >\n\n   \n\n    <ion-label color="primary" stacked> Latitude: {{lat}}</ion-label>\n\n    <ion-input type="number" [(ngModel)]="Icords.lat" name="lat" placeholder="text"  ></ion-input>\n\n  \n\n  </ion-item>\n\n  \n\n   <ion-item >\n\n   \n\n    <ion-label color="primary" stacked> Longitude: {{longt}}</ion-label>\n\n    <ion-input type="number" [(ngModel)]="Icords.longt" name="longt" placeholder="text" ></ion-input>\n\n  \n\n  </ion-item>\n\n <button  ion-button   (click)="SubmitCordinates()" >submit</button>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n <div *ngIf="type==\'Image\'" text-center  padding>\n\n      <img [src]="image" alt="">\n\n    </div>\n\n	\n\n	 <div *ngIf="type==\'Video\'" text-center  padding>\n\n	  <video width="400" height="300" controls>\n\n        <source id="vid" src={{video}} type="video/mp4" >\n\n        \n\n  </video>\n\n  </div>\n\n <div  text-center >\n\n\n\n\n\n\n\n	 \n\n	 \n\n</div>\n\n\n\n  <button  ion-button *ngIf="type==\'Video\'" (click)="Open()" ><ion-icon  name="folder-open"></ion-icon> </button>\n\n \n\n	 <button ion-button   (click)="Open()" *ngIf="type==\'Image\'" ><ion-icon  name="folder-open"></ion-icon></button> \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\modal\modalpop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__ionic_native_video_editor__["a" /* VideoEditor */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], ModalPopPage);

//# sourceMappingURL=modalpop.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_media_capture__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CamPage = (function () {
    function CamPage(file, mediaCapture) {
        this.file = file;
        this.mediaCapture = mediaCapture;
    }
    CamPage.prototype.Cam = function () {
        var options = { limit: 1 };
        return this.mediaCapture.captureImage(options)
            .then(function (data) {
            console.log("Success");
            return data;
        }, function (err) {
            console.error("capture error", err);
            return false;
        });
    };
    CamPage.prototype.dataUrl = function (DirPath, Name) {
        return this.file.readAsDataURL(DirPath, Name).then(function (FileEntry) {
            console.log("Success");
            return FileEntry;
        }, function (error) {
            console.log("FileEntry error", error);
        });
    };
    CamPage.prototype.ThumbdataUrl = function (result, thumbName) {
        var Path = "file://" + result;
        var thumbPath = Path.replace(thumbName + ".jpg", "");
        return this.file.readAsDataURL(thumbPath, thumbName + ".jpg").then(function (FileEntry) {
            console.log("Success");
            return FileEntry;
        }, function (error) {
            console.log("error", error);
        });
    };
    return CamPage;
}());
CamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cam',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\gps.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Gps</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<ion-scroll scrollY="true">\n</ion-scroll>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n   <ion-refresher-content\n   \n   \n\n    refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n	 </ion-refresher>\n	\n  \n\n\n<form #formCtrl="ngForm"  >\n\n\n\n\n   \n   \n   \n   \n   \n     <ion-item>\n    <ion-label color="primary" stacked>Data</ion-label>\n    <ion-input  [(ngModel)]="gform.Data2" name="Data2" ngControl="data" placeholder="Data"></ion-input>\n  </ion-item> \n     \n       <ion-item>\n    <ion-label color="primary" stacked>Data</ion-label>\n    <ion-input    [(ngModel)]="gform.Data1" name="Data1" ngControl="data" placeholder="Data"></ion-input>\n  </ion-item>\n        \n		\n		\n \n   <ion-item radio-group   [(ngModel)]="Autoplay" name="Autoplay"  >\n    \n    <ion-label    >Autoplay</ion-label>\n	 \n   <ion-radio  (ionSelect)="Aplay()" [disabled]="chk"  value="Auto"></ion-radio>\n\n  </ion-item>\n\n	\n          <button  ion-button *ngIf="!Ispin" (click)="OpenCam()" ><ion-icon name="camera" ></ion-icon></button>\n		 \n		  <ion-spinner  *ngIf="Ispin" item-end name="dots"></ion-spinner>\n  		   \n		   <ion-spinner *ngIf="Vspin" item-start name="dots"></ion-spinner>\n            <button ion-button  *ngIf="!Vspin" (click)="OpenVid()" ><ion-icon name="film"></ion-icon></button>\n            <button ion-button   (click)="Modal()" > <ion-icon name="list-box"></ion-icon></button>\n			 <ion-spinner *ngIf="Fspin" item-start name="dots"></ion-spinner>\n		  	<button ion-button   *ngIf="!Fspin" (click)="Open()" ><ion-icon  name="folder-open"></ion-icon></button>\n			<button ion-button   (click)="beacon()" > <ion-icon   md="md-wifi"></ion-icon></button>\n			<button ion-button   (click)="Text()" > <ion-icon name="document"></ion-icon></button>\n			 \n      </form>\n\n \n <div #map id="map" style="height:60%;"></div>\n \n  <button ion-button    (click)="submitData()" >Submit</button>\n\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\gps.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_media_capture__["a" /* MediaCapture */]])
], CamPage);

//# sourceMappingURL=cam.js.map

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 177;

/***/ }),

/***/ 217:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 217;

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BeaconPage = (function () {
    function BeaconPage(viewCtrl, af, ble, navCtrl, navParams) {
        this.viewCtrl = viewCtrl;
        this.af = af;
        this.ble = ble;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.devices = [];
        this.i = 0;
        this.gform = { GameName: '' };
    }
    BeaconPage.prototype.ngAfterViewInit = function () {
        this.bluetooth();
    };
    BeaconPage.prototype.bluetooth = function () {
        this.ble.enable().then(function () {
            console.log("bluetooth is enabled");
        }, function () {
            this.ble.showBluetoothSettings();
            console.log("bluetooth is not enabled");
        });
        this.startScanning();
    };
    //Page refresh
    BeaconPage.prototype.doRefresh = function (refresher) {
        this.devices = [];
        this.startScanning();
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 4000);
    };
    BeaconPage.prototype.startScanning = function () {
        var _this = this;
        this.ble.scan([], 5).subscribe(function (device) {
            var adData = new Uint8Array(device.advertising);
            _this.devices.push(device);
            console.log("devices are:", _this.devices);
        }, function (error) {
            console.log("scan error", error);
        });
    };
    BeaconPage.prototype.list = function (deviceId) {
        this.deviceId = deviceId;
        this.dismiss();
    };
    BeaconPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.deviceId);
    };
    return BeaconPage;
}());
BeaconPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-beacon',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\beacon\beacon.html"*/'\n<ion-header>\n\n<ion-navbar>\n\n<ion-grid>\n  <ion-row>\n <ion-title >Beacons</ion-title> \n  \n<button color="light" ion-button clear item-end   (click)="dismiss()"> Close<ion-icon md="md-close-circle"></ion-icon></button>\n\n\n   </ion-row>\n   </ion-grid>\n\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n \n\n <ion-refresher (ionRefresh)="doRefresh($event)">\n   <ion-refresher-content\n   \n   \n\n    refreshingText="Searching...">\n\n    </ion-refresher-content>\n	 </ion-refresher>\n	 \n	 \n  <ion-item>\n    <ion-label fixed>Pull to Search</ion-label>\n    \n  </ion-item>\n  \n  \n  \n  <ion-item>\n   \n    <ion-label color="primary" stacked>Beacon Id</ion-label>\n    <ion-input  [(ngModel)]="deviceId" name="deviceId" placeholder="Beacon Id"    ></ion-input>\n  </ion-item>\n\n	  \n  <button ion-button    (click)="dismiss()" >Submit</button>\n<ion-list no lines >\n\n <button  ion-item  *ngFor="let beacon of devices" (click)="list(beacon.id)">\n	\n\n    <li>   ID:  {{beacon.id}} </li> \n     <li>   NAME:{{beacon.name}} </li> \n	  <li>  RSSI:{{beacon.rssi}} </li> \n	   </button>\n	\n    </ion-list>\n\n\n\n \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\beacon\beacon.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BeaconPage);

//# sourceMappingURL=beacon.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TextPage = (function () {
    function TextPage(viewCtrl, navParams, fb) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.fb = fb;
    }
    TextPage.prototype.ngOnInit = function () {
    };
    TextPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.Text);
    };
    return TextPage;
}());
TextPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-text',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\text\text.html"*/'\n\n<ion-header  >\n\n<ion-navbar >\n\n<ion-grid>\n\n  <ion-row>\n\n     <ion-title>\n\n      Text\n\n	\n\n    </ion-title>\n\n\n\n	  \n\n<button color="light" ion-button clear item-end   (click)="dismiss()"> Close<ion-icon md="md-close-circle"></ion-icon></button>\n\n </ion-row>\n\n</ion-grid>\n\n  \n\n</ion-navbar>\n\n  \n\n  \n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n <ion-item>\n\n    <ion-textarea  [(ngModel)]="Text" name="Text" placeholder="Text"   placeholder="Enter your text here"></ion-textarea>\n\n  </ion-item>\n\n\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\text\text.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], TextPage);

//# sourceMappingURL=text.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VidPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_media_capture__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_video_editor__ = __webpack_require__(70);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VidPage = (function () {
    function VidPage(mediaCapture, videoEditor) {
        this.mediaCapture = mediaCapture;
        this.videoEditor = videoEditor;
    }
    VidPage.prototype.Vid = function () {
        var options = { limit: 1 };
        return this.mediaCapture.captureVideo(options)
            .then(function (data) {
            return data;
        }, function (err) {
            console.error("error", err);
            return false;
        });
    };
    VidPage.prototype.VideoThumbnail = function (vidUri, thumbName) {
        //gets as argument the uri of video and the name of generated thumbnail
        return this.videoEditor.createThumbnail({ fileUri: vidUri, outputFileName: thumbName, width: 128, height: 128 }).then(function (result) {
            console.log('Success');
            return result;
        }, function (error) {
            console.log('error', error);
        });
    };
    return VidPage;
}());
VidPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cam',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\gps.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Gps</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<ion-scroll scrollY="true">\n</ion-scroll>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n   <ion-refresher-content\n   \n   \n\n    refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n	 </ion-refresher>\n	\n  \n\n\n<form #formCtrl="ngForm"  >\n\n\n\n\n   \n   \n   \n   \n   \n     <ion-item>\n    <ion-label color="primary" stacked>Data</ion-label>\n    <ion-input  [(ngModel)]="gform.Data2" name="Data2" ngControl="data" placeholder="Data"></ion-input>\n  </ion-item> \n     \n       <ion-item>\n    <ion-label color="primary" stacked>Data</ion-label>\n    <ion-input    [(ngModel)]="gform.Data1" name="Data1" ngControl="data" placeholder="Data"></ion-input>\n  </ion-item>\n        \n		\n		\n \n   <ion-item radio-group   [(ngModel)]="Autoplay" name="Autoplay"  >\n    \n    <ion-label    >Autoplay</ion-label>\n	 \n   <ion-radio  (ionSelect)="Aplay()" [disabled]="chk"  value="Auto"></ion-radio>\n\n  </ion-item>\n\n	\n          <button  ion-button *ngIf="!Ispin" (click)="OpenCam()" ><ion-icon name="camera" ></ion-icon></button>\n		 \n		  <ion-spinner  *ngIf="Ispin" item-end name="dots"></ion-spinner>\n  		   \n		   <ion-spinner *ngIf="Vspin" item-start name="dots"></ion-spinner>\n            <button ion-button  *ngIf="!Vspin" (click)="OpenVid()" ><ion-icon name="film"></ion-icon></button>\n            <button ion-button   (click)="Modal()" > <ion-icon name="list-box"></ion-icon></button>\n			 <ion-spinner *ngIf="Fspin" item-start name="dots"></ion-spinner>\n		  	<button ion-button   *ngIf="!Fspin" (click)="Open()" ><ion-icon  name="folder-open"></ion-icon></button>\n			<button ion-button   (click)="beacon()" > <ion-icon   md="md-wifi"></ion-icon></button>\n			<button ion-button   (click)="Text()" > <ion-icon name="document"></ion-icon></button>\n			 \n      </form>\n\n \n <div #map id="map" style="height:60%;"></div>\n \n  <button ion-button    (click)="submitData()" >Submit</button>\n\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\gps.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_video_editor__["a" /* VideoEditor */]])
], VidPage);

//# sourceMappingURL=vid.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowImagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_video_editor__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ShowImagePage = (function () {
    function ShowImagePage(videoEditor, mediaCapture, filePath, file, fileChooser, events, loadingCtrl, af, viewCtrl, navCtrl, navParams, modalCtrl) {
        this.videoEditor = videoEditor;
        this.mediaCapture = mediaCapture;
        this.filePath = filePath;
        this.file = file;
        this.fileChooser = fileChooser;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.af = af;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.Icords = { lat: '', longt: '' };
    }
    ShowImagePage.prototype.ngOnInit = function () {
        this.type = this.navParams.get('Type');
        this.GamePath = this.navParams.get('GamePath');
        this.key = this.navParams.get('Key');
        this.MarkerName = this.navParams.get('MarkerName');
        this.name = this.navParams.get('Name');
        this.visited = this.navParams.get('visited');
        var CordsArray = this.navParams.get('CordsArray');
        if (this.type == "Image") {
            this.image = this.navParams.get('Blob');
            this.check = true;
        }
        if (this.type == "Video") {
            this.video = this.navParams.get('Blob');
            this.check = false;
        }
    };
    ShowImagePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ShowImagePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('canvas'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], ShowImagePage.prototype, "canvasEl", void 0);
ShowImagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ShowImage',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\start\ShowImage.html"*/'<ion-header>\n\n<ion-navbar>\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n <ion-title >{{type}}</ion-title> \n\n  \n\n\n\n<button color="light" ion-button clear item-end  class="mybtn" (click)="dismiss()"> Close<ion-icon md="md-close-circle"></ion-icon></button>\n\n\n\n   </ion-row>\n\n   </ion-grid>\n\n\n\n</ion-navbar>\n\n\n\n	\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<div *ngIf="type==\'cords\'" >\n\n\n\n <ion-item >\n\n   \n\n    <ion-label color="primary" stacked> Latitude: {{lat}}</ion-label>\n\n    <ion-input type="password" [(ngModel)]="Icords.lat" name="lat" placeholder="text"  ></ion-input>\n\n  \n\n  </ion-item>\n\n  \n\n   <ion-item >\n\n   \n\n    <ion-label color="primary" stacked> Longitude: {{longt}}</ion-label>\n\n    <ion-input type="password" [(ngModel)]="Icords.longt" name="longt" placeholder="text" ></ion-input>\n\n  \n\n  </ion-item>\n\n <button  ion-button   (click)="SubmitCordinates()" >submit</button>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n <div *ngIf="type==\'Image\'" text-center  padding>\n\n      <img [src]="image" alt="">\n\n    </div>\n\n	\n\n	 <div *ngIf="type==\'Video\'" text-center  padding>\n\n	  <video width="400" height="300" controls>\n\n        <source id="vid" src={{video}} type="video/mp4" >\n\n        \n\n  </video>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\start\ShowImage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_video_editor__["a" /* VideoEditor */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */]])
], ShowImagePage);

//# sourceMappingURL=ShowImage.js.map

/***/ }),

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignoutPage = (function () {
    function SignoutPage(viewCtrl, appCtrl, fcm, af, navCtrl, navParams, afAuth, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.fcm = fcm;
        this.af = af;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
    }
    SignoutPage.prototype.ngOnInit = function () {
        var _this = this;
        var auth = __WEBPACK_IMPORTED_MODULE_5_firebase__["app"]("secondary").auth();
        auth.signOut().then(function () {
            // Sign-out successful.
            var index = _this.navCtrl.getActive().index;
            _this.navCtrl.remove(0, index);
            console.log("Sign-out ");
        }).catch(function (error) {
            console.log("error ", error);
        });
    };
    return SignoutPage;
}());
SignoutPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sign_out',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\registration\sign_out.html"*/''/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\registration\sign_out.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], SignoutPage);

//# sourceMappingURL=sign_out.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PoiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__finder__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__replacement__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modal_modalpop__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__start_Root__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_node_js_marker_clusterer__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_node_js_marker_clusterer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_node_js_marker_clusterer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeUntil__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_takeUntil__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var PoiPage = (function () {
    function PoiPage(events, navCtrl, modalCtrl, navParams, afAuth, af, loadingCtrl, alertCtrl) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Vdata = [];
        this.Rdata = [];
        this.Names = [];
        this.formData = [];
        this.VideoUrls = [];
        this.blobs = [];
        this.markers = [];
        this.CordsArray = [];
        this.onMap = [];
        this.nums = [];
        this.loader = [];
        this.Vloader = [];
        this.Rtext = { Data1: '', Data2: '' };
        this.InumsArray = [];
        this.Rights = [];
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_9_rxjs_Subject__["Subject"]();
    }
    PoiPage.prototype.ngOnInit = function () {
        this.root = new __WEBPACK_IMPORTED_MODULE_7__start_Root__["a" /* RootPage */]().DBroot();
        this.onMap = this.navParams.get('onMap');
        this.ngUnsubscribe = this.navParams.get('Names');
        this.CordsArray = this.navParams.get('cordsArray');
        this.GamePath = this.navParams.get('GamePath');
        this.key = this.navParams.get('key');
        this.BeaconPoi = this.navParams.get('BeaconPoi');
        this.GetInums();
        this.loadMap(this.onMap, this.BeaconPoi);
        this.GetAccuracy(this.root + this.key);
        this.GetScenarioType(this.root + this.key);
    };
    PoiPage.prototype.GetScenarioType = function (GPath) {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_2__finder__["a" /* FinderPage */](this.events, this.af).RetrieveOnce(GPath + "/ScenarioType").then(function (type) {
            _this.Scenario = type;
        });
    };
    PoiPage.prototype.GetAccuracy = function (GPath) {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_2__finder__["a" /* FinderPage */](this.events, this.af).RetrieveOnce(GPath + "/Accuracy").then(function (type) {
            _this.Accuracy = type;
        });
    };
    PoiPage.prototype.numConflict = function () {
        var alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: 'There are two numbers with the same value',
            buttons: ['Ok']
        });
        alert.present();
    };
    PoiPage.prototype.GetInums = function () {
        for (var _i = 0, _a = this.CordsArray; _i < _a.length; _i++) {
            var cords = _a[_i];
            if (cords.key.substr(0, 6) != "Marker")
                this.Names.push(cords.key);
            var InumObj = { Inum: cords.val().Inum,
                MarkerName: cords.key
            };
            this.nums.push(InumObj);
        }
    };
    PoiPage.prototype.loadMap = function (onMap, BeaconPoi) {
        var _this = this;
        var Bimg = "https://png.icons8.com/online-filled/ios7/32";
        var options = { timeout: 10000, enableHighAccuracy: true };
        if (onMap.length == 0) {
            var mapOptions = {
                center: BeaconPoi[0].latlng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        }
        else {
            var mapOptions = {
                center: onMap[0].latlng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        }
        for (var _i = 0, BeaconPoi_1 = BeaconPoi; _i < BeaconPoi_1.length; _i++) {
            var Bpoi = BeaconPoi_1[_i];
            var marker = new google.maps.Marker({});
            marker.setPosition(Bpoi.latlng);
            marker.setMap(this.map);
            marker.setIcon(Bimg);
        }
        var map = this.map;
        var markers = this.onMap.map(function (visit, i) {
            return new google.maps.Marker({
                position: visit.latlng,
                label: i.toString()
            });
        });
        var i = 0;
        var _loop_1 = function (visit) {
            markers[i].addListener('dblclick', function () { return _this.ChangeCordinates(visit.visited); });
            i++;
        };
        for (var _a = 0, onMap_1 = onMap; _a < onMap_1.length; _a++) {
            var visit = onMap_1[_a];
            _loop_1(visit);
        }
        var markerCluster = new __WEBPACK_IMPORTED_MODULE_8_node_js_marker_clusterer__(this.map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    };
    PoiPage.prototype.ChangeCordinates = function (MarkerName) {
        var blob;
        var type = "cords";
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__modal_modalpop__["a" /* ModalPopPage */], {
            Type: type,
            GamePath: this.GamePath,
            MarkerName: MarkerName,
            CordsArray: this.CordsArray,
        });
        profileModal.present();
    };
    PoiPage.prototype.IncreasingNumber = function () {
        //if it is does not make the change
        var i;
        loop1: for (var _i = 0, _a = this.nums; _i < _a.length; _i++) {
            var CheckNum = _a[_i];
            CheckNum = CheckNum.Inum;
            for (var _b = 0, _c = this.nums; _b < _c.length; _b++) {
                var num = _c[_b];
                num = num.Inum;
                if (CheckNum == num) {
                    i++;
                    if (i > 1) {
                        this.numConflict();
                        i = "not";
                        break loop1;
                    }
                }
            }
            i = 0;
        }
        if (i != "not") {
            new __WEBPACK_IMPORTED_MODULE_3__replacement__["a" /* ReplacementPage */](this.af, this.loadingCtrl).ReplaceInum(this.nums, this.GamePath, this.CordsArray);
        }
        else {
            this.nums = [];
            this.Names = [];
            this.GetInums();
        }
    };
    return PoiPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], PoiPage.prototype, "mapElement", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], PoiPage.prototype, "content", void 0);
PoiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-poi',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\home\poi.html"*/'\n\n<ion-header   >\n\n<ion-navbar  >\n\n     <ion-title>\n\n      Admin\n\n	\n\n    </ion-title>\n\n\n\n\n\n</ion-navbar>\n\n  \n\n  \n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n\n\n<ion-item no-lines>\n\n    <p>{{type}} A/A </p>\n\n </ion-item>\n\n\n\n\n\n <div *ngFor="let num of nums let i=index" >\n\n\n\n\n\n  <ion-item  >\n\n  \n\n<ion-label color="dark" >{{num.MarkerName}}</ion-label>\n\n\n\n \n\n	 <ion-input   [(ngModel)]="num.Inum" name="Enter New AA"></ion-input>\n\n</ion-item>\n\n</div>\n\n<ion-item no-lines>\n\n    <button ion-button (click)="IncreasingNumber()">submit</button>\n\n </ion-item>\n\n\n\n\n\n	 \n\n	 \n\n\n\n	  <ion-item>\n\n	 \n\n {{Scenario}}\n\n </ion-item>\n\n 		<ion-item>\n\n  <ion-label>Change Scenario Type</ion-label>\n\n  <ion-select [(ngModel)]="ScenarioType">\n\n    <ion-option value="Geo">Geographically</ion-option>\n\n    <ion-option value="Chron">Chronologically</ion-option>\n\n	\n\n  </ion-select>\n\n   \n\n</ion-item>\n\n	<ion-item no-lines>\n\n <button ion-button (click)="ReplaceValue(ScenarioType,\'ScenarioType\')">Change Scenario</button>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n  \n\n<ion-label color="dark" >Accuracy</ion-label>\n\n\n\n \n\n	 <ion-input   [(ngModel)]="Accuracy" name="Enter New Accuracy number"></ion-input>\n\n</ion-item>\n\n\n\n<ion-item no-lines>\n\n    <button ion-button (click)="ReplaceValue(Accuracy,\'Accuracy\')">Change Accuracy</button>\n\n </ion-item>\n\n\n\n\n\n\n\n\n\n <ion-list >\n\n\n\n <button  ion-item  *ngFor="let Name of Names let i=index" (click)="ChangeCordinates(Name)">\n\n	\n\n\n\n    <li>   {{Name}} </li> \n\n    \n\n	   </button>\n\n	\n\n    </ion-list>\n\n  \n\n	\n\n<div  #map id="map" style="height:60%;"></div>\n\n\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\home\poi.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PoiPage);

//# sourceMappingURL=poi.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakePoiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gps_gps__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__StringManipulation_string_manipulation__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MakePoiPage = (function () {
    function MakePoiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MakePoiPage.prototype.GoToMaps = function () {
        this.GameName = new __WEBPACK_IMPORTED_MODULE_3__StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CheckForSpace(this.GameName);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__gps_gps__["a" /* GpsPage */], { Name: this.GameName,
            Scenario: this.Stype,
            Password: this.Password,
            Accuracy: this.Accuracy });
    };
    return MakePoiPage;
}());
MakePoiPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-MakePoi',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\MakePoi\MakePoi.html"*/'<ion-header>\n  <ion-toolbar>\n\n	\n    <ion-title>\n     Points of Interest\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n\n\n\n<form #formCtrl="ngForm"  >\n\n	<ion-item>\n  <ion-label>Type</ion-label>\n  <ion-select   [(ngModel)]="Stype"  name="Stype"  ngControl="ScenarioTypeCtrl" required>\n    <ion-option     value="Geo">Geographically</ion-option>\n    <ion-option  value="Chron">Chronologically</ion-option>\n \n  </ion-select>\n</ion-item>\n\n  <ion-item>\n   \n    <ion-label color="primary" stacked>Game name</ion-label>\n    <ion-input  [(ngModel)]="GameName" name="GameName" placeholder="Name"  ngControl="GameNameCtrl" required  ></ion-input>\n  </ion-item>\n  \n<ion-item>\n   \n    <ion-label color="primary" stacked>Give a Password</ion-label>\n    <ion-input  type="password" [(ngModel)]="Password" name="Password" placeholder="Password"  ngControl="PasswordCtrl" required  ></ion-input>\n  </ion-item>\n  \n    <ion-item>\n   \n    <ion-label color="primary" stacked>Give accuracy</ion-label>\n    <ion-input  type="number"  [(ngModel)]="Accuracy" name="Acccuracy" placeholder="Accuracy"  ngControl="AccuracyCtrl" required  ></ion-input>\n  </ion-item>\n \n \n     <button ion-button [disabled]="!formCtrl.form.valid" (click)="GoToMaps()" >Create Scenario</button>\n  </form>\n\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\MakePoi\MakePoi.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], MakePoiPage);

//# sourceMappingURL=MakePoi.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GpsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cam__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StringManipulation_string_manipulation__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__text_text__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__vid__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__fire__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__beacon_beacon__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__multiplechoice__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_video_editor__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_diagnostic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_chooser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_file_path__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__start_Root__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var GpsPage = (function () {
    function GpsPage(filePath, fileChooser, videoEditor, modalCtrl, loadCtrl, diagnostic, alertCtrl, loadingCtrl, file, plt, mediaCapture, _fb, navCtrl, navParams, af, geolocation) {
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.videoEditor = videoEditor;
        this.modalCtrl = modalCtrl;
        this.loadCtrl = loadCtrl;
        this.diagnostic = diagnostic;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.file = file;
        this.plt = plt;
        this.mediaCapture = mediaCapture;
        this._fb = _fb;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.geolocation = geolocation;
        this.Vspin = false;
        this.Ispin = false;
        this.Fspin = false;
        this.chk = true;
        this.Images = [];
        this.Videos = [];
        this.markers = [];
        this.i = 0;
        this.Audio = [];
        this.Name = [];
        this.gform = { GameName: '', Data1: '', Data2: '' };
        this.root = new __WEBPACK_IMPORTED_MODULE_17__start_Root__["a" /* RootPage */]().DBroot();
        this.lst = this.af.list(this.root);
        this.id = this.lst.push('');
    }
    GpsPage.prototype.ngOnInit = function () {
        this.CheckGps();
        this.loadMap();
    };
    GpsPage.prototype.doRefresh = function (refresher) {
        this.loadMap();
        console.log('Begin async operation', refresher);
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 4000);
    };
    GpsPage.prototype.CheckGps = function () {
        var _this = this;
        this.diagnostic.isGpsLocationEnabled()
            .then(function (state) {
            if (state == false) {
                var subtitle = "Please Turn on your Gps and refresh the page";
                _this.ShowAlert(subtitle);
            }
        }).catch(function (e) { return console.error("error is:", e); });
    };
    GpsPage.prototype.ShowAlert = function (subtitle) {
        var alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    GpsPage.prototype.Open = function () {
        //for video files makes also a thumbnail
        var _this = this;
        this.chk = true;
        this.Autoplay = "";
        this.fileChooser.open()
            .then(function (uri) {
            console.log("Uri", uri);
            _this.filePath.resolveNativePath(uri).then(function (filePath) {
                var DataInfo = new __WEBPACK_IMPORTED_MODULE_5__StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CheckType(filePath);
                _this.Fspin = true;
                if (DataInfo.Type.toLowerCase() == "mp4") {
                    _this.MakeVideoThumnail(filePath, DataInfo.Name).then(function (thumbnail) {
                        new __WEBPACK_IMPORTED_MODULE_4__cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + ".mp4").then(function (FileEntry) {
                            var tmp = {
                                video: FileEntry,
                                thumbnail: thumbnail
                            };
                            _this.Videos.push(tmp);
                            _this.Fspin = false;
                        });
                    });
                }
                else {
                    if (DataInfo.Type.toLowerCase() == "jpg") {
                        new __WEBPACK_IMPORTED_MODULE_4__cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + ".jpg").then(function (FileEntry) {
                            _this.Images.push(FileEntry);
                            _this.Fspin = false;
                        });
                    }
                    else {
                        if (DataInfo.Type.toLowerCase() == "mp3")
                            new __WEBPACK_IMPORTED_MODULE_4__cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + "." + DataInfo.Type).then(function (FileEntry) {
                                _this.chk = false;
                                var tmp = {
                                    Audio: FileEntry,
                                    Autoplay: "No"
                                };
                                _this.Audio.push(tmp);
                                _this.Fspin = false;
                            });
                        else {
                            var subtitle = "Valid data types are only jpg,mp3 and mp4";
                            _this.ShowAlert(subtitle);
                            _this.Fspin = false;
                        }
                    }
                }
            });
        }, function (e) {
            console.log(e);
        });
    };
    GpsPage.prototype.Aplay = function () {
        this.Audio[this.Audio.length - 1].Autoplay = this.Autoplay;
    };
    GpsPage.prototype.OpenCam = function () {
        var _this = this;
        this.Ispin = true;
        new __WEBPACK_IMPORTED_MODULE_4__cam__["a" /* CamPage */](this.file, this.mediaCapture).Cam().then(function (imgData) {
            if (imgData == false)
                _this.Ispin = false;
            _this.filePath.resolveNativePath(imgData[0].fullPath).then(function (filePath) {
                var DataInfo = new __WEBPACK_IMPORTED_MODULE_5__StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CheckType(filePath);
                new __WEBPACK_IMPORTED_MODULE_4__cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + ".jpg").then(function (FileEntry) {
                    _this.Images.push(FileEntry);
                    _this.Ispin = false;
                });
            });
        });
    };
    GpsPage.prototype.OpenVid = function () {
        var _this = this;
        this.Vspin = true;
        new __WEBPACK_IMPORTED_MODULE_7__vid__["a" /* VidPage */](this.mediaCapture, this.videoEditor).Vid().then(function (VidData) {
            if (VidData == false)
                _this.Vspin = false;
            var vidUri = VidData[0].fullPath;
            var thumbName = VidData[0].name.substring(0, VidData[0].name.length - 4);
            _this.MakeVideoThumnail(vidUri, thumbName).then(function (thumbnail) {
                var CameraDataInfo = new __WEBPACK_IMPORTED_MODULE_5__StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CameraData(VidData);
                new __WEBPACK_IMPORTED_MODULE_4__cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(CameraDataInfo.DirPath, CameraDataInfo.Name).then(function (FileEntry) {
                    var tmp = {
                        video: FileEntry,
                        thumbnail: thumbnail
                    };
                    _this.Videos.push(tmp);
                    _this.Vspin = false;
                });
            });
        });
    };
    GpsPage.prototype.MakeVideoThumnail = function (vidUri, thumbName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_7__vid__["a" /* VidPage */](this.mediaCapture, this.videoEditor).VideoThumbnail(vidUri, thumbName).then(function (result) {
            return new __WEBPACK_IMPORTED_MODULE_4__cam__["a" /* CamPage */](_this.file, _this.mediaCapture).ThumbdataUrl(result, thumbName).then(function (FileEntry) {
                return _this.AddPlayIcon(FileEntry).then(function (thumbnail) {
                    return thumbnail;
                });
            });
        });
    };
    GpsPage.prototype.AddPlayIcon = function (thumbnail) {
        // to create a thumbnail
        return new Promise(function (resolve) {
            var c = document.createElement("canvas");
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
                    ctx.drawImage(imageObj2, 39, 39, 50, 50);
                    var image = c.toDataURL("image/jpeg");
                    resolve(image);
                };
            };
        });
    };
    GpsPage.prototype.loadMap = function () {
        var _this = this;
        var options = { timeout: 10000, enableHighAccuracy: true };
        this.geolocation.getCurrentPosition(options).then(function (position) {
            var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            var mapOptions = {
                center: latLng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            _this.map = new google.maps.Map(_this.mapElement.nativeElement, mapOptions);
            _this.MarkerStaff();
        })
            .catch(function (err) {
            console.log(err);
            google.maps.event.trigger(_this.map, 'resize');
        });
    };
    ;
    GpsPage.prototype.MarkerStaff = function () {
        var _this = this;
        this.markers[this.i] = new google.maps.Marker({});
        this.map.addListener('click', function (e) { return _this.AddMarker(e, _this.markers); });
        this.markers[this.i].addListener('dblclick', function (e) { return _this.RemoveMarker(e, _this.markers[_this.i]); });
    };
    GpsPage.prototype.AddMarker = function (e, markers) {
        var _this = this;
        var img = "https://png.icons8.com/online/ultraviolet/40"; //custom icon for beacon marker
        this.markers[this.i].setPosition(e.latLng);
        this.markers[this.i].setMap(this.map);
        var val = e.latLng.toString();
        this.latit = e.latLng.lat();
        this.longit = e.latLng.lng();
        if (this.PoiName != undefined) {
            if (this.PoiName.substring(0, 6) != "Marker") {
                this.markers[this.i].setIcon(img);
                this.markers[this.i].addListener('mousedown', function (e) { return console.log("mousedown"); });
                this.markers[this.i].addListener('mouseup', function (e) { return _this.AddMarker(e, _this.markers); });
            }
        }
        else {
            this.PoiName = "Marker" + this.i;
        }
    };
    GpsPage.prototype.RemoveMarker = function (e, markers) {
        for (var _i = 0, _a = this.markers; _i < _a.length; _i++) {
            var marker = _a[_i];
            this.latit = null;
            this.longit = null;
            if (marker.getPosition().lat() == e.latLng.lat()) {
                if (marker.getPosition().lng() == e.latLng.lng())
                    marker.setMap(null);
                if (this.id != undefined) {
                    for (var k = 0; k <= this.i; k++) {
                        this.obj = this.af.object(this.root + this.id.key + "/GameName/" + this.GameName + "/" + k, { preserveSnapshot: true });
                        this.obj.remove();
                    }
                }
                break;
            }
        }
    };
    GpsPage.prototype.submitData = function () {
        //appropriate functions
        var GameName = this.navParams.get('Name');
        var ScenarioType = this.navParams.get('Scenario');
        var Password = this.navParams.get('Password');
        var Accuracy = Password = this.navParams.get('Accuracy');
        this.StoragePath = this.root + this.id.key + "/" + this.PoiName;
        this.dbPath = this.root + this.id.key + "/GameName/" + GameName + "/" + this.PoiName;
        var ScenarioPath = this.root + this.id.key;
        if (this.PoiName != null) {
            new __WEBPACK_IMPORTED_MODULE_8__fire__["a" /* FirePage */](this.af, this.loadingCtrl, this.alertCtrl).FirebaseSet(this.dbPath, this.latit, this.longit);
            var Password = this.navParams.get('Accuracy');
            this.i = new __WEBPACK_IMPORTED_MODULE_8__fire__["a" /* FirePage */](this.af, this.loadingCtrl, this.alertCtrl).FirebaseUpload(this.keimeno, Password, this.StoragePath, this.dbPath, this.Videos, this.Images, this.Audio, this.gform, this.i, ScenarioPath, ScenarioType, this.Name, Accuracy);
            this.setToNull();
        }
        this.MarkerStaff();
    };
    GpsPage.prototype.setToNull = function () {
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
    };
    GpsPage.prototype.beacon = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_9__beacon_beacon__["a" /* BeaconPage */]);
        profileModal.onDidDismiss(function (deviceId) {
            if (deviceId != undefined) {
                _this.PoiName = deviceId;
            }
        });
        profileModal.present();
    };
    GpsPage.prototype.Text = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__text_text__["a" /* TextPage */]);
        profileModal.onDidDismiss(function (keimeno) {
            if (keimeno != undefined) {
                _this.keimeno = keimeno;
            }
        });
        profileModal.present();
    };
    GpsPage.prototype.Modal = function () {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_10__multiplechoice__["a" /* MultipleChoicePage */], { Name: this.Name });
        profileModal.onDidDismiss(function (Name, CorrectAnswer) {
            for (var k = 0; k < Name.length; k++) {
                var c = 0;
                if (!(Name[k].Title == undefined || Name[k].Title == "")) {
                    for (var i = 0; i < 3; i++) {
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
            _this.Name = Name;
        });
        profileModal.present();
    };
    return GpsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], GpsPage.prototype, "mapElement", void 0);
GpsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-gps',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\gps.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Gps</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<ion-scroll scrollY="true">\n</ion-scroll>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n   <ion-refresher-content\n   \n   \n\n    refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n	 </ion-refresher>\n	\n  \n\n\n<form #formCtrl="ngForm"  >\n\n\n\n\n   \n   \n   \n   \n   \n     <ion-item>\n    <ion-label color="primary" stacked>Data</ion-label>\n    <ion-input  [(ngModel)]="gform.Data2" name="Data2" ngControl="data" placeholder="Data"></ion-input>\n  </ion-item> \n     \n       <ion-item>\n    <ion-label color="primary" stacked>Data</ion-label>\n    <ion-input    [(ngModel)]="gform.Data1" name="Data1" ngControl="data" placeholder="Data"></ion-input>\n  </ion-item>\n        \n		\n		\n \n   <ion-item radio-group   [(ngModel)]="Autoplay" name="Autoplay"  >\n    \n    <ion-label    >Autoplay</ion-label>\n	 \n   <ion-radio  (ionSelect)="Aplay()" [disabled]="chk"  value="Auto"></ion-radio>\n\n  </ion-item>\n\n	\n          <button  ion-button *ngIf="!Ispin" (click)="OpenCam()" ><ion-icon name="camera" ></ion-icon></button>\n		 \n		  <ion-spinner  *ngIf="Ispin" item-end name="dots"></ion-spinner>\n  		   \n		   <ion-spinner *ngIf="Vspin" item-start name="dots"></ion-spinner>\n            <button ion-button  *ngIf="!Vspin" (click)="OpenVid()" ><ion-icon name="film"></ion-icon></button>\n            <button ion-button   (click)="Modal()" > <ion-icon name="list-box"></ion-icon></button>\n			 <ion-spinner *ngIf="Fspin" item-start name="dots"></ion-spinner>\n		  	<button ion-button   *ngIf="!Fspin" (click)="Open()" ><ion-icon  name="folder-open"></ion-icon></button>\n			<button ion-button   (click)="beacon()" > <ion-icon   md="md-wifi"></ion-icon></button>\n			<button ion-button   (click)="Text()" > <ion-icon name="document"></ion-icon></button>\n			 \n      </form>\n\n \n <div #map id="map" style="height:60%;"></div>\n \n  <button ion-button    (click)="submitData()" >Submit</button>\n\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\gps.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_16__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_video_editor__["a" /* VideoEditor */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_18_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_geolocation__["a" /* Geolocation */]])
], GpsPage);

//# sourceMappingURL=gps.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FirePage = (function () {
    function FirePage(af, loadingCtrl, alertCtrl) {
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Iloader = [];
        this.Vloader = [];
        this.Floader = [];
    }
    FirePage.prototype.AddUser = function (dbPath, user, token) {
        if (user != null) {
            this.obj = this.af.object(dbPath + user.uid);
            this.obj.set({ email: user.email });
        }
    };
    FirePage.prototype.FirebaseResponseSetPath = function (GamePath, dbPath, StoragePath, MultipleChoicesAnswers, id, uid) {
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
        };
        return tmp;
    };
    FirePage.prototype.FirebaseResponseUpload = function (dbPath, Videos, Images, Audio, id, StoragePath) {
        //by calling the appropriate functions
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        for (var i = 0; i < Audio.length; i++) {
            this.Loading(this.Aloader);
            this.SetResponseParams(StoragePath, dbPath, Audio[i], i, "Audio", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af);
        }
        for (var i = 0; i < Videos.length; i++) {
            this.Loading(this.Vloader);
            this.SetResponseParams(StoragePath, dbPath, Videos[i].video, i, "video", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af);
            this.Loading(this.Vloader);
            this.SetResponseParams(StoragePath, dbPath, Videos[i].thumbnail, i + "thumbnail", "video", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af);
        }
        for (var i = 0; i < Images.length; i++) {
            this.Loading(this.Iloader);
            this.SetResponseParams(StoragePath, dbPath, Images[i], i, "image", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af);
        }
    };
    FirePage.prototype.FirebaseMultipleChoiceUpload = function (clicked, path, dbpath) {
        for (var _i = 0, clicked_1 = clicked; _i < clicked_1.length; _i++) {
            var Mc = clicked_1[_i];
            this.obj = this.af.object(path + "/MultipleChoices/Answers/" + Mc.Title);
            this.obj.set(Mc.Answer);
        }
        this.obj = this.af.object(path + "/MultipleChoices/");
        this.obj.update({ MCpath: dbpath });
    };
    FirePage.prototype.FirebaseSet = function (dbPath, latit, longit) {
        this.obj = this.af.object(dbPath);
        this.obj.set({ Lat: latit, Long: longit });
    };
    //Uploads to firebase
    FirePage.prototype.FirebaseUpload = function (keimeno, Password, StoragePath, dbPath, Videos, Images, Audio, gform, i, ScenarioPath, ScenarioType, McData, Accuracy) {
        var mdbPath = dbPath + "/Data/MultipleChoices";
        this.obj = this.af.object(mdbPath);
        for (var _i = 0, McData_1 = McData; _i < McData_1.length; _i++) {
            var Name = McData_1[_i];
            for (var i_1 = 0; i_1 < 3; i_1++) {
                var num = i_1 + 1;
                this.obj = this.af.object(mdbPath + "/" + Name.Title + "/Answer" + num);
                this.obj.set(Name.Fdata[i_1]);
            }
            this.obj = this.af.object(mdbPath + "/" + Name.Title + "/CorrectAnswer");
            this.obj.set(Name.CorrectAnswer);
        }
        if (i == 0) {
            this.obj = this.af.object(ScenarioPath);
            this.obj.update({ ScenarioType: ScenarioType, Password: Password, Accuracy: Accuracy });
        }
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var vdata = [];
        this.obj = this.af.object(dbPath);
        this.obj.update({ Inum: i });
        if (keimeno != undefined) {
            this.obj = this.af.object(dbPath + "/Data");
            this.obj.update({ Text: keimeno });
        }
        if (gform.Data1 != "") {
            this.obj = this.af.object(dbPath + "/Data/Gform1");
            this.obj.set(gform.Data1);
        }
        if (gform.Data2 != "") {
            this.obj = this.af.object(dbPath + "/Data/Gform2");
            this.obj.set(gform.Data2);
        }
        var k = 0;
        for (var i_2 = 0; i_2 < Audio.length; i_2++) {
            if (Audio[i_2].Autoplay == "Auto") {
                this.SetParams(StoragePath, dbPath, Audio[i_2].Audio, i_2, "AplayAudio", storageRef);
            }
            else {
                this.SetParams(StoragePath, dbPath, Audio[i_2].Audio, i_2, "Audio", storageRef);
            }
            this.Aloader = this.loadingCtrl.create({
                content: "Please wait..."
            });
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af).then(function (loader) {
                if (k == Audio.length - 1) {
                    alert("Upload of Audio Complete");
                }
                k++;
            });
        }
        var v = 0;
        for (var i_3 = 0; i_3 < Videos.length; i_3++) {
            this.Loading(this.Vloader);
            this.SetParams(StoragePath, dbPath, Videos[i_3].video, i_3, "video", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af).then(function () {
                if (v == Videos.length - 1) {
                    alert("Upload of Video Complete");
                }
                v++;
            });
            this.Loading(this.Vloader);
            this.SetParams(StoragePath, dbPath, Videos[i_3].thumbnail, i_3 + "thumbnail", "video", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af);
        }
        var im = 0;
        for (var d = 0; d < Images.length; d++) {
            this.Loading(this.Iloader);
            this.SetParams(StoragePath, dbPath, Images[d], d, "image", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af).then(function () {
                if (im == Images.length - 1) {
                    alert("Upload of Image Complete");
                }
                im++;
            });
        }
        i++;
        return i;
    };
    FirePage.prototype.storeInputData = function (task, StoragePath, dbPath, af) {
        return new Promise(function (resolve) {
            task.on('state_changed', function progress(snapshot) {
                var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                if (dbPath.includes("thumbnail") == false) {
                    this.obj = af.object(dbPath);
                    this.obj.set(StoragePath);
                }
            }, function error(err) {
                console.log("error is:", err);
            }, function complete() {
                resolve("");
            });
        });
    };
    FirePage.prototype.SetParams = function (StoragePath, dbPath, file, count, type, storageRef) {
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
    };
    FirePage.prototype.SetResponseParams = function (StoragePath, dbPath, file, count, type, storageRef) {
        // upload to firebase 
        this.dbpath = dbPath + "/" + type + "Input" + count;
        this.storagePath = StoragePath + "/" + type + "Input" + count;
        this.dataRef = storageRef.child(this.storagePath);
        this.task = this.dataRef.putString(file, 'data_url');
    };
    FirePage.prototype.Loading = function (loader) {
        loader.push(this.loadingCtrl.create({
            content: "Please wait..."
        }));
    };
    return FirePage;
}());
FirePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cam',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\gps.html"*/'\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Gps</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n<ion-scroll scrollY="true">\n</ion-scroll>\n<ion-refresher (ionRefresh)="doRefresh($event)">\n   <ion-refresher-content\n   \n   \n\n    refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n	 </ion-refresher>\n	\n  \n\n\n<form #formCtrl="ngForm"  >\n\n\n\n\n   \n   \n   \n   \n   \n     <ion-item>\n    <ion-label color="primary" stacked>Data</ion-label>\n    <ion-input  [(ngModel)]="gform.Data2" name="Data2" ngControl="data" placeholder="Data"></ion-input>\n  </ion-item> \n     \n       <ion-item>\n    <ion-label color="primary" stacked>Data</ion-label>\n    <ion-input    [(ngModel)]="gform.Data1" name="Data1" ngControl="data" placeholder="Data"></ion-input>\n  </ion-item>\n        \n		\n		\n \n   <ion-item radio-group   [(ngModel)]="Autoplay" name="Autoplay"  >\n    \n    <ion-label    >Autoplay</ion-label>\n	 \n   <ion-radio  (ionSelect)="Aplay()" [disabled]="chk"  value="Auto"></ion-radio>\n\n  </ion-item>\n\n	\n          <button  ion-button *ngIf="!Ispin" (click)="OpenCam()" ><ion-icon name="camera" ></ion-icon></button>\n		 \n		  <ion-spinner  *ngIf="Ispin" item-end name="dots"></ion-spinner>\n  		   \n		   <ion-spinner *ngIf="Vspin" item-start name="dots"></ion-spinner>\n            <button ion-button  *ngIf="!Vspin" (click)="OpenVid()" ><ion-icon name="film"></ion-icon></button>\n            <button ion-button   (click)="Modal()" > <ion-icon name="list-box"></ion-icon></button>\n			 <ion-spinner *ngIf="Fspin" item-start name="dots"></ion-spinner>\n		  	<button ion-button   *ngIf="!Fspin" (click)="Open()" ><ion-icon  name="folder-open"></ion-icon></button>\n			<button ion-button   (click)="beacon()" > <ion-icon   md="md-wifi"></ion-icon></button>\n			<button ion-button   (click)="Text()" > <ion-icon name="document"></ion-icon></button>\n			 \n      </form>\n\n \n <div #map id="map" style="height:60%;"></div>\n \n  <button ion-button    (click)="submitData()" >Submit</button>\n\n  \n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\gps.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */]])
], FirePage);

//# sourceMappingURL=fire.js.map

/***/ }),

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultipleChoicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MultipleChoicePage = (function () {
    function MultipleChoicePage(viewCtrl, navParams, fb) {
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.fb = fb;
        this.Name = [];
        this.formData = { Data1: '', Data2: '', Data3: '' };
    }
    MultipleChoicePage.prototype.ngOnInit = function () {
        this.Name = this.navParams.get("Name"); //gets Parameters from previous page
        this.myForm = this.fb.group({
            inputData: this.fb.array([
                this.fb.group({})
            ])
        });
        this.formcrt = this.myForm.controls['inputData'];
        var temp = this.Name;
        this.Name = [];
        for (var _i = 0, temp_1 = temp; _i < temp_1.length; _i++) {
            var Name = temp_1[_i];
            this.addFields(Name);
        }
        this.DataObject();
    };
    MultipleChoicePage.prototype.addFields = function (Name) {
        if (!(Name.Title == undefined || Name.Title == "")) {
            this.Name.push(Name);
            this.formcrt.push(this.fb.group({}));
        }
    };
    MultipleChoicePage.prototype.addData = function () {
        this.DataObject();
        this.formcrt.push(this.fb.group({ multiple: [''] }));
    };
    MultipleChoicePage.prototype.removeData = function (i) {
        this.formcrt.removeAt(i);
    };
    MultipleChoicePage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.Name);
    };
    MultipleChoicePage.prototype.DataObject = function () {
        var CorrectAnswer;
        var Title;
        var formData = {};
        var tmp = { Title: Title,
            Fdata: formData,
            CorrectAnswer: CorrectAnswer
        };
        this.Name.push(tmp);
    };
    return MultipleChoicePage;
}());
MultipleChoicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-multiplechoice',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\multiplechoice.html"*/'\n\n<ion-header  >\n\n<ion-navbar >\n\n<ion-grid>\n\n  <ion-row>\n\n     <ion-title>\n\n      Multiple Choice\n\n	\n\n    </ion-title>\n\n\n\n	  \n\n<button color="light" ion-button clear item-end   (click)="dismiss()"> Close<ion-icon md="md-close-circle"></ion-icon></button>\n\n </ion-row>\n\n</ion-grid>\n\n  \n\n</ion-navbar>\n\n  \n\n  \n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding>\n\n \n\n\n\n\n\n  <div *ngFor="let address of myForm.controls.inputData.controls; let i=index">\n\n            \n\n <ion-icon  name="close" *ngIf="myForm.controls.inputData.controls.length >1" (click)="removeData(i)"></ion-icon>\n\n\n\n   <ion-item >\n\n  <ion-label color="primary" >Title</ion-label>\n\n    <ion-input    [(ngModel)]="Name[i].Title"   type="text" value=""     ></ion-input>\n\n\n\n  </ion-item>\n\n\n\n	<ion-grid>\n\n <ion-row *ngFor="let onoma of [0,1,2]; let k=index">\n\n    <ion-col >\n\n	\n\n	 <ion-item no-lines  >\n\n\n\n     <ion-input  [(ngModel)]="Name[i].Fdata[k]"  placeholder="Value" ></ion-input>\n\n\n\n  </ion-item>\n\n \n\n\n\n\n\n </ion-col>\n\n\n\n <ion-col>\n\n\n\n<ion-list radio-group [(ngModel)]="Name[i].CorrectAnswer">\n\n <ion-item  no-lines >\n\n <ion-radio    [value]="Name[i].Fdata[k]"  [disabled]="Name[i].Fdata[k]" ></ion-radio>\n\n  </ion-item>\n\n  \n\n </ion-list>\n\n   </ion-col>\n\n </ion-row>\n\n\n\n\n\n\n\n   </ion-grid>\n\n			\n\n	\n\n	    \n\n          </div>\n\n\n\n     <ion-icon  name="add"  (click)="addData()"></ion-icon>\n\n\n\n\n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\create_scenario\gps\multiplechoice.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], MultipleChoicePage);

//# sourceMappingURL=multiplechoice.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__registration__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CheckPage = (function () {
    function CheckPage(navParams, af, viewCtrl, navCtrl, afAuth) {
        this.navParams = navParams;
        this.af = af;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.Rform = { Email: "", Password: "" };
    }
    CheckPage.prototype.ngOnInit = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6_firebase__["apps"].length > 1) {
            __WEBPACK_IMPORTED_MODULE_6_firebase__["app"]("secondary").delete().then(function () {
                _this.SecondFirebase(); //initializes second firebase again
            });
        }
        else {
            this.SecondFirebase();
        }
    };
    CheckPage.prototype.SecondFirebase = function () {
        var config = {
            apiKey: "",
            authDomain: "",
            databaseURL: "",
            projectId: "",
            storageBucket: "",
            messagingSenderId: ""
        };
        var secondary = __WEBPACK_IMPORTED_MODULE_6_firebase__["initializeApp"](config, "secondary");
        var secondaryDatabase = secondary.auth();
        this.check(secondaryDatabase);
    };
    CheckPage.prototype.check = function (secondaryDatabase) {
        var _this = this;
        secondaryDatabase.onAuthStateChanged(function (user) {
            if (user) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
                console.log("Signed In");
            }
            else {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__registration__["a" /* RegistrationPage */], { auth: secondaryDatabase });
            }
        });
    };
    return CheckPage;
}());
CheckPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-check',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\registration\check.html"*/''/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\registration\check.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]])
], CheckPage);

//# sourceMappingURL=check.js.map

/***/ }),

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_scenario_MakePoi_MakePoi__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_sign_out__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_start__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_menu__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_4__home_menu__["a" /* MenuPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__start_start__["a" /* StartPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__create_scenario_MakePoi_MakePoi__["a" /* MakePoiPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_2__registration_sign_out__["a" /* SignoutPage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\tabs\tabs.html"*/'\n <ion-tabs tabsPlacement="bottom"  color="my-white">\n  <ion-tab [root]="tab1Root" tabTitle="Modify" tabIcon="cog"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Users" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Create" tabIcon="create"></ion-tab>\n   <ion-tab [root]="tab4Root" tabTitle="SignOut" tabIcon="log-out"></ion-tab>\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* NavParams */]])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_finder__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ShowImage__ = __webpack_require__(311);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var StartPage = (function () {
    function StartPage(events, modalCtrl, http, navCtrl, af, afAuth, loadingCtrl) {
        this.events = events;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.navCtrl = navCtrl;
        this.af = af;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.MultipleChoicesAnswers = [];
        this.MultipleChoices = [];
        this.VideoUrls = [];
        this.blobs = [];
        this.Privilege = [];
        this.PoiName = [];
        this.Rights = [];
        this.UserAnswers = [];
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    StartPage.prototype.ngOnInit = function () {
        this.ShowUsers();
    };
    StartPage.prototype.ShowUsers = function () {
        var _this = this;
        var path = "/User/";
        new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](this.events, this.af).RetrieveSnapshot(path).takeUntil(this.ngUnsubscribe).subscribe(function (snaps) {
            _this.snaps = snaps;
        });
    };
    StartPage.prototype.ShowDetails = function (key) {
        var _this = this;
        this.path = "/User/" + key + "/ResponseData/";
        new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](this.events, this.af).RetrieveSnapshot(this.path).takeUntil(this.ngUnsubscribe).subscribe(function (snaps) {
            _this.UserDetails = snaps;
            _this.setToNull();
        });
    };
    StartPage.prototype.UserResponses = function (Name) {
        var _this = this;
        this.setToNull();
        var path = this.path + Name;
        new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](this.events, this.af).RetrieveSnapshot(path).takeUntil(this.ngUnsubscribe).subscribe(function (snaps) {
            snaps.forEach(function (snapshot) {
                if (snapshot.key.substr(0, 4) != "Game") {
                    _this.showData(snapshot.val());
                    _this.PoiName.push(snapshot.key);
                    new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](_this.events, _this.af).RetrieveSnapshot(path + "/" + snapshot.key).takeUntil(_this.ngUnsubscribe).subscribe(function (snaps) {
                        var value;
                        snaps.forEach(function (snapshot) {
                            if (snapshot.key == "MultipleChoices") {
                                _this.UserAnswers = snapshot.val().Answers;
                                _this.Mchoices(snapshot.val().MCpath, snapshot.val().Answers);
                            }
                        });
                    });
                }
            });
        });
    };
    StartPage.prototype.Mchoices = function (path, UserAnswers) {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](this.events, this.af).RetrieveKey(path + "/Data/MultipleChoices").subscribe(function (MultipleChoicesKeys) {
            var _loop_1 = function (key) {
                if (UserAnswers[key] != undefined) {
                    tmp = { Title: key,
                        Answer: "",
                        UserAnswers: UserAnswers[key]
                    };
                    _this.MultipleChoicesAnswers.push(tmp);
                }
                new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](_this.events, _this.af).RetrivePosition(path + "/Data/MultipleChoices/" + key).subscribe(function (MultipleChoices) {
                    var CorrectAnswer;
                    var answers = [];
                    for (var _i = 0, MultipleChoices_1 = MultipleChoices; _i < MultipleChoices_1.length; _i++) {
                        var answer = MultipleChoices_1[_i];
                        if (answer.key == "CorrectAnswer")
                            CorrectAnswer = answer.val();
                        else
                            answers.push(answer.val());
                    }
                    var tmp;
                    if (UserAnswers[key] != undefined) {
                        if (UserAnswers[key] == CorrectAnswer) {
                            tmp = { Title: key,
                                Answers: answers,
                                CorrectAnswer: CorrectAnswer,
                            };
                        }
                        else {
                            tmp = { Title: key,
                                Answers: answers,
                                CorrectAnswer: CorrectAnswer,
                                UserAnswers: UserAnswers[key]
                            };
                        }
                        answers = [];
                        _this.MultipleChoices.push(tmp);
                    }
                });
            };
            var tmp;
            for (var _i = 0, MultipleChoicesKeys_1 = MultipleChoicesKeys; _i < MultipleChoicesKeys_1.length; _i++) {
                var key = MultipleChoicesKeys_1[_i];
                _loop_1(key);
            }
        });
    };
    StartPage.prototype.showData = function (data) {
        //for displaying thyem
        var _this = this;
        this.setToNull;
        for (var key in data) {
            if (key.substr(0, 1) == "v") {
                new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](this.events, this.af).GetVidData(data, key).then(function (urlobj) {
                    _this.VideoUrls.push(urlobj);
                });
            }
            if (key.substr(0, 1) == "i") {
                new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](this.events, this.af).GetData(data, key).then(function (urlobj) {
                    _this.blobs.push(urlobj);
                });
            }
            if (key.substr(0, 1) == "a") {
                new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](this.events, this.af).GetData(data, key).then(function (urlobj) {
                    _this.audio.push(urlobj);
                });
            }
        }
    };
    StartPage.prototype.setToNull = function () {
        this.PoiName = [];
        this.VideoUrls = [];
        this.blobs = [];
        this.audio = [];
        this.MultipleChoices = [];
        this.MultipleChoicesAnswers = [];
    };
    StartPage.prototype.UpdatePrivileges = function (num, uid, token, Rights) {
        var tmp = { num: num,
            uid: uid,
            token: token,
        };
        this.Privilege.push(tmp);
    };
    StartPage.prototype.ShowModalPop = function (Url, type, name) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__ShowImage__["a" /* ShowImagePage */], { Blob: Url,
            Type: type,
            Name: name,
        });
        profileModal.present();
    };
    return StartPage;
}());
StartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\start\start.html"*/'<ion-header>\n  <ion-navbar >\n    <ion-title>\n      Admin\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n\n\n <ion-list>\n<button ion-item     *ngFor="let snap of snaps" (click)="ShowDetails(snap.key)" >  \n{{snap.val().email}}\n   </button>\n   </ion-list>\n\n  \n  \n  \n  \n\n	\n<ion-grid>\n<ion-row>\n<ion-col>	  \n   <div *ngFor="let Details of UserDetails let i=index" (click)="UserResponses(Details.key)">\n	   <ion-list>\n{{Details.val().GameName}}\n</ion-list>\n</div>\n\n \n   \n	  </ion-col>\n	  </ion-row>\n	  </ion-grid>\n	  <ion-grid>\n	  \n\n	  <ion-row>\n	  \n    <ion-col *ngFor="let blob of blobs"   class="grid_img" col-4  (click)="ShowModalPop(blob.url,\'Image\',blob.key)">\n	 \n       <img [src]="blob.url" height="128" width="128" > \n      </ion-col>	\n	  </ion-row>\n	    <ion-row>\n\n      <ion-col *ngFor="let VideoUrl of VideoUrls"   class="grid_img" col-4  (click)="ShowModalPop(VideoUrl.url,\'Video\',VideoUrl.key)">\n\n\n        <img [src]="VideoUrl.thumbnail"  height="128" width="128" > \n      \n\n      </ion-col>\n\n    </ion-row>\n	<ion-row>\n	\n	    <ion-col *ngFor="let sound of audio"   class="grid_img" col-4  >\n\n\n        <audio controls >\n\n  <source src={{sound.url}} type="audio/mpeg">\n\n\n</audio>\n      \n\n      </ion-col>\n	\n	\n	\n	</ion-row>\n	<ion-row>\n	<ion-col *ngFor="let answer of MultipleChoices; let i=index" col-7>\n	\n\n\n\n \n  <ion-item no-lines>\n	\n	<ion-label>{{answer.Title}}</ion-label>\n</ion-item>\n\n  <ion-item  *ngFor="let answer of answer.Answers" no-lines >\n <ion-label   [ngClass]="{\'correctAnswer\': answer == MultipleChoices[i].CorrectAnswer,\'yourAnswer\': answer == MultipleChoices[i].UserAnswers }">{{answer}}</ion-label>\n</ion-item>\n\n	\n	\n	\n	\n	</ion-col>\n	</ion-row>\n		</ion-grid>\n	 \n</ion-content >'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\start\start.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], StartPage);

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 325:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_scenario_StringManipulation_string_manipulation__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MenuPage = (function () {
    function MenuPage(alertCtrl, diagnostic, navCtrl) {
        this.alertCtrl = alertCtrl;
        this.diagnostic = diagnostic;
        this.navCtrl = navCtrl;
    }
    MenuPage.prototype.ngOnInit = function () {
        var _this = this;
        this.diagnostic.isWifiAvailable()
            .then(function (state) {
            console.log("Success ");
            if (state == false) {
                _this.WifiAlert();
            }
        }).catch(function (e) { return console.error("error is:", e); });
    };
    MenuPage.prototype.start = function () {
        this.GameName = new __WEBPACK_IMPORTED_MODULE_4__create_scenario_StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CheckForSpace(this.GameName);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */], { Name: this.GameName });
    };
    MenuPage.prototype.WifiAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: "Please Turn on your Wifi",
            buttons: ['Ok']
        });
        alert.present();
    };
    return MenuPage;
}());
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\home\menu.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Admin\n\n    </ion-title>\n\n  </ion-navbar>\n\n\n\n\n\n</ion-header>\n\n<ion-content >\n\n\n\n\n\n\n\n<form #formCtrl="ngForm"  >\n\n\n\n             \n\n<ion-item>\n\n   \n\n    <ion-label color="primary" stacked>Game name</ion-label>\n\n    <ion-input  [(ngModel)]="GameName" name="GameName" placeholder="Name"  ngControl="GameNameCtrl" required  ></ion-input>\n\n  </ion-item>			 \n\n\n\n\n\n<button ion-button  [disabled]="!formCtrl.form.valid" (click)="start()" >submit</button>\n\n	   \n\n</form>\n\n\n\n		\n\n	 \n\n</ion-content >'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\home\menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_diagnostic__["a" /* Diagnostic */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["j" /* NavController */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finder__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__response_response__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__replacement__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__poi__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__create_scenario_gps_cam__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__modal_modalpop__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__start_Root__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__create_scenario_StringManipulation_string_manipulation__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_node_js_marker_clusterer__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_node_js_marker_clusterer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_node_js_marker_clusterer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_17_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_takeUntil__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_rxjs_add_operator_takeUntil__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




















var HomePage = (function () {
    function HomePage(events, mediaCapture, filePath, file, fileChooser, navCtrl, modalCtrl, navParams, afAuth, af, loadingCtrl, alertCtrl) {
        this.events = events;
        this.mediaCapture = mediaCapture;
        this.filePath = filePath;
        this.file = file;
        this.fileChooser = fileChooser;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.Vdata = [];
        this.Rdata = [];
        this.Names = [];
        this.formData = [];
        this.VideoUrls = [];
        this.blobs = [];
        this.BeaconPoi = [];
        this.Sounds = [];
        this.markers = [];
        this.CordsArray = [];
        this.onMap = [];
        this.loader = [];
        this.Vloader = [];
        this.Rtext = [];
        this.InumsArray = [];
        this.Rights = [];
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_17_rxjs_Subject__["Subject"]();
    }
    HomePage.prototype.ngOnInit = function () {
        this.root = new __WEBPACK_IMPORTED_MODULE_14__start_Root__["a" /* RootPage */]().DBroot();
        this.GameName = this.navParams.get('Name');
        this.Names = [];
        this.CallToFind();
    };
    HomePage.prototype.CallToFind = function () {
        var _this = this;
        this.CordsArray = [];
        this.onMap = [];
        var path = this.root;
        new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.events, this.af).RetrieveKey(path).takeUntil(this.ngUnsubscribe).subscribe(function (keys) {
            var _loop_1 = function (key) {
                new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](_this.events, _this.af).RetrievePath(path, key, _this.GameName).takeUntil(_this.ngUnsubscribe).subscribe(function (GPath) {
                    if (GPath != undefined) {
                        _this.key = key;
                        _this.GamePath = GPath + "/GameName/" + _this.GameName;
                        new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](_this.events, _this.af).RetrivePosition(_this.GamePath).takeUntil(_this.ngUnsubscribe).subscribe(function (cordinates) {
                            _this.CordsArray = cordinates;
                            _this.LatlngOnMap(_this.CordsArray);
                        });
                    }
                });
            };
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                _loop_1(key);
            }
        });
    };
    HomePage.prototype.Refresh = function () {
        this.unsub();
        this.Names = [];
        this.CallToFind();
        this.FindData(this.MarkerName);
    };
    HomePage.prototype.LatlngOnMap = function (CordsArray) {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        var Names = [];
        var BeaconPoi = [];
        for (var _i = 0, CordsArray_1 = CordsArray; _i < CordsArray_1.length; _i++) {
            var cords = CordsArray_1[_i];
            if (cords.key.substr(0, 6) != "Marker") {
                this.Names.push(cords.key);
                var latlng = new google.maps.LatLng(cords.val().Lat, cords.val().Long);
                var temp = {
                    latlng: latlng,
                    visited: cords.key
                };
                this.BeaconPoi.push(temp);
            }
            else {
                var latlng = new google.maps.LatLng(cords.val().Lat, cords.val().Long);
                var temp = {
                    latlng: latlng,
                    visited: cords.key
                };
                this.onMap.push(temp);
            }
        }
        this.loadMap(this.onMap, this.BeaconPoi);
    };
    HomePage.prototype.loadMap = function (onMap, BeaconPoi) {
        var _this = this;
        var Bimg = "https://png.icons8.com/online-filled/ios7/32";
        var options = { timeout: 10000, enableHighAccuracy: true };
        if (onMap.length == 0) {
            var mapOptions = {
                center: BeaconPoi[0].latlng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        }
        else {
            var mapOptions = {
                center: onMap[0].latlng,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
            };
            this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        }
        for (var _i = 0, BeaconPoi_1 = BeaconPoi; _i < BeaconPoi_1.length; _i++) {
            var Bpoi = BeaconPoi_1[_i];
            var marker = new google.maps.Marker({});
            marker.setPosition(Bpoi.latlng);
            marker.setMap(this.map);
            marker.setIcon(Bimg);
        }
        var map = this.map;
        var markers = onMap.map(function (visit, i) {
            return new google.maps.Marker({
                position: visit.latlng,
            });
        });
        var markerCluster = new __WEBPACK_IMPORTED_MODULE_16_node_js_marker_clusterer__(this.map, markers, // groups markers when zoom out
        { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
        var i = 0;
        var _loop_2 = function (visit) {
            markers[i].addListener('click', function () { return _this.FindData(visit.visited); });
            i++;
        };
        for (var _a = 0, onMap_1 = onMap; _a < onMap_1.length; _a++) {
            var visit = onMap_1[_a];
            _loop_2(visit);
        }
    };
    HomePage.prototype.FindData = function (visited) {
        this.check = true;
        this.MarkerName = visited;
        for (var _i = 0, _a = this.CordsArray; _i < _a.length; _i++) {
            var cord = _a[_i];
            if (cord.key == visited) {
                var data = cord.val().Data;
                this.DisplayFile(data);
            }
        }
    };
    HomePage.prototype.DisplayFile = function (data) {
        var _this = this;
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
                new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.events, this.af).GetData(data, key).then(function (audio) {
                    _this.Sounds.push(audio);
                });
            }
            if (key.substr(0, 1) == "T") {
                this.txt = data[key];
            }
            if (key.substr(0, 1) == "M") {
                this.Multiple = true;
            }
            if (key.substr(0, 1) == "G") {
                var Tobj = {
                    Text: data[key],
                    Name: key
                };
                this.formData.push(Tobj);
            }
            if (key.substr(0, 1) == "v") {
                new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.events, this.af).GetVidData(data, key).then(function (urlobj) {
                    _this.VideoUrls.push(urlobj);
                    _this.vid = true;
                });
            }
            if (key.substr(0, 1) == "i") {
                new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.events, this.af).GetData(data, key).then(function (urlobj) {
                    _this.blobs.push(urlobj);
                    _this.img = true;
                });
            }
        }
    };
    HomePage.prototype.replaceVid = function (url, name, data) {
        var tmp = {
            name: name,
            url: url,
            data: data,
        };
        this.Rdata.push(tmp);
    };
    HomePage.prototype.Up = function (name, Autoplay) {
        var _this = this;
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        this.fileChooser.open()
            .then(function (uri) {
            console.log(uri);
            _this.filePath.resolveNativePath(uri).then(function (filePath) {
                var DataInfo = new __WEBPACK_IMPORTED_MODULE_15__create_scenario_StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CheckType(filePath);
                if (DataInfo.Type == "mp3")
                    new __WEBPACK_IMPORTED_MODULE_10__create_scenario_gps_cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + "." + DataInfo.Type).then(function (FileEntry) {
                        _this.ReplaceSound = FileEntry;
                    });
            });
        });
        this.Rdata = [];
    };
    HomePage.prototype.RSound = function (name, Autoplay) {
        this.unsub();
        this.InitilaName = name;
        if (Autoplay == true) {
            if (name.includes("Aplay") == false)
                name = "Aplay" + name;
        }
        else if (name.includes("Aplay") == true)
            name = name.substring(5, name.length);
        new __WEBPACK_IMPORTED_MODULE_8__replacement__["a" /* ReplacementPage */](this.af, this.loadingCtrl).ChaneOnlyPlayOption(name, this.GamePath, this.MarkerName, this.key, this.InitilaName, this.ReplaceSound);
        this.ReplaceSound = undefined;
    };
    HomePage.prototype.text = function (txt, name) {
        this.ngUnsubscribe.next(); //unsubscribe from a subscription
        this.ngUnsubscribe.complete();
        new __WEBPACK_IMPORTED_MODULE_8__replacement__["a" /* ReplacementPage */](this.af, this.loadingCtrl).ReplaceText(txt, name, this.GamePath, this.MarkerName, this.key);
    };
    HomePage.prototype.Loading = function (loader) {
        loader.push(this.loadingCtrl.create({
            content: "Please wait...",
        }));
    };
    HomePage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Attention',
            subTitle: 'Please insert an mp3 audio',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    HomePage.prototype.Response = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__response_response__["a" /* ResponsePage */], {
            MarkerName: this.MarkerName,
            GamePath: this.GamePath
        });
    };
    HomePage.prototype.points = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__poi__["a" /* PoiPage */], {
            onMap: this.onMap,
            BeaconPoi: this.BeaconPoi,
            GamePath: this.GamePath,
            cordsArray: this.CordsArray,
            key: this.key
        });
    };
    HomePage.prototype.ClickPhoto = function (blob, type, name) {
        var _this = this;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_13__modal_modalpop__["a" /* ModalPopPage */], {
            Blob: blob,
            Type: type,
            Name: name,
            GamePath: this.GamePath,
            Key: this.key,
            MarkerName: this.MarkerName
        });
        profileModal.onDidDismiss(function (res) {
            if (res == true)
                _this.FindData(_this.MarkerName);
        });
        profileModal.present();
    };
    HomePage.prototype.unsub = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    };
    return HomePage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], HomePage.prototype, "mapElement", void 0);
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\home\home.html"*/'\n<ion-header>\n<ion-navbar>\n  \n\n<ion-grid>\n  <ion-row>\n <ion-title >Admin</ion-title> \n  \n\n<button color="light" ion-button clear item-end   (click)="Refresh()"> <ion-icon md="md-refresh"></ion-icon></button>\n\n   </ion-row>\n   </ion-grid>\n</ion-navbar>\n  \n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n<h4>{{MarkerName}}</h4>\n  \n\n  \n  <ion-grid>\n  \n    <ion-row>\n	\n      <ion-col *ngFor="let blob of blobs"   class="grid_img" col-4  (click)="ClickPhoto(blob.url,\'Image\',blob.key)">\n       <img [src]="blob.url" height="128" width="128" > \n      </ion-col>\n\n    </ion-row>\n	  \n \n    <ion-row>\n      \n      <ion-col *ngFor="let VideoUrl of VideoUrls"   class="grid_img"  col-4 (click)="ClickPhoto(VideoUrl.url,\'Video\',VideoUrl.key)">\n\n	   <img [src]="VideoUrl.thumbnail"  height="128" width="128"  > \n    \n      </ion-col>\n\n    </ion-row>\n\n		<ion-row  *ngFor="let Sound of Sounds"   >\n	  \n<ion-col style="margin-top: 13px">\n\n  <ion-item>\n    <ion-label>Autoplay</ion-label>\n    <ion-checkbox [(ngModel)]="Sound.autoplay"></ion-checkbox>\n  </ion-item>\n\n      <audio controls >\n\n  <source src={{Sound.url}} type="audio/mpeg">\n\n\n</audio>\n\n</ion-col>\n<ion-col >\n  <button ion-button color="light"  item-end (click)="Up(Sound.key,Sound.autoplay)"><ion-icon name="musical-notes"></ion-icon></button>\n<button ion-button color="light"  (click)="RSound(Sound.key,Sound.autoplay)"  >submit</button>\n\n</ion-col >\n\n	    </ion-row>\n  </ion-grid>\n\n\n\n\n<div   text-center *ngIf="txt">\n\n\n <ion-item>\n    <ion-textarea  [(ngModel)]="txt" name="Text"  ></ion-textarea>\n	  <button ion-button color="dark" clear item-end (click)="text(txt,\'Text\')">Submit</button>\n  </ion-item>\n \n</div>\n\n\n\n\n\n<div  *ngFor="let data of formData let i=index" >\n\n   \n\n	 \n	 <ion-item>\n	<ion-label color="dark" > {{data.Text}}</ion-label>\n    <ion-input   [(ngModel)]="Rtext[i]" name="Rtext"  ></ion-input>\n	\n	 <button  ion-button clear item-end (click)="text(Rtext[i],data.Name)">submit</button>\n</ion-item>\n	\n	\n	 \n    \n </div>\n\n\n\n\n <button ion-button   [disabled]="!Multiple" (click)="Response()" > <ion-icon name="list-box"></ion-icon></button>\n  <button ion-button   (click)="points()" ><ion-icon name="clipboard"></ion-icon></button>\n\n <ion-list >\n\n \n <button  ion-item  *ngFor="let Name of Names let i=index" (click)=" FindData(Name)">\n	\n\n    <li>   {{Name}} </li> \n    \n	   </button>\n	\n    </ion-list>\n  \n	\n<div  #map id="map" style="height:60%;"></div>\n\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_12_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_11_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_finder__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_replacement__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ResponsePage = (function () {
    function ResponsePage(events, navCtrl, afAuth, viewCtrl, af, loadingCtrl, navParams) {
        this.events = events;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.viewCtrl = viewCtrl;
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.Images = [];
        this.Videos = [];
        this.newMultipleChoices = [];
        this.id = "red";
        this.MultipleChoices = [];
        this.MultipleChoicesAnswers = [];
        this.MCanswrs = { ans1: '', ans2: '', ans3: '' };
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
    }
    ResponsePage.prototype.ngOnInit = function () {
        var MultipleChoicesAnswers = [];
        var MultipleChoices = [];
        this.GamePath = this.navParams.get('GamePath');
        this.MarkerName = this.navParams.get('MarkerName');
        this.path = this.GamePath + "/" + this.MarkerName + "/Data/MultipleChoices/";
        this.Mchoices(this.path, MultipleChoicesAnswers, MultipleChoices);
    };
    ResponsePage.prototype.Mchoices = function (path, MultipleChoicesAnswers, MultipleChoices) {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](this.events, this.af).RetrieveKey(path).takeUntil(this.ngUnsubscribe).subscribe(function (MultipleChoicesKeys) {
            var _loop_1 = function (key) {
                tmp = { Title: key,
                    Answer: ""
                };
                _this.MultipleChoicesAnswers.push(tmp);
                new __WEBPACK_IMPORTED_MODULE_3__home_finder__["a" /* FinderPage */](_this.events, _this.af).RetrivePosition(_this.GamePath + "/" + _this.MarkerName + "/Data/MultipleChoices/" + key).takeUntil(_this.ngUnsubscribe).subscribe(function (MultipleChoices) {
                    var CorrectAnswer;
                    var newCorrectAnswer;
                    var answers = [];
                    var newAnswers = [];
                    for (var _i = 0, MultipleChoices_1 = MultipleChoices; _i < MultipleChoices_1.length; _i++) {
                        var answer = MultipleChoices_1[_i];
                        if (answer.key != "CorrectAnswer") {
                            answers.push(answer.val());
                            newAnswers.push(null);
                        }
                        else
                            CorrectAnswer = answer.val();
                    }
                    var tmp = { Title: key,
                        Answers: answers,
                        CorrectAnswer: CorrectAnswer
                    };
                    var blankTmp = { Title: null,
                        Answers: newAnswers,
                        CorrectAnswer: null
                    };
                    answers = [];
                    _this.MultipleChoices.push(tmp);
                    _this.newMultipleChoices.push(blankTmp);
                });
            };
            var tmp;
            for (var _i = 0, MultipleChoicesKeys_1 = MultipleChoicesKeys; _i < MultipleChoicesKeys_1.length; _i++) {
                var key = MultipleChoicesKeys_1[_i];
                _loop_1(key);
            }
        });
    };
    ResponsePage.prototype.upload = function () {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        new __WEBPACK_IMPORTED_MODULE_4__home_replacement__["a" /* ReplacementPage */](this.af, this.loadingCtrl).FirebaseMultipleChoiceReplace(this.MultipleChoices, this.newMultipleChoices, this.path);
    };
    ResponsePage.prototype.SetToNull = function () {
        this.Videos = [];
        this.Images = [];
        this.MultipleChoicesAnswers[0].Answer != "";
    };
    return ResponsePage;
}());
ResponsePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-response',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\response\response.html"*/'<ion-header>\n\n   <ion-navbar>\n\n       <ion-title>Response</ion-title>\n\n  \n\n	</ion-navbar>\n\n	\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n<ion-grid *ngFor="let answer of MultipleChoices; let i=index">\n\n\n\n  <ion-item>\n\n	 \n\n	\n\n	   <ion-label color="dark" >{{answer.Title}}:</ion-label>\n\n       <ion-input    [(ngModel)]="newMultipleChoices[i].Title" placeholder="Title"></ion-input>\n\n</ion-item>\n\n\n\n\n\n\n\n\n\n<ion-row  *ngFor="let answer of answer.Answers; let k=index" >\n\n\n\n<ion-col >\n\n <ion-item>\n\n	 \n\n	\n\n	   <ion-label color="dark" >{{answer}}:</ion-label>\n\n       <ion-input    [(ngModel)]="newMultipleChoices[i].Answers[k]"  placeholder="Answer"></ion-input>\n\n</ion-item>\n\n\n\n\n\n</ion-col>\n\n\n\n\n\n\n\n</ion-row>\n\n<ion-item>\n\n	 \n\n	\n\n	   <ion-label color="danger" >CorrectAnswer: {{answer.CorrectAnswer}}</ion-label>\n\n       <ion-input    [(ngModel)]="newMultipleChoices[i].CorrectAnswer"></ion-input>\n\n</ion-item> \n\n \n\n</ion-grid>\n\n\n\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n    <button ion-button (click)="upload()" >submit</button>\n\n	\n\n	\n\n	\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n	\n\n	\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\response\response.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ResponsePage);

//# sourceMappingURL=response.js.map

/***/ }),

/***/ 328:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__create_scenario_gps_fire__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegistrationPage = (function () {
    function RegistrationPage(viewCtrl, alertCtrl, fcm, af, navCtrl, navParams, afAuth, loadingCtrl) {
        this.viewCtrl = viewCtrl;
        this.alertCtrl = alertCtrl;
        this.fcm = fcm;
        this.af = af;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.Rform = { Email: "", Password: "" };
    }
    RegistrationPage.prototype.ngOnInit = function () {
        this.secondaryDatabase = __WEBPACK_IMPORTED_MODULE_6_firebase__["app"]("secondary").auth();
        var auth = __WEBPACK_IMPORTED_MODULE_6_firebase__["app"]("secondary").auth();
    };
    RegistrationPage.prototype.Register = function () {
        var _this = this;
        this.secondaryDatabase.createUserWithEmailAndPassword(this.Rform.Email, this.Rform.Password).then(function () {
            var user = _this.secondaryDatabase.currentUser;
            var dbPath = "/Admin/";
            new __WEBPACK_IMPORTED_MODULE_4__create_scenario_gps_fire__["a" /* FirePage */](_this.af, _this.loadingCtrl, _this.alertCtrl).AddUser(dbPath, user, _this.token);
        }, function (error) {
            var errorMessage = error.message;
            _this.AlreadyExist(errorMessage);
        });
    };
    RegistrationPage.prototype.SignIn = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_6_firebase__["app"]("secondary").auth().signInWithEmailAndPassword(this.Rform.Email, this.Rform.Password).then(function () {
            var usr = __WEBPACK_IMPORTED_MODULE_6_firebase__["app"]("secondary").auth().currentUser;
        }, function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            console.log("error", errorMessage);
            _this.AlreadyExist(errorMessage);
        });
    };
    RegistrationPage.prototype.AlreadyExist = function (subtitle) {
        var alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    return RegistrationPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], RegistrationPage.prototype, "content", void 0);
RegistrationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-registration',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\registration\registration.html"*/'<ion-header color="dark">\n  <ion-toolbar  >\n  <ion-grid>\n  <ion-row>\n 	<ion-nav> </ion-nav>\n    <ion-title >\n    Register\n    </ion-title>\n \n\n  </ion-row>\n   </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  padding >\n\n\n<form #formCtrl="ngForm" >\n<ion-item >\n\n   \n    <ion-label color="primary" stacked>Email</ion-label>\n	 <ion-input type="email" [(ngModel)]="Rform.Email" name="Email" placeholder="Email "  ngControl="EmailCtrl" required  ></ion-input>\n    \n  </ion-item>\n  \n <ion-item >\n   \n    <ion-label color="primary" stacked>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="Rform.Password" name="Password" placeholder="Password "  ngControl="PasswordCtrl" required  ></ion-input>\n  \n  </ion-item>\n \n    <button ion-button [disabled]="!formCtrl.form.valid" (click)="Register()">Register</button> \n	<button ion-button [disabled]="!formCtrl.form.valid" (click)="SignIn()">Sign In</button> \n\n </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\registration\registration.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 329:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(346);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_video_editor__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_create_scenario_beacon_beacon__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_create_scenario_text_text__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_modal_modalpop__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_start_ShowImage__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_registration_sign_out__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_home_poi__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_create_scenario_MakePoi_MakePoi__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_create_scenario_gps_gps__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_create_scenario_gps_multiplechoice__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_component__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_response_response__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_menu__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_home_home__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_registration_check__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_http__ = __webpack_require__(324);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_firebase__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_start_start__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_diagnostic__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__ionic_native_geolocation__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_ble__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_registration_registration__ = __webpack_require__(328);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



































var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    storageBucket: "",
    messagingSenderId: ""
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_25__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_home_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modal_modalpop__["a" /* ModalPopPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_response_response__["a" /* ResponsePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_poi__["a" /* PoiPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_create_scenario_MakePoi_MakePoi__["a" /* MakePoiPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_create_scenario_gps_gps__["a" /* GpsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_create_scenario_beacon_beacon__["a" /* BeaconPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_create_scenario_text_text__["a" /* TextPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_create_scenario_gps_multiplechoice__["a" /* MultipleChoicePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_registration_check__["a" /* CheckPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_registration_sign_out__["a" /* SignoutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_start_ShowImage__["a" /* ShowImagePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig) //,
            //firebase.initializeApp(secondaryAppConfig, "secondary")
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_21__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_25__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_30__pages_start_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_24__pages_home_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_modal_modalpop__["a" /* ModalPopPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_response_response__["a" /* ResponsePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_home_poi__["a" /* PoiPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_create_scenario_MakePoi_MakePoi__["a" /* MakePoiPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_create_scenario_gps_gps__["a" /* GpsPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_create_scenario_beacon_beacon__["a" /* BeaconPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_create_scenario_text_text__["a" /* TextPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_create_scenario_gps_multiplechoice__["a" /* MultipleChoicePage */],
            __WEBPACK_IMPORTED_MODULE_34__pages_registration_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_registration_check__["a" /* CheckPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_registration_sign_out__["a" /* SignoutPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_start_ShowImage__["a" /* ShowImagePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_video_editor__["a" /* VideoEditor */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_29_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_http__["a" /* HTTP */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_32__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_33__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_firebase__["a" /* Firebase */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(299);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_registration_check__ = __webpack_require__(321);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        //@ViewChild(Nav) nav: Nav;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_registration_check__["a" /* CheckPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n<!--<ion-menu [content]="content" side="left" id="menu">\n\n\n\n <ion-content>\n      <ion-toolbar >\n    <ion-title>Menu </ion-title>\n  </ion-toolbar>\n  \n       <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n	   \n  </ion-content>\n\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n <ion-content>-->\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringManipulationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StringManipulationPage = (function () {
    function StringManipulationPage() {
    }
    StringManipulationPage.prototype.CheckForSpace = function (input) {
        return input.replace(/ /g, '');
    };
    StringManipulationPage.prototype.CheckType = function (filePath) {
        var a = filePath.lastIndexOf("/");
        var b = filePath.lastIndexOf(".");
        var type = filePath.substring(filePath.length, b + 1);
        var name = filePath.substring(a + 1, b);
        var DirPath = filePath.replace(name + "." + type, "");
        var DataInfo = { Type: type,
            Name: name,
            DirPath: DirPath
        };
        return DataInfo;
    };
    StringManipulationPage.prototype.CameraData = function (CamData) {
        var name = CamData[0].name;
        var path = CamData[0].fullPath;
        var DirPath = path.replace(name, "");
        var CameraDataInfo = { Name: name,
            DirPath: DirPath
        };
        return CameraDataInfo;
    };
    return StringManipulationPage;
}());
StringManipulationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-string_manipulation'
    }),
    __metadata("design:paramtypes", [])
], StringManipulationPage);

//# sourceMappingURL=string_manipulation.js.map

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RootPage = (function () {
    function RootPage() {
    }
    RootPage.prototype.DBroot = function () {
        this.root = "/Presentation/";
        return this.root;
    };
    return RootPage;
}());
RootPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        templateUrl: 'tabs.html'
    }),
    __metadata("design:paramtypes", [])
], RootPage);

//# sourceMappingURL=Root.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReplacementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__start_Root__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReplacementPage = (function () {
    function ReplacementPage(af, loadingCtrl) {
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.loader = [];
        this.root = new __WEBPACK_IMPORTED_MODULE_3__start_Root__["a" /* RootPage */]().DBroot();
    }
    ReplacementPage.prototype.ChangeRights = function (user, uid) {
        this.obj = this.af.object("/User/" + uid);
        this.obj.update({ UserType: user });
    };
    ReplacementPage.prototype.FirebaseMultipleChoiceReplace = function (MultipleChoices, newMultipleChoices, path) {
        this.obj = this.af.object(path);
        this.obj.remove();
        for (var i = 0; i < newMultipleChoices.length; i++) {
            if (newMultipleChoices[i].Title == null) {
                this.ReplaceLoop(path, newMultipleChoices[i], MultipleChoices[i], MultipleChoices[i].Title);
            }
            else {
                this.ReplaceLoop(path, newMultipleChoices[i], MultipleChoices[i], newMultipleChoices[i].Title);
            }
        }
    };
    ReplacementPage.prototype.ReplaceLoop = function (path, newMultipleChoices, MultipleChoices, Title) {
        this.obj = this.af.object(path + "/" + Title + "/CorrectAnswer");
        if (newMultipleChoices.CorrectAnswer == null)
            this.obj.set(MultipleChoices.CorrectAnswer);
        else
            this.obj.set(newMultipleChoices.CorrectAnswer);
        for (var k = 0; k < 3; k++) {
            var num = k + 1;
            this.obj = this.af.object(path + "/" + Title + "/Answer" + num);
            if (newMultipleChoices.Answers[k] == null)
                this.obj.set(MultipleChoices.Answers[k]);
            else
                this.obj.set(newMultipleChoices.Answers[k]);
        }
    };
    ReplacementPage.prototype.ReplaceText = function (txt, name, GamePath, MarkerName, key) {
        GamePath = GamePath + "/" + MarkerName;
        this.obj = this.af.object(GamePath + "/Data" + "/" + name);
        this.obj.set(txt);
    };
    ReplacementPage.prototype.ReplaceInum = function (Inums, GamePath, CordsArray) {
        var Gpath = GamePath;
        for (var _i = 0, Inums_1 = Inums; _i < Inums_1.length; _i++) {
            var Inum = Inums_1[_i];
            GamePath += "/" + Inum.MarkerName;
            this.obj = this.af.object(GamePath + "/Inum");
            this.obj.set(Inum.Inum);
            GamePath = Gpath;
        }
    };
    ReplacementPage.prototype.ReplaceCordinates = function (name, GamePath, lat, longt) {
        if (lat != "") {
            this.obj = this.af.object(GamePath + "/" + name + "/Lat");
            this.obj.set(lat);
        }
        if (longt != "") {
            this.obj = this.af.object(GamePath + "/" + name + "/Long");
            this.obj.set(longt);
        }
    };
    ReplacementPage.prototype.ChangeScenarioType = function (ScenarioType, Path, type) {
        this.obj = this.af.object(Path + "/" + type);
        this.obj.set(ScenarioType);
    };
    ReplacementPage.prototype.ChaneOnlyPlayOption = function (name, GamePath, MarkerName, key, InitialName, file) {
        var StoragePath = key + "/" + MarkerName;
        GamePath = GamePath + "/" + MarkerName;
        this.obj = this.af.object(GamePath + "/Data" + "/" + InitialName);
        this.obj.remove();
        if (file == undefined) {
            this.obj = this.af.object(GamePath + "/Data" + "/" + name);
            this.obj.set(StoragePath + "/" + name);
        }
        else {
            var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
            var dataRef = storageRef.child(StoragePath + "/" + name);
            var task;
            task = dataRef.putString(file, 'data_url');
            var loader = this.loadingCtrl.create({
                content: "Please wait...",
            });
            this.storeInputData(StoragePath, GamePath, this.af, name, task, loader).then(function () {
            });
        }
    };
    ReplacementPage.prototype.ReplaceData = function (file, name, GamePath, MarkerName, key) {
        var StoragePath = this.root + key + "/" + MarkerName;
        GamePath = GamePath + "/" + MarkerName;
        var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref();
        var dataRef = storageRef.child(StoragePath + "/" + name);
        var task;
        task = dataRef.putString(file, 'data_url');
        var loader = this.loadingCtrl.create({
            content: "Please wait...",
        });
        this.storeInputData(StoragePath, GamePath, this.af, name, task, loader);
    };
    ReplacementPage.prototype.storeInputData = function (StoragePath, GamePath, af, name, task, loader) {
        return new Promise(function (resolve, reject) {
            loader.present();
            task.on('state_changed', function progress(snapshot) {
                this.percentage = (task.snapshot.bytesTransferred / task.snapshot.totalBytes) * 100;
                console.log(this.percentage, "% of completed ");
            }, function error(err) {
                console.log("error is:", err);
            }, function complete() {
                if (name.includes("Audio") == true) {
                    this.obj = af.object(GamePath + "/Data" + "/" + name);
                    this.obj.set(StoragePath + "/" + name);
                    console.log("completed");
                }
                loader.dismiss();
            });
        });
    };
    ReplacementPage.prototype.Loading = function (loader) {
        loader.push(this.loadingCtrl.create({
            content: "Please wait..."
        }));
    };
    return ReplacementPage;
}());
ReplacementPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-replacement',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\home\home.html"*/'\n<ion-header>\n<ion-navbar>\n  \n\n<ion-grid>\n  <ion-row>\n <ion-title >Admin</ion-title> \n  \n\n<button color="light" ion-button clear item-end   (click)="Refresh()"> <ion-icon md="md-refresh"></ion-icon></button>\n\n   </ion-row>\n   </ion-grid>\n</ion-navbar>\n  \n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n<h4>{{MarkerName}}</h4>\n  \n\n  \n  <ion-grid>\n  \n    <ion-row>\n	\n      <ion-col *ngFor="let blob of blobs"   class="grid_img" col-4  (click)="ClickPhoto(blob.url,\'Image\',blob.key)">\n       <img [src]="blob.url" height="128" width="128" > \n      </ion-col>\n\n    </ion-row>\n	  \n \n    <ion-row>\n      \n      <ion-col *ngFor="let VideoUrl of VideoUrls"   class="grid_img"  col-4 (click)="ClickPhoto(VideoUrl.url,\'Video\',VideoUrl.key)">\n\n	   <img [src]="VideoUrl.thumbnail"  height="128" width="128"  > \n    \n      </ion-col>\n\n    </ion-row>\n\n		<ion-row  *ngFor="let Sound of Sounds"   >\n	  \n<ion-col style="margin-top: 13px">\n\n  <ion-item>\n    <ion-label>Autoplay</ion-label>\n    <ion-checkbox [(ngModel)]="Sound.autoplay"></ion-checkbox>\n  </ion-item>\n\n      <audio controls >\n\n  <source src={{Sound.url}} type="audio/mpeg">\n\n\n</audio>\n\n</ion-col>\n<ion-col >\n  <button ion-button color="light"  item-end (click)="Up(Sound.key,Sound.autoplay)"><ion-icon name="musical-notes"></ion-icon></button>\n<button ion-button color="light"  (click)="RSound(Sound.key,Sound.autoplay)"  >submit</button>\n\n</ion-col >\n\n	    </ion-row>\n  </ion-grid>\n\n\n\n\n<div   text-center *ngIf="txt">\n\n\n <ion-item>\n    <ion-textarea  [(ngModel)]="txt" name="Text"  ></ion-textarea>\n	  <button ion-button color="dark" clear item-end (click)="text(txt,\'Text\')">Submit</button>\n  </ion-item>\n \n</div>\n\n\n\n\n\n<div  *ngFor="let data of formData let i=index" >\n\n   \n\n	 \n	 <ion-item>\n	<ion-label color="dark" > {{data.Text}}</ion-label>\n    <ion-input   [(ngModel)]="Rtext[i]" name="Rtext"  ></ion-input>\n	\n	 <button  ion-button clear item-end (click)="text(Rtext[i],data.Name)">submit</button>\n</ion-item>\n	\n	\n	 \n    \n </div>\n\n\n\n\n <button ion-button   [disabled]="!Multiple" (click)="Response()" > <ion-icon name="list-box"></ion-icon></button>\n  <button ion-button   (click)="points()" ><ion-icon name="clipboard"></ion-icon></button>\n\n <ion-list >\n\n \n <button  ion-item  *ngFor="let Name of Names let i=index" (click)=" FindData(Name)">\n	\n\n    <li>   {{Name}} </li> \n    \n	   </button>\n	\n    </ion-list>\n  \n	\n<div  #map id="map" style="height:60%;"></div>\n\n\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\admin-git\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* LoadingController */]])
], ReplacementPage);

//# sourceMappingURL=replacement.js.map

/***/ })

},[329]);
//# sourceMappingURL=main.js.map