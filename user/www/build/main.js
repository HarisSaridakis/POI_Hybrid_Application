webpackJsonp([0],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__menu__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__registration__ = __webpack_require__(266);
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
    function CheckPage(alertCtrl, diagnostic, af, viewCtrl, navCtrl, afAuth) {
        this.alertCtrl = alertCtrl;
        this.diagnostic = diagnostic;
        this.af = af;
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
    }
    //check if gps, wifi and bluetooth are enabled
    CheckPage.prototype.ngOnInit = function () {
        var _this = this;
        this.diagnostic.isGpsLocationEnabled()
            .then(function (state) {
            if (state == false) {
                var subtitle = "Please Turn on your Gps";
                _this.LocationAlert(subtitle);
            }
        }).catch(function (e) { return console.error("Gps error is:", e); });
        this.diagnostic.isBluetoothAvailable()
            .then(function (state) {
            if (state == false) {
                var subtitle = "Please Turn on your Bluetooth";
                _this.LocationAlert(subtitle);
            }
        }).catch(function (e) { return console.error("bluetooth error is:", e); });
        this.diagnostic.isWifiAvailable()
            .then(function (state) {
            console.log("success");
            if (state == false) {
                var subtitle = "Please Turn on your wifi";
                _this.LocationAlert(subtitle);
            }
        }).catch(function (e) { return console.error("wifi error is:", e); });
        this.afAuth.auth.onAuthStateChanged(function (user) {
            if (user) {
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__menu__["a" /* MenuPage */]);
                console.log("Signed In");
            }
            else {
                console.log("Not Signed In");
                _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__registration__["a" /* RegistrationPage */], { privilege: false });
            }
        });
    };
    CheckPage.prototype.LocationAlert = function (subtitle) {
        var alert = this.alertCtrl.create({
            title: 'Warning',
            subTitle: subtitle,
            buttons: ['Ok']
        });
        alert.present();
    };
    return CheckPage;
}());
CheckPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-check',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\home\check.html"*/''/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\home\check.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__["a" /* Diagnostic */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_diagnostic__["a" /* Diagnostic */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["n" /* ViewController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* NavController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _f || Object])
], CheckPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=check.js.map

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootPage; });
/*
@Component({
  templateUrl: 'tabs.html'
})*/
var RootPage = (function () {
    function RootPage() {
    }
    RootPage.prototype.DBroot = function () {
        this.root = "/Presentation/";
        return this.root;
    };
    return RootPage;
}());

//# sourceMappingURL=Root.js.map

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPopPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
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
    function ModalPopPage(viewCtrl, navCtrl, navParams, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
    }
    ModalPopPage.prototype.ngOnInit = function () {
        this.type = this.navParams.get('Type');
        if (this.type == "Image") {
            this.image = this.navParams.get('URL');
            this.check = true;
        }
        else {
            this.video = this.navParams.get('URL');
            this.check = false;
        }
    };
    ModalPopPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalPopPage;
}());
ModalPopPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-ModalPop',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\modal\modalpop.html"*/'<ion-header>\n\n<ion-navbar>\n\n\n\n<ion-grid>\n\n  <ion-row>\n\n <ion-title >{{type}}</ion-title> \n\n  \n\n<button color="light" ion-button clear item-end   (click)="dismiss()"> Close<ion-icon md="md-close-circle"></ion-icon></button>\n\n\n\n\n\n   </ion-row>\n\n   </ion-grid>\n\n\n\n</ion-navbar>\n\n\n\n	\n\n</ion-header>\n\n\n\n<ion-content>\n\n <div *ngIf="check" text-center  padding>\n\n      <img [src]="image" alt="">\n\n    </div>\n\n	 <div *ngIf="!check" text-center  padding>\n\n	  <video width="400" height="300" controls>\n\n        <source src={{video}} type="video/mp4" >\n\n        \n\n  </video>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\modal\modalpop.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
], ModalPopPage);

//# sourceMappingURL=modalpop.js.map

/***/ }),

/***/ 147:
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
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 187:
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
webpackEmptyAsyncContext.id = 187;

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scenario_starter_scenario__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__ = __webpack_require__(265);
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
    function MenuPage(fcm, af, afAuth, navCtrl, navParams) {
        this.fcm = fcm;
        this.af = af;
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MenuPage.prototype.SignOut = function () {
        var _this = this;
        this.afAuth.auth.signOut().then(function () {
            // Sign-out successful.
            _this.navCtrl.pop();
        }).catch(function (error) {
            // An error happened.
        });
    };
    MenuPage.prototype.GoToScenario = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__scenario_starter_scenario__["a" /* ScenarioPage */]);
    };
    return MenuPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], MenuPage.prototype, "content", void 0);
MenuPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-menu',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\home\menu.html"*/'<ion-header>\n\n  <ion-toolbar >\n\n  <ion-grid>\n\n  <ion-row>\n\n \n\n    <ion-title color="dark">\n\n   Menu\n\n    </ion-title>\n\n\n\n\n\n\n\n      \n\n   <button ion-button clear item-end icon-right color="light" (click)="SignOut()" >Log out<ion-icon name="log-out"></ion-icon></button>\n\n	\n\n  \n\n\n\n  </ion-row>\n\n   </ion-grid>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content  >\n\n\n\n\n\n\n\n<div class="my-align">\n\n     \n\n   <button  color="my-color" ion-button  full (click)="GoToScenario()"  >Start Game</button>\n\n\n\n \n\n  \n\n\n\n </div> \n\n\n\n \n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\home\menu.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_firebase__["a" /* Firebase */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], MenuPage);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScenarioPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__start__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__finder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__StringManipulation_Root__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ScenarioPage = (function () {
    function ScenarioPage(alertCtrl, af, navCtrl, afAuth) {
        this.alertCtrl = alertCtrl;
        this.af = af;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.GamesArray = [];
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
    }
    ScenarioPage.prototype.ngOnInit = function () {
        this.root = new __WEBPACK_IMPORTED_MODULE_8__StringManipulation_Root__["a" /* RootPage */]().DBroot();
        this.AvailableGames();
    };
    ScenarioPage.prototype.StartGame = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__start__["a" /* StartPage */], { Digit: this.Digit, Name: this.GameName });
    };
    //Menu of scenarios
    ScenarioPage.prototype.AvailableGames = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_7__finder__["a" /* FinderPage */](this.af).RetrieveKey(this.root).subscribe(function (keys) {
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                new __WEBPACK_IMPORTED_MODULE_7__finder__["a" /* FinderPage */](_this.af).RetrieveGameName(_this.root, key).subscribe(function (Names) {
                    if (Names != undefined) {
                        _this.GamesArray.push(Names);
                    }
                });
            }
        });
    };
    //Present the appropriate promt
    ScenarioPage.prototype.presentPrompt = function (GamePath, GameName) {
        var _this = this;
        this.GameName = GameName;
        var alert = this.alertCtrl.create({
            title: 'Login',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        new __WEBPACK_IMPORTED_MODULE_7__finder__["a" /* FinderPage */](_this.af).RetrieveOnce(GamePath + "/Password").then(function (GamePassword) {
                            if (data.password == GamePassword) {
                                _this.StartGame();
                            }
                            else {
                                _this.WpresentPrompt(GamePath);
                            }
                        });
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        alert.present();
    };
    //Present the appropriate promt
    ScenarioPage.prototype.WpresentPrompt = function (GamePath) {
        var _this = this;
        var walert = this.alertCtrl.create({
            title: 'Login',
            subTitle: 'wrong password',
            inputs: [
                {
                    name: 'password',
                    placeholder: 'Password',
                    type: 'password'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        new __WEBPACK_IMPORTED_MODULE_7__finder__["a" /* FinderPage */](_this.af).RetrieveOnce(GamePath + "/Password").then(function (GamePassword) {
                            if (data.password == GamePassword) {
                                _this.StartGame();
                            }
                            else {
                                _this.WpresentPrompt(GamePath);
                            }
                        });
                    }
                }
            ],
            enableBackdropDismiss: false
        });
        walert.present();
    };
    return ScenarioPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ScenarioPage.prototype, "content", void 0);
ScenarioPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scenario',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\starter\scenario.html"*/'<ion-header>\n <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n	 \n	\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n\n\n\n<!-- <ion-item>\n   \n    <ion-label color="primary" stacked>Game name</ion-label>\n    <ion-input [(ngModel)]="GameName" name="GameName" placeholder="Name"  ></ion-input>\n  </ion-item>\n\n   <ion-item>\n   \n \n  \n  \n  \n   <button ion-button  (click)="StartGame()" >Play</button> -->\n   <!-- <ion-item>\n   <ion-label color="primary" stacked>Accuracy In Digits</ion-label>\n    <ion-input [(ngModel)]="Digit" name="Digit" placeholder="Digit"  ></ion-input>\n  </ion-item> -->\n  \n  <ion-list no lines >\n\n <button  ion-item  *ngFor="let Games of GamesArray"  (click)="presentPrompt(Games.GamePath,Games.GameName)">\n	\n\n    <li>   {{Games.GameName}}</li> \n    \n	   </button>\n	\n    </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\starter\scenario.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]])
], ScenarioPage);

//# sourceMappingURL=scenario.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_video_editor__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__finder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__beacon__ = __webpack_require__(376);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__geographically_geo__ = __webpack_require__(377);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__chronologically_chron__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__visited_AlreadyVisited__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__gps_cam__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__opencam__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_media__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__response_response__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__StringManipulation_string_manipulation__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modal_modalpop__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__settings_settings__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_background_mode__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_chooser__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_path__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__gps_fire__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_storage__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_ble__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_Subject__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_rxjs_add_operator_takeUntil__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__StringManipulation_Root__ = __webpack_require__(137);
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
    function StartPage(alertCtrl, media, nativeStorage, popoverCtrl, loadingCtrl, afAuth, filePath, fileChooser, backgroundMode, videoEditor, mediaCapture, file, modalCtrl, geolocation, navCtrl, navParams, af, ble) {
        this.alertCtrl = alertCtrl;
        this.media = media;
        this.nativeStorage = nativeStorage;
        this.popoverCtrl = popoverCtrl;
        this.loadingCtrl = loadingCtrl;
        this.afAuth = afAuth;
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.backgroundMode = backgroundMode;
        this.videoEditor = videoEditor;
        this.mediaCapture = mediaCapture;
        this.file = file;
        this.modalCtrl = modalCtrl;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.ble = ble;
        this.formData = [];
        this.blobs = [];
        this.VideoUrls = [];
        this.notvisited = [];
        this.CordsArray = [];
        this.visitedInfo = [];
        this.markers = [];
        this.Images = [];
        this.Audio = [];
        this.Sounds = [];
        this.AutoSounds = [];
        this.Videos = [];
        this.data = "stop";
        this.BIDs = [];
        this.InumArray = [];
        this.MapCords = [];
        this.MCvisited = [];
        this.Icnt = 0;
        this.Vcnt = 0;
        this.Acnt = 0;
        this.ngUnsubscribe = new __WEBPACK_IMPORTED_MODULE_26_rxjs_Subject__["Subject"]();
    }
    StartPage.prototype.ngOnInit = function () {
        this.root = new __WEBPACK_IMPORTED_MODULE_28__StringManipulation_Root__["a" /* RootPage */]().DBroot();
        this.nativeStorage.keys()
            .then(function (keys) {
            console.log("success");
        }, function (error) { return console.error("keys error", error); });
        this.backgroundMode.enable();
        this.backgroundMode.disableWebViewOptimizations();
        this.FindMyPosition();
    };
    StartPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_18__settings_settings__["a" /* SettingsPage */], { geo: this.geo });
        popover.present({
            ev: myEvent
        });
    };
    StartPage.prototype.CheckAlert = function (subtitle) {
        var alert = this.alertCtrl.create({
            title: 'Low battery',
            subTitle: subtitle,
            buttons: ['Dismiss']
        });
        alert.present();
    };
    StartPage.prototype.FindMyPosition = function () {
        var _this = this;
        var path = "/test/";
        var GameName = this.navParams.get('Name');
        new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.af).RetrieveKey(this.root).takeUntil(this.ngUnsubscribe).subscribe(function (keys) {
            var _loop_1 = function (key) {
                new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](_this.af).RetrievePath(_this.root, key, GameName).takeUntil(_this.ngUnsubscribe).subscribe(function (GPath) {
                    if (GPath != undefined) {
                        _this.id = key;
                        _this.GamePath = GPath + "/GameName/" + GameName;
                        _this.GetScenarioType(GPath, GameName);
                    }
                });
            };
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                _loop_1(key);
            }
        });
    };
    StartPage.prototype.GetScenarioType = function (GPath, GameName) {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.af).RetrieveOnce(GPath + "/ScenarioType").then(function (type) {
            _this.Scenario = type;
            _this.IamIn(GameName);
            _this.GetAccuracy(GPath);
            _this.Position();
        });
    };
    StartPage.prototype.GetAccuracy = function (GPath) {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.af).RetrieveOnce(GPath + "/Accuracy").then(function (type) {
            _this.accuracy = type;
        });
    };
    StartPage.prototype.IamIn = function (GameName) {
        var usr = this.afAuth.auth.currentUser;
        this.lst = this.af.list("/User/" + usr.uid + "/ResponseData");
        this.newid = this.lst.push('');
        this.obj = this.af.object("/User/" + usr.uid + "/ResponseData/" + this.newid.key);
        this.obj.set({ GamePath: this.GamePath, GameName: GameName });
    };
    StartPage.prototype.Position = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.af).RetrivePosition(this.GamePath).takeUntil(this.ngUnsubscribe).subscribe(function (Cords) {
            _this.CordsArray = Cords;
            for (var _i = 0, Cords_1 = Cords; _i < Cords_1.length; _i++) {
                var Cord = Cords_1[_i];
                _this.InumArray.push(Cord.val().Inum);
                new __WEBPACK_IMPORTED_MODULE_10__chronologically_chron__["a" /* ChronPage */](_this.navCtrl, _this.navParams, _this.af, _this.ble).LowNum(_this.InumArray);
                var latlng = new google.maps.LatLng(Cord.val().Lat, Cord.val().Long);
                var PoiName = Cord.key;
                var Inum = Cord.val().Inum;
                var obj = {
                    PoiName: PoiName,
                    latlng: latlng,
                    Inum: Inum
                };
                _this.MapCords.push(obj);
            }
            new __WEBPACK_IMPORTED_MODULE_10__chronologically_chron__["a" /* ChronPage */](_this.navCtrl, _this.navParams, _this.af, _this.ble).LowestNum(_this.MapCords);
            _this.loadMap(_this.visitedInfo, _this.MapCords);
            _this.watch();
        });
    };
    StartPage.prototype.beacons = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_8__beacon__["a" /* BeaconPage */](this.navCtrl, this.navParams, this.af, this.ble).startScanning().then(function (devices) {
            _this.devices = devices;
        });
    };
    StartPage.prototype.watch = function () {
        var _this = this;
        this.geo = this.geolocation.watchPosition({ timeout: 5000, enableHighAccuracy: true }).subscribe(function (position) {
            _this.Currentlatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
            _this.MyMarker.setPosition(_this.Currentlatlng);
            _this.ScenarioType();
            new __WEBPACK_IMPORTED_MODULE_8__beacon__["a" /* BeaconPage */](_this.navCtrl, _this.navParams, _this.af, _this.ble).startScanning().then(function (devices) {
                _this.devices = devices;
            });
        }, function (error) { console.log("geolocation error", error); });
    };
    StartPage.prototype.ScenarioType = function () {
        var Data;
        if (this.data != "stop") {
            this.Multiples = false;
            this.visited = undefined;
            if (this.Scenario == "Chron") {
                Data = new __WEBPACK_IMPORTED_MODULE_10__chronologically_chron__["a" /* ChronPage */](this.navCtrl, this.navParams, this.af, this.ble).startchron(this.accuracy, this.InumArray, this.CordsArray, this.Currentlatlng, this.visitedInfo, this.devices, this.BIDs);
                this.backgroundMode.enable();
                this.backgroundMode.disableWebViewOptimizations();
                if (Data != undefined) {
                    this.visited = this.visitedInfo[this.visitedInfo.length - 1].visited;
                    this.data = "stop";
                    this.search = false;
                    this.RingMyBell();
                    this.MarkersSet(this.visitedInfo, this.MapCords);
                    this.DisplayFile(Data);
                }
            }
            if (this.Scenario == "Geo") {
                Data = new __WEBPACK_IMPORTED_MODULE_9__geographically_geo__["a" /* GeoPage */](this.geolocation, this.navCtrl, this.navParams, this.af, this.ble).startgeo(this.accuracy, this.CordsArray, this.Currentlatlng, this.visitedInfo, this.devices, this.BIDs);
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
    };
    StartPage.prototype.FindData = function (visited) {
        this.visited = visited;
        this.data = "stop";
        this.Multiples = false;
        this.search = false;
        for (var _i = 0, _a = this.CordsArray; _i < _a.length; _i++) {
            var cord = _a[_i];
            if (cord.key == visited) {
                var data = cord.val().Data;
                this.setToNull();
                this.DisplayFile(data);
            }
        }
    };
    StartPage.prototype.AlreadyVisited = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__visited_AlreadyVisited__["a" /* AlreadyVisitedPage */], {
            Name: this.visitedInfo,
            CordsArray: this.CordsArray,
            GameType: this.GameType,
            MapCords: this.MapCords
        });
    };
    StartPage.prototype.RingMyBell = function () {
        var _this = this;
        this.nativeStorage.getItem('ring')
            .then(function (data) {
            _this.play(data);
        }, function (error) {
            console.error("error", error);
            var dt = "file:///android_asset/www/audio/ring.mp3";
            _this.play(dt);
        });
    };
    StartPage.prototype.play = function (data) {
        var sound = this.media.create(data);
        sound.onStatusUpdate.subscribe(function (status) { return console.log(status); }); // fires when file status changes
        sound.onSuccess.subscribe(function () { return console.log('Action is successful'); });
        sound.onError.subscribe(function (error) { return console.log('Error!', error); });
        sound.play();
    };
    // Puts data to arrays/ variables to display it on screen
    StartPage.prototype.DisplayFile = function (data) {
        var _this = this;
        this.setToNull();
        for (var key in data) {
            if (key.substr(0, 1) == "T") {
                this.text = data[key];
            }
            if (key.substr(0, 1) == "A") {
                if (key.substr(0, 2) == "Ap") {
                    new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.af).GetData(data, key).then(function (audio) {
                        _this.Sounds.push(audio);
                    });
                }
                else {
                    new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.af).GetData(data, key).then(function (audio) {
                        _this.AutoSounds.push(audio);
                    });
                }
            }
            if (key.substr(0, 1) == "G") {
                this.formData.push(data[key]);
            }
            if (key.substr(0, 1) == "v") {
                new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.af).GetVidData(data, key).then(function (url) {
                    _this.VideoUrls.push(url);
                });
            }
            if (key.substr(0, 1) == "i") {
                new __WEBPACK_IMPORTED_MODULE_6__finder__["a" /* FinderPage */](this.af).GetData(data, key).then(function (img) {
                    _this.blobs.push(img);
                });
            }
            if (key.substr(0, 1) == "M") {
                this.Multiples = true;
            }
        }
    };
    StartPage.prototype.setToNull = function () {
        this.VideoUrls = [];
        this.blobs = [];
        this.formData = [];
        this.Sounds = [];
        this.AutoSounds = [];
        this.text = "";
        this.Videos = [];
        this.Images = [];
        this.Audio = [];
    };
    StartPage.prototype.loadMap = function (visitedInfo, MapCords) {
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
        var options = { timeout: 10000, enableHighAccuracy: true };
        var mapOptions = {
            center: MapCords[0].latlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        this.MarkersSet(visitedInfo, MapCords);
    };
    StartPage.prototype.MarkersSet = function (visitedInfo, MapCords) {
        var _this = this;
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
        var num;
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
            for (var i = 0; i < MapCords.length; i++) {
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
            var _loop_2 = function (i) {
                map.setCenter(visitedInfo[i].latlng);
                markers = new google.maps.Marker({});
                markers.setPosition(visitedInfo[i].latlng);
                markers.setMap(map);
                markers.addListener('dblclick', function () { return _this.FindData(visitedInfo[i].visited); });
                if (visitedInfo[i].visited.substring(0, 6) != "Marker")
                    markers.setIcon(VBimg);
                else
                    markers.setIcon(VMimg);
            };
            for (var i = 0; i < visitedInfo.length; i++) {
                _loop_2(i);
            }
        }
    };
    StartPage.prototype.GetPhoto = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_13__opencam__["a" /* OpenCamPage */](this.filePath, this.fileChooser, this.navParams, this.videoEditor, this.mediaCapture, this.file, this.modalCtrl).OpenCam().then(function (img) {
            _this.Images.push(img);
            _this.upload();
        });
    };
    StartPage.prototype.GetData = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_13__opencam__["a" /* OpenCamPage */](this.filePath, this.fileChooser, this.navParams, this.videoEditor, this.mediaCapture, this.file, this.modalCtrl).Open().then(function (filePath) {
            var DataInfo = new __WEBPACK_IMPORTED_MODULE_16__StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CheckType(filePath);
            new __WEBPACK_IMPORTED_MODULE_12__gps_cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(DataInfo.DirPath, DataInfo.Name + "." + DataInfo.Type).then(function (FileEntry) {
                _this.DataType(DataInfo, FileEntry, filePath);
            });
        });
    };
    //Check the type of imported data if it is not the appropriate rejects it
    StartPage.prototype.DataType = function (DataInfo, FileEntry, filePath) {
        var _this = this;
        switch (DataInfo.Type) {
            case "mp4":
                new __WEBPACK_IMPORTED_MODULE_13__opencam__["a" /* OpenCamPage */](this.filePath, this.fileChooser, this.navParams, this.videoEditor, this.mediaCapture, this.file, this.modalCtrl).MakeVideoThumnail(filePath, DataInfo.Name).then(function (thumbnail) {
                    var tmp = {
                        video: FileEntry,
                        thumbnail: thumbnail
                    };
                    _this.Videos.push(tmp);
                    _this.upload();
                });
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
    };
    StartPage.prototype.GetVideo = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_13__opencam__["a" /* OpenCamPage */](this.filePath, this.fileChooser, this.navParams, this.videoEditor, this.mediaCapture, this.file, this.modalCtrl).OpenVid().then(function (vid) {
            _this.Videos.push(vid);
            _this.upload();
        });
    };
    StartPage.prototype.upload = function () {
        var usr = this.afAuth.auth.currentUser;
        var dbPath = "/User/" + usr.uid + "/ResponseData/" + this.newid.key + "/" + this.visitedInfo[this.visitedInfo.length - 1].visited;
        var StoragePath = "/User/" + this.newid.key + "/" + this.visitedInfo[this.visitedInfo.length - 1].visited;
        var counters = new __WEBPACK_IMPORTED_MODULE_23__gps_fire__["a" /* FirePage */](this.af, this.loadingCtrl).FirebaseResponseUpload(dbPath, this.Videos, this.Images, this.Audio, this.id, StoragePath, this.Icnt, this.Vcnt, this.Acnt);
        this.Icnt = counters.Icnt;
        this.Vcnt = counters.Vcnt;
        this.Acnt = counters.Acnt;
        this.setToNull();
    };
    StartPage.prototype.Response = function () {
        var _this = this;
        var dbPath;
        dbPath = this.GamePath + "/" + this.visited;
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_15__response_response__["a" /* ResponsePage */], {
            id: this.id,
            GamePath: this.GamePath,
            dbPath: dbPath,
            MCvisited: this.MCvisited,
            CurrentPoi: this.visited
        });
        profileModal.onDidDismiss(function (results, check) {
            if (check == "false") {
                _this.MCvisited.push({
                    Name: _this.visited,
                    MultipleChoices: results[0].MultipleChoices,
                    MultipleChoicesAnswers: results[0].MultipleChoicesAnswers
                });
                var usr = _this.afAuth.auth.currentUser;
                var usrid = usr.uid;
                var newid = _this.newid.key;
                var path = "/User/" + usr.uid + "/ResponseData/" + newid + "/" + _this.visited;
                new __WEBPACK_IMPORTED_MODULE_23__gps_fire__["a" /* FirePage */](_this.af, _this.loadingCtrl).FirebaseMultipleChoiceUpload(results[0].MultipleChoicesAnswers, path, dbPath);
            }
        });
        profileModal.present();
    };
    StartPage.prototype.pressPhoto = function (blob, type) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_17__modal_modalpop__["a" /* ModalPopPage */], {
            URL: blob,
            Type: type
        });
        profileModal.present();
    };
    return StartPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], StartPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], StartPage.prototype, "mapElement", void 0);
StartPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-start',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\starter\start.html"*/'<ion-header >\n   <ion-toolbar>\n   	\n<ion-grid>\n  <ion-row>\n  \n	  <ion-title>{{Scenario}}</ion-title> \n\n<button ion-button clear item-end  color="light" icon-right     (click)="FauxRefresh()" [disabled]="search" ><ion-icon  name="play"></ion-icon></button>\n  <button ion-button clear item-end  color="light" icon-right  (click)="StopSearch()"   [disabled]="!search"  ><ion-icon  name="square"></ion-icon></button>\n  \n  <button ion-button clear item-end  color="light" icon-right  (click)="presentPopover($event)"   ><ion-icon  name="settings"></ion-icon></button>\n\n  </ion-row>\n</ion-grid>\n\n	</ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n\n\n<ion-scroll scrollY="true">\n </ion-scroll>\n\n  <ion-grid>\n \n    <ion-row>\n	\n      <ion-col *ngFor="let blob of blobs"   class="grid_img" col-4 (click)="pressPhoto(blob,\'Image\')">\n       <img [src]="blob" height="128" width="128" > \n      </ion-col>\n\n    </ion-row>\n\n	   \n    <ion-row>\n  \n      <ion-col *ngFor="let VideoUrl of VideoUrls"   class="grid_img" col-4 (click)="pressPhoto(VideoUrl.url,\'Video\')">\n\n\n        <img [src]="VideoUrl.thumbnail"  height="128" width="128" > \n      \n\n      </ion-col>\n\n    </ion-row>\n	    \n	  <ion-row *ngFor="let sound of Sounds"   class="grid_img" col-4 >\n	    <ion-col >\n\n\n      <audio controls autoplay>\n\n  <source src={{sound}} type="audio/mpeg">\n\n</audio>\n      \n\n      </ion-col>\n	    </ion-row>\n		    \n		<ion-row *ngFor="let AutoSound of AutoSounds"   class="grid_img" col-4>\n	    <ion-col >\n\n\n      <audio controls >\n\n  <source src={{AutoSound}} type="audio/mpeg">\n\n</audio>\n      \n\n      </ion-col>\n	    </ion-row>\n  </ion-grid> \n  \n\n<div   text-center>\n\n<p> {{text}} </p>\n \n</div> \n\n<div *ngFor="let data of formData" text-center>\n  <ion-item no-lines>\n\n   \n\n<p> {{data}} </p>\n \n	 </ion-item>\n</div> \n\n <ion-list no lines >\n\n <button  ion-item  *ngFor="let id of BIDs" (click)="FindData(id)">\n	\n\n    <li>   ID:  {{id}} </li> \n    \n	   </button>\n	\n    </ion-list>\n \n \n	\n<div #map id="map" style="height:80%;"></div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar  color="my-white">\n   	<ion-grid>\n  <ion-row>\n\n <ion-col >\n	 <button ion-button clear item-end   [disabled]="!Multiples" color="dark" icon-right (click)="Response()" >  <ion-icon name="list-box"></ion-icon></button> \n	\n</ion-col>\n <ion-col >\n <button ion-button clear item-end color="dark" icon-right [disabled]="!visited"(click)="GetPhoto()" ><ion-icon name="camera" ></ion-icon></button>\n  </ion-col >\n   <ion-col >\n <button ion-button clear item-end color="dark" icon-right [disabled]="!visited"(click)="GetVideo()" ><ion-icon name="film"></ion-icon></button>\n  </ion-col >\n     <ion-col >\n<button ion-button clear item-end  color="dark" icon-right [disabled]="!visited" (click)="GetData()"  ><ion-icon  name="folder"></ion-icon></button>\n\n	   </ion-col >\n     </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\starter\start.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_20_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_21__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_background_mode__["a" /* BackgroundMode */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_video_editor__["a" /* VideoEditor */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_ble__["a" /* BLE */]])
], StartPage);

//# sourceMappingURL=start.js.map

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChronPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ChronPage = (function () {
    function ChronPage(navCtrl, navParams, af, ble) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.ble = ble;
    }
    ChronPage.prototype.LowestNum = function (MapCords) {
        MapCords.sort(function (a, b) {
            return a.Inum - b.Inum;
        });
    };
    ChronPage.prototype.LowNum = function (InumArray) {
        InumArray.sort(function (a, b) { return a - b; });
    };
    // Starts chronoligicall scenario
    ChronPage.prototype.startchron = function (accuracy, InumArray, CordsArray, Currentlatlng, visitedInfo, devices, BIDs) {
        for (var _i = 0, CordsArray_1 = CordsArray; _i < CordsArray_1.length; _i++) {
            var cord = CordsArray_1[_i];
            var data = this.Nearest(accuracy, InumArray, cord, Currentlatlng, visitedInfo, devices, BIDs);
            if (data != undefined) {
                return data;
            }
        }
    };
    ChronPage.prototype.Nearest = function (accuracy, InumArray, cord, Currentlatlng, visitedInfo, devices, BIDs) {
        var data;
        if (accuracy == undefined) {
            accuracy = 6;
        }
        var Clat = Currentlatlng.lat().toString().substr(0, accuracy);
        var Clng = Currentlatlng.lng().toString().substr(0, accuracy);
        var lat = cord.val().Lat.toString().substr(0, accuracy);
        var lng = cord.val().Long.toString().substr(0, accuracy);
        var latlng = new google.maps.LatLng(cord.val().Lat, cord.val().Long);
        if (InumArray[0] == cord.val().Inum)
            if (Clat == lat)
                if (Clng == lng)
                    if (cord.key.substr(0, 6) == "Marker") {
                        var value = this.CheckExistence(cord.key, visitedInfo);
                        if (value == "-1") {
                            this.MakeData(InumArray, visitedInfo, cord, latlng);
                            var data = cord.val().Data;
                            return data;
                        }
                    }
                    else {
                        for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                            var device = devices_1[_i];
                            if (visitedInfo.indexOf(device.id) === -1 || visitedInfo == undefined)
                                if (cord.key == device.id) {
                                    this.MakeData(InumArray, visitedInfo, cord, latlng);
                                    BIDs.push(cord.key);
                                    var data = cord.val().Data;
                                    return data;
                                }
                        }
                    }
    };
    //Returns the data submited from the admin to the POI
    ChronPage.prototype.MakeData = function (InumArray, visitedInfo, cord, latlng) {
        InumArray.shift();
        var temp = { latlng: latlng,
            visited: cord.key
        };
        visitedInfo.push(temp);
    };
    ChronPage.prototype.CheckExistence = function (key, visitedInfo) {
        var val = "-1";
        for (var _i = 0, visitedInfo_1 = visitedInfo; _i < visitedInfo_1.length; _i++) {
            var visit = visitedInfo_1[_i];
            if (visit.visited == key)
                val = key;
        }
        return val;
    };
    return ChronPage;
}());
ChronPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-chron'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */]])
], ChronPage);

//# sourceMappingURL=chron.js.map

/***/ }),

/***/ 257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlreadyVisitedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__starter_finder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modal_modalpop__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_ble__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_node_js_marker_clusterer__ = __webpack_require__(378);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_node_js_marker_clusterer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_node_js_marker_clusterer__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AlreadyVisitedPage = (function () {
    function AlreadyVisitedPage(modalCtrl, appCtrl, geolocation, navCtrl, navParams, af, ble) {
        this.modalCtrl = modalCtrl;
        this.appCtrl = appCtrl;
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.ble = ble;
        this.visitedInfo = 0;
        this.markers = [];
        this.infowindow = [];
        this.IDs = [];
        this.formData = [];
        this.VideoUrls = [];
        this.blobs = [];
        this.CordsArray = [];
    }
    // Class finds and displays already visited POIs
    AlreadyVisitedPage.prototype.ngOnInit = function () {
        var visitedInfo = this.navParams.get('Name');
        var CordsArray = this.navParams.get('CordsArray');
        var GameType = this.navParams.get('GameType');
        var MapCords = this.navParams.get('MapCords');
        this.CordsArray = CordsArray;
        if (GameType == "Beacons") {
            this.IDs = visitedInfo;
        }
        else {
            this.visitedInfo = visitedInfo;
            this.loadMap(visitedInfo);
        }
    };
    // Load map on screen
    AlreadyVisitedPage.prototype.loadMap = function (visitedInfo) {
        var _this = this;
        var options = { timeout: 10000, enableHighAccuracy: true };
        var mapOptions = {
            center: visitedInfo[0].latlng,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var map = this.map;
        var markers = visitedInfo.map(function (visit, i) {
            return new google.maps.Marker({
                position: visit.latlng,
                label: i.toString()
            });
        });
        var i = 0;
        var _loop_1 = function (visit) {
            markers[i].addListener('dblclick', function () { return _this.FindData(visit.latlng, visit.visited, _this.CordsArray); });
            i++;
        };
        for (var _i = 0, visitedInfo_1 = visitedInfo; _i < visitedInfo_1.length; _i++) {
            var visit = visitedInfo_1[_i];
            _loop_1(visit);
        }
        var markerCluster = new __WEBPACK_IMPORTED_MODULE_7_node_js_marker_clusterer__(this.map, markers, { imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m' });
    };
    AlreadyVisitedPage.prototype.FindData = function (latlng, visited, CordsArray) {
        this.Top();
        for (var _i = 0, _a = this.CordsArray; _i < _a.length; _i++) {
            var cord = _a[_i];
            if (cord.key == visited) {
                var data = cord.val().Data;
                this.DisplayFile(data);
            }
        }
    };
    // Displays the POIs id
    AlreadyVisitedPage.prototype.IdDispalay = function (id) {
        for (var _i = 0, _a = this.CordsArray; _i < _a.length; _i++) {
            var cord = _a[_i];
            if (cord.key == id) {
                var data = cord.val().Data;
                this.DisplayFile(data);
            }
        }
    };
    AlreadyVisitedPage.prototype.DisplayFile = function (data) {
        var _this = this;
        this.formData = [];
        this.VideoUrls = [];
        this.blobs = [];
        for (var key in data) {
            if (key.substr(0, 1) == "G") {
                this.formData.push(data[key]);
            }
            if (key.substr(0, 1) != "G") {
                if (key.substr(0, 1) == "v") {
                    new __WEBPACK_IMPORTED_MODULE_4__starter_finder__["a" /* FinderPage */](this.af).GetVidData(data, key).then(function (url) {
                        _this.VideoUrls.push(url);
                    });
                }
                else {
                    if (key.substr(0, 1) != "M") {
                        new __WEBPACK_IMPORTED_MODULE_4__starter_finder__["a" /* FinderPage */](this.af).GetData(data, key).then(function (urlobj) {
                            _this.blobs.push(urlobj);
                        });
                    }
                }
            }
        }
    };
    AlreadyVisitedPage.prototype.Top = function () {
        this.content.resize();
    };
    AlreadyVisitedPage.prototype.pressPhoto = function (blob, type) {
        var profileModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__modal_modalpop__["a" /* ModalPopPage */], { Blob: blob,
            Type: type });
        profileModal.present();
    };
    return AlreadyVisitedPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], AlreadyVisitedPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])('map'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
], AlreadyVisitedPage.prototype, "mapElement", void 0);
AlreadyVisitedPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-AlreadyVisited',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\visited\AlreadyVisited.html"*/'<ion-header>\n\n <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Already Visited</ion-title>\n\n	 \n\n	\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n\n\n <ion-list no lines >\n\n\n\n <button  ion-item  *ngFor="let id of IDs" (click)="IdDispalay(id)">\n\n	\n\n\n\n    <li>   ID:  {{id}} </li> \n\n    \n\n	   </button>\n\n	\n\n    </ion-list>\n\n \n\n\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n	\n\n      <ion-col *ngFor="let blob of blobs"   class="grid_img" col-4 (click)="pressPhoto(blob,\'Image\')">\n\n       <img [src]="blob" height="128" width="128" > \n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n  <ion-grid>\n\n    <ion-row>\n\n\n\n      <ion-col *ngFor="let VideoUrl of VideoUrls"   class="grid_img" col-4 (click)="pressPhoto(VideoUrl.url,\'Video\')">\n\n\n\n\n\n        <img [src]="VideoUrl.thumbnail"  height="128" width="128" > \n\n      \n\n\n\n      </ion-col>\n\n\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n \n\n\n\n\n\n<div *ngFor="let data of formData" >\n\n  <ion-item no-lines>\n\n   {{data}} \n\n	 </ion-item >\n\n</div> \n\n\n\n\n\n	\n\n<div #map id="map" style="height:80%;"></div>\n\n</ion-content >'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\visited\AlreadyVisited.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_ble__["a" /* BLE */]])
], AlreadyVisitedPage);

//# sourceMappingURL=AlreadyVisited.js.map

/***/ }),

/***/ 258:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_media_capture__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file__ = __webpack_require__(44);
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
            return data;
        }, function (err) {
            console.error(" CaptureError error", err);
            return false;
        });
    };
    //Read file and return data as a base64 encoded data url
    CamPage.prototype.dataUrl = function (DirPath, Name) {
        return this.file.readAsDataURL(DirPath, Name).then(function (FileEntry) {
            return FileEntry;
        }, function (error) {
            console.log(" FileEntry error", error);
        });
    };
    CamPage.prototype.ThumbdataUrl = function (result, thumbName) {
        var Path = "file://" + result;
        var thumbPath = Path.replace(thumbName + ".jpg", "");
        return this.file.readAsDataURL(thumbPath, thumbName + ".jpg").then(function (FileEntry) {
            return FileEntry;
        }, function (error) {
            console.log("error", error);
        });
    };
    return CamPage;
}());
CamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cam'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_media_capture__["a" /* MediaCapture */]])
], CamPage);

//# sourceMappingURL=cam.js.map

/***/ }),

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OpenCamPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_video_editor__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__gps_cam__ = __webpack_require__(258);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__gps_vid__ = __webpack_require__(379);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__StringManipulation_string_manipulation__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_chooser__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var OpenCamPage = (function () {
    function OpenCamPage(filePath, fileChooser, navParams, videoEditor, mediaCapture, file, modalCtrl /*public af: AngularFireDatabase*/) {
        this.filePath = filePath;
        this.fileChooser = fileChooser;
        this.navParams = navParams;
        this.videoEditor = videoEditor;
        this.mediaCapture = mediaCapture;
        this.file = file;
        this.modalCtrl = modalCtrl; /*public af: AngularFireDatabase*/
        this.Images = [];
        this.Videos = [];
        this.Audio = [];
        this.InumArray = [];
        this.MapCords = [];
    }
    OpenCamPage.prototype.ngOnInit = function () {
    };
    OpenCamPage.prototype.OpenCam = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_5__gps_cam__["a" /* CamPage */](this.file, this.mediaCapture).Cam().then(function (imgData) {
            var CameraDataInfo = new __WEBPACK_IMPORTED_MODULE_7__StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CameraData(imgData);
            return new __WEBPACK_IMPORTED_MODULE_5__gps_cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(CameraDataInfo.DirPath, CameraDataInfo.Name).then(function (FileEntry) {
                _this.Images.push(FileEntry);
                return FileEntry;
            });
        });
    };
    //Capture  video and reads it as data url
    OpenCamPage.prototype.OpenVid = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_6__gps_vid__["a" /* VidPage */](this.mediaCapture, this.videoEditor).Vid().then(function (VidData) {
            var vidUri = VidData[0].fullPath;
            var thumbName = VidData[0].name.substring(0, VidData[0].name.length - 4);
            return _this.MakeVideoThumnail(vidUri, thumbName).then(function (thumbnail) {
                var CameraDataInfo = new __WEBPACK_IMPORTED_MODULE_7__StringManipulation_string_manipulation__["a" /* StringManipulationPage */]().CameraData(VidData);
                return new __WEBPACK_IMPORTED_MODULE_5__gps_cam__["a" /* CamPage */](_this.file, _this.mediaCapture).dataUrl(CameraDataInfo.DirPath, CameraDataInfo.Name).then(function (FileEntry) {
                    var tmp = { video: FileEntry,
                        thumbnail: thumbnail
                    };
                    _this.Videos.push(tmp);
                    return tmp;
                });
            });
        });
    };
    //Adds a play icon in video thumbnail
    OpenCamPage.prototype.MakeVideoThumnail = function (vidUri, thumbName) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_6__gps_vid__["a" /* VidPage */](this.mediaCapture, this.videoEditor).VideoThumbnail(vidUri, thumbName).then(function (result) {
            return new __WEBPACK_IMPORTED_MODULE_5__gps_cam__["a" /* CamPage */](_this.file, _this.mediaCapture).ThumbdataUrl(result, thumbName).then(function (FileEntry) {
                return _this.AddPlayIcon(FileEntry).then(function (thumbnail) {
                    return thumbnail;
                });
            });
        });
    };
    OpenCamPage.prototype.AddPlayIcon = function (thumbnail) {
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
    OpenCamPage.prototype.Open = function () {
        var _this = this;
        return this.fileChooser.open()
            .then(function (uri) {
            console.log(uri);
            return _this.filePath.resolveNativePath(uri).then(function (filePath) {
                return filePath;
            });
        }, function (e) {
            console.log(e);
        });
    };
    return OpenCamPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], OpenCamPage.prototype, "content", void 0);
OpenCamPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-opencam',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\starter\start.html"*/'<ion-header >\n   <ion-toolbar>\n   	\n<ion-grid>\n  <ion-row>\n  \n	  <ion-title>{{Scenario}}</ion-title> \n\n<button ion-button clear item-end  color="light" icon-right     (click)="FauxRefresh()" [disabled]="search" ><ion-icon  name="play"></ion-icon></button>\n  <button ion-button clear item-end  color="light" icon-right  (click)="StopSearch()"   [disabled]="!search"  ><ion-icon  name="square"></ion-icon></button>\n  \n  <button ion-button clear item-end  color="light" icon-right  (click)="presentPopover($event)"   ><ion-icon  name="settings"></ion-icon></button>\n\n  </ion-row>\n</ion-grid>\n\n	</ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n\n\n<ion-scroll scrollY="true">\n </ion-scroll>\n\n  <ion-grid>\n \n    <ion-row>\n	\n      <ion-col *ngFor="let blob of blobs"   class="grid_img" col-4 (click)="pressPhoto(blob,\'Image\')">\n       <img [src]="blob" height="128" width="128" > \n      </ion-col>\n\n    </ion-row>\n\n	   \n    <ion-row>\n  \n      <ion-col *ngFor="let VideoUrl of VideoUrls"   class="grid_img" col-4 (click)="pressPhoto(VideoUrl.url,\'Video\')">\n\n\n        <img [src]="VideoUrl.thumbnail"  height="128" width="128" > \n      \n\n      </ion-col>\n\n    </ion-row>\n	    \n	  <ion-row *ngFor="let sound of Sounds"   class="grid_img" col-4 >\n	    <ion-col >\n\n\n      <audio controls autoplay>\n\n  <source src={{sound}} type="audio/mpeg">\n\n</audio>\n      \n\n      </ion-col>\n	    </ion-row>\n		    \n		<ion-row *ngFor="let AutoSound of AutoSounds"   class="grid_img" col-4>\n	    <ion-col >\n\n\n      <audio controls >\n\n  <source src={{AutoSound}} type="audio/mpeg">\n\n</audio>\n      \n\n      </ion-col>\n	    </ion-row>\n  </ion-grid> \n  \n\n<div   text-center>\n\n<p> {{text}} </p>\n \n</div> \n\n<div *ngFor="let data of formData" text-center>\n  <ion-item no-lines>\n\n   \n\n<p> {{data}} </p>\n \n	 </ion-item>\n</div> \n\n <ion-list no lines >\n\n <button  ion-item  *ngFor="let id of BIDs" (click)="FindData(id)">\n	\n\n    <li>   ID:  {{id}} </li> \n    \n	   </button>\n	\n    </ion-list>\n \n \n	\n<div #map id="map" style="height:80%;"></div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar  color="my-white">\n   	<ion-grid>\n  <ion-row>\n\n <ion-col >\n	 <button ion-button clear item-end   [disabled]="!Multiples" color="dark" icon-right (click)="Response()" >  <ion-icon name="list-box"></ion-icon></button> \n	\n</ion-col>\n <ion-col >\n <button ion-button clear item-end color="dark" icon-right [disabled]="!visited"(click)="GetPhoto()" ><ion-icon name="camera" ></ion-icon></button>\n  </ion-col >\n   <ion-col >\n <button ion-button clear item-end color="dark" icon-right [disabled]="!visited"(click)="GetVideo()" ><ion-icon name="film"></ion-icon></button>\n  </ion-col >\n     <ion-col >\n<button ion-button clear item-end  color="dark" icon-right [disabled]="!visited" (click)="GetData()"  ><ion-icon  name="folder"></ion-icon></button>\n\n	   </ion-col >\n     </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\starter\start.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_9__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_video_editor__["a" /* VideoEditor */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */] /*public af: AngularFireDatabase*/])
], OpenCamPage);

//# sourceMappingURL=opencam.js.map

/***/ }),

/***/ 260:
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
    StringManipulationPage.prototype.CheckType = function (filePath) {
        var TypeExtraction = filePath.lastIndexOf(".");
        var type = filePath.substring(filePath.length, TypeExtraction + 1);
        console.log("type is :", type);
        var a = filePath.lastIndexOf("/");
        var b = filePath.lastIndexOf(".");
        var name = filePath.substring(a + 1, b);
        var DirPath = filePath.replace(name + "." + type, "");
        console.log("name is:", name);
        console.log("DirPath is:", DirPath);
        var DataInfo = { Type: type,
            Name: name,
            DirPath: DirPath
        };
        return DataInfo;
    };
    StringManipulationPage.prototype.CameraData = function (CamData) {
        var name = CamData[0].name;
        var path = CamData[0].fullPath;
        console.log("Path", path);
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

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResponsePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__starter_finder__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_video_editor__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__ = __webpack_require__(34);
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
    function ResponsePage(domSanitizer, videoEditor, afAuth, viewCtrl, af, mediaCapture, file, loadingCtrl, navParams) {
        this.domSanitizer = domSanitizer;
        this.videoEditor = videoEditor;
        this.afAuth = afAuth;
        this.viewCtrl = viewCtrl;
        this.af = af;
        this.mediaCapture = mediaCapture;
        this.file = file;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.isAlreadyAnsweres = false;
        this.Images = [];
        this.Videos = [];
        this.MultipleChoices = [];
        this.MultipleChoicesAnswers = [];
    }
    ResponsePage.prototype.ngOnInit = function () {
        this.GamePath = this.navParams.get('GamePath');
        this.dbPath = this.navParams.get('dbPath');
        this.id = this.navParams.get('id');
        var visited = this.navParams.get('MCvisited');
        var CurrentPoi = this.navParams.get('CurrentPoi');
        var isAlreadyAnsweres;
        if (visited.length != 0) {
            for (var _i = 0, visited_1 = visited; _i < visited_1.length; _i++) {
                var key = visited_1[_i];
                if (key.Name == CurrentPoi) {
                    this.MultipleChoicesAnswers = key.MultipleChoicesAnswers;
                    this.MultipleChoices = key.MultipleChoices;
                    this.isAlreadyAnsweres = true;
                    this.CheckAnswers();
                }
            }
        }
        if (this.isAlreadyAnsweres == false) {
            this.MCstaff();
        }
    };
    //Retrieve multiple choices answer
    ResponsePage.prototype.MCstaff = function () {
        var _this = this;
        new __WEBPACK_IMPORTED_MODULE_5__starter_finder__["a" /* FinderPage */](this.af).RetrieveKey(this.dbPath + "/Data/MultipleChoices").subscribe(function (MultipleChoicesKeys) {
            var CorrectAnswer;
            var _loop_1 = function (key) {
                new __WEBPACK_IMPORTED_MODULE_5__starter_finder__["a" /* FinderPage */](_this.af).RetrivePosition(_this.dbPath + "/Data/MultipleChoices/" + key).subscribe(function (MultipleChoices) {
                    var answers = [];
                    var isCorrectAnswer = [];
                    var isYourAnswer = [];
                    for (var _i = 0, MultipleChoices_1 = MultipleChoices; _i < MultipleChoices_1.length; _i++) {
                        var answer = MultipleChoices_1[_i];
                        if (answer.key.substr(0, 1) == "C")
                            CorrectAnswer = answer.val();
                        else {
                            answers.push(answer.val());
                            isCorrectAnswer.push(false);
                            isYourAnswer.push(false);
                        }
                    }
                    var obj = { Title: key,
                        Answer: "",
                        CorrectAnswer: CorrectAnswer
                    };
                    _this.MultipleChoicesAnswers.push(obj);
                    var tmp = { Title: key,
                        Answers: answers,
                        isCorrectAnswer: isCorrectAnswer,
                        isYourAnswer: isYourAnswer
                    };
                    answers = [];
                    _this.MultipleChoices.push(tmp);
                });
            };
            for (var _i = 0, MultipleChoicesKeys_1 = MultipleChoicesKeys; _i < MultipleChoicesKeys_1.length; _i++) {
                var key = MultipleChoicesKeys_1[_i];
                _loop_1(key);
            }
        });
    };
    ResponsePage.prototype.CheckAnswers = function () {
        for (var _i = 0, _a = this.MultipleChoicesAnswers; _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.Answer == key.CorrectAnswer) {
                for (var _b = 0, _c = this.MultipleChoices; _b < _c.length; _b++) {
                    var answer = _c[_b];
                    for (var i = 0; i < answer.Answers.length; i++) {
                        if (answer.Answers[i] == key.CorrectAnswer) {
                            answer.isCorrectAnswer[i] = true;
                        }
                    }
                }
            }
            else {
                for (var _d = 0, _e = this.MultipleChoices; _d < _e.length; _d++) {
                    var answer = _e[_d];
                    for (var i = 0; i < answer.Answers.length; i++) {
                        if (answer.Answers[i] == key.CorrectAnswer) {
                            answer.isCorrectAnswer[i] = true;
                        }
                        if (key.Answer == answer.Answers[i]) {
                            answer.isYourAnswer[i] = true;
                        }
                    }
                }
            }
        }
    };
    ResponsePage.prototype.dismiss = function () {
        var results = [];
        results.push({ MultipleChoices: this.MultipleChoices,
            MultipleChoicesAnswers: this.MultipleChoicesAnswers });
        this.viewCtrl.dismiss(results, this.isAlreadyAnsweres.toString());
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
        selector: 'page-response',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\response\response.html"*/'<ion-header>\n\n   <ion-navbar>\n\n    <ion-grid>\n\n  <ion-row>\n\n <ion-title >Multiple Choices</ion-title> \n\n  \n\n<button color="light" ion-button clear item-end   (click)="dismiss()"> Close<ion-icon md="md-close-circle"></ion-icon></button>\n\n\n\n\n\n   </ion-row>\n\n   </ion-grid>\n\n	</ion-navbar>\n\n	\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n\n\n\n\n\n\n<ion-list radio-group *ngFor="let answer of MultipleChoices; let i=index"  [(ngModel)]="MultipleChoicesAnswers[i].Answer">\n\n\n\n\n\n  <ion-list-header >\n\n    {{answer.Title}}\n\n  </ion-list-header>\n\n\n\n  <ion-item  *ngFor="let answer of answer.Answers; let c=index" >\n\n   <ion-label [ngClass]="{\'yourAnswer\': MultipleChoices[i].isYourAnswer[c] ,\'correctAnswer\': MultipleChoices[i].isCorrectAnswer[c]}"> {{answer}}\n\n    </ion-label>\n\n	    \n\n    <ion-radio  value={{answer}}></ion-radio>\n\n  </ion-item>\n\n \n\n</ion-list>\n\n  \n\n\n\n  \n\n     <button ion-button [disabled]="isAlreadyAnsweres" (click)="CheckAnswers()" >submit</button> \n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\response\response.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_video_editor__["a" /* VideoEditor */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], ResponsePage);

//# sourceMappingURL=response.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_check__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__ = __webpack_require__(55);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SettingsPage = (function () {
    function SettingsPage(navParams, geolocation, appCtrl, navCtrl, media, nativeStorage, mediaCapture, file, fileChooser, filePath, viewCtrl) {
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.media = media;
        this.nativeStorage = nativeStorage;
        this.mediaCapture = mediaCapture;
        this.file = file;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.viewCtrl = viewCtrl;
    }
    SettingsPage.prototype.Open = function () {
        var _this = this;
        this.nativeStorage.clear()
            .then(function () { return console.log("cleared"); }, function (error) { return console.error('Error clearing', error); });
        this.fileChooser.open()
            .then(function (uri) {
            console.log(uri);
            _this.filePath.resolveNativePath(uri).then(function (filePath) {
                _this.nativeStorage.setItem('ring', filePath)
                    .then(function () { return console.log('Success!'); }, function (error) { return console.error('Error storing item', error); });
            }, function (error) { return console.error('Error resolveing Url ', error); });
        }, function (e) {
            console.log(e);
        });
    };
    SettingsPage.prototype.exit = function () {
        var geo = this.navParams.get('geo');
        geo.unsubscribe();
        var index = this.navCtrl.getActive().index;
        this.navCtrl.remove(0, index);
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_check__["a" /* CheckPage */]);
    };
    SettingsPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return SettingsPage;
}());
SettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-settings',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\settings\settings.html"*/'\n\n<ion-content>\n\n   <ion-list no-lines>\n\n      <ion-list-header>Settings</ion-list-header>\n\n\n\n		 <button ion-item (click)="Open()"> Change Sound </button>\n\n      <button ion-item (click)="exit()"> Menu </button>\n\n    </ion-list>\n\n\n\n	\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\settings\settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_media__["a" /* Media */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_chooser__["a" /* FileChooser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_path__["a" /* FilePath */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
], SettingsPage);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(7);
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
    function FirePage(af, loadingCtrl) {
        this.af = af;
        this.loadingCtrl = loadingCtrl;
        this.Iloader = [];
        this.Vloader = [];
        this.Aloader = [];
        this.Floader = [];
    }
    FirePage.prototype.AddUser = function (dbPath, user, token) {
        this.obj = this.af.object(dbPath + user.uid);
        this.obj.set({ email: user.email, UserType: "User" });
    };
    //Uploads to firebase
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
        var tmp = { dbResponePath: dbPath,
            StoragePath: StoragePath };
        return tmp;
    };
    //Uploads to firebase
    FirePage.prototype.FirebaseResponseUpload = function (dbPath, Videos, Images, Audio, id, StoragePath, Icnt, Vcnt, Acnt) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        for (var i = 0; i < Audio.length; i++) {
            this.Loading(this.Aloader);
            this.SetResponseParams(StoragePath, dbPath, Audio[i], Acnt, "Audio", storageRef);
            Acnt++;
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af, this.Aloader[i]);
        }
        for (var i = 0; i < Videos.length; i++) {
            this.Loading(this.Vloader);
            this.SetResponseParams(StoragePath, dbPath, Videos[i].video, Vcnt, "video", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af, this.Vloader[i]);
            this.Loading(this.Vloader);
            this.SetResponseParams(StoragePath, dbPath, Videos[i].thumbnail, Vcnt + "thumbnail", "video", storageRef);
            Vcnt++;
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af, this.Vloader[i + 1]);
        }
        for (var i = 0; i < Images.length; i++) {
            this.Loading(this.Iloader);
            this.SetResponseParams(StoragePath, dbPath, Images[i], Icnt, "image", storageRef);
            Icnt++;
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af, this.Iloader[i]);
        }
        var counters = {};
        return counters = {
            Icnt: Icnt,
            Vcnt: Vcnt,
            Acnt: Acnt
        };
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
    FirePage.prototype.FirebaseUpload = function (keimeno, Password, StoragePath, dbPath, Videos, Images, Audio, gform, i, ScenarioPath, ScenarioType, McData, res) {
        if (res == "True") {
            this.obj = this.af.object(dbPath);
            this.obj.update({ Response: res });
        }
        var mdbPath = dbPath + "/Data/MultipleChoices";
        this.obj = this.af.object(mdbPath);
        for (var _i = 0, McData_1 = McData; _i < McData_1.length; _i++) {
            var Name = McData_1[_i];
            if (Name.Title != undefined) {
                this.obj = this.af.object(mdbPath + "/" + Name.Title);
                this.obj.set({ Answer1: Name.Fdata.Data1, Answer2: Name.Fdata.Data2, Answer3: Name.Fdata.Data3, CorrectAnswer: Name.CorrectAnswer });
            }
        }
        if (i == 0) {
            this.obj = this.af.object(ScenarioPath);
            this.obj.update({ ScenarioType: ScenarioType, Password: Password });
        }
        var storageRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["storage"]().ref();
        var vdata = [];
        this.obj = this.af.object(dbPath);
        this.obj.update({ Inum: i });
        if (keimeno != undefined) {
            this.obj = this.af.object(dbPath + "/Data");
            this.obj.update({ Text: keimeno });
        }
        if (Videos.length == 0) {
            console.log("videos lenght enterd", Videos.length);
            if (Images.length == 0) {
                console.log("image lenght enterd", Images.length);
            }
        }
        for (var i_1 = 0; i_1 < Audio.length; i_1++) {
            this.Loading(this.Aloader);
            this.SetParams(StoragePath, dbPath, Audio[i_1], i_1, "Audio", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af, this.Aloader[i_1]);
        }
        for (var i_2 = 0; i_2 < Videos.length; i_2++) {
            this.Loading(this.Vloader);
            this.SetParams(StoragePath, dbPath, Videos[i_2].video, i_2, "video", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af, this.Vloader[i_2]);
            this.Loading(this.Vloader);
            this.SetParams(StoragePath, dbPath, Videos[i_2].thumbnail, i_2 + "thumbnail", "video", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af, this.Vloader[i_2 + 1]);
        }
        for (var d = 0; d < Images.length; d++) {
            this.Loading(this.Iloader);
            this.SetParams(StoragePath, dbPath, Images[d], d, "image", storageRef);
            this.storeInputData(this.task, this.storagePath, this.dbpath, this.af, this.Iloader[d]);
        }
        i++;
        return i;
    };
    //Uploads to firebase storage
    FirePage.prototype.storeInputData = function (task, StoragePath, dbPath, af, loader) {
        return new Promise(function (resolve, reject) {
            loader.present();
            task.on('state_changed', function progress(snapshot) {
                var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                console.log(percentage, "%  completed ");
                if (dbPath.includes("thumbnail") == false) {
                    this.obj = af.object(dbPath);
                    this.obj.set(StoragePath);
                }
            }, function error(err) {
                console.log("error is:", err);
            }, function complete() {
                loader.dismiss();
            });
        });
    };
    FirePage.prototype.SetParams = function (StoragePath, dbPath, file, count, type, storageRef) {
        this.dbpath = dbPath + "/Data/" + type + "Input" + count;
        this.storagePath = StoragePath + "/" + type + "Input" + count;
        this.dataRef = storageRef.child(this.storagePath);
        this.task = this.dataRef.putString(file, 'data_url');
    };
    FirePage.prototype.SetResponseParams = function (StoragePath, dbPath, file, count, type, storageRef) {
        this.dbpath = dbPath + "/" + type + "Input" + count;
        this.storagePath = StoragePath + "/" + type + "Input" + count;
        this.dataRef = storageRef.child(this.storagePath);
        this.task = this.dataRef.putString(file, 'data_url');
    };
    FirePage.prototype.Loading = function (loader) {
        loader.push(this.loadingCtrl.create({
            content: "Please wait...",
        }));
    };
    return FirePage;
}());
FirePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cam'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* LoadingController */]])
], FirePage);

//# sourceMappingURL=fire.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__gps_fire__ = __webpack_require__(264);
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
    function RegistrationPage(alertCtrl, viewCtrl, appCtrl, af, navCtrl, navParams, afAuth, loadingCtrl) {
        this.alertCtrl = alertCtrl;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.af = af;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.loadingCtrl = loadingCtrl;
        this.Rform = { Email: "", Password: "" };
    }
    //Registers a user with firebase auth
    RegistrationPage.prototype.Register = function () {
        var _this = this;
        this.afAuth.auth.createUserWithEmailAndPassword(this.Rform.Email, this.Rform.Password).then(function () {
            var user = _this.afAuth.auth.currentUser;
            var dbPath = "/User/";
            if (user != null)
                new __WEBPACK_IMPORTED_MODULE_4__gps_fire__["a" /* FirePage */](_this.af, _this.loadingCtrl).AddUser(dbPath, user, _this.token);
        }, function (error) {
            var errorMessage = error.message;
            console.log("error", errorMessage);
            _this.AlreadyExist(errorMessage);
        });
    };
    RegistrationPage.prototype.SignIn = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.Rform.Email, this.Rform.Password).then(function () {
            var usr = _this.afAuth.auth.currentUser;
        }, function (error) {
            // Handle Errors here.
            var errorMessage = error.message;
            console.log("error", errorMessage);
            var subtitle = "A user with that email already exists";
            _this.AlreadyExist(errorMessage);
            // ...
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
        selector: 'page-registration',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\home\registration.html"*/'<ion-header color="dark">\n  <ion-toolbar  >\n  <ion-grid>\n  <ion-row>\n 	<ion-nav> </ion-nav>\n    <ion-title >\n    Register\n    </ion-title>\n \n\n  </ion-row>\n   </ion-grid>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  padding >\n\n\n<form #formCtrl="ngForm" >\n<ion-item >\n\n   \n    <ion-label color="primary" stacked>Email</ion-label>\n	 <ion-input type="email" [(ngModel)]="Rform.Email" name="Email" placeholder="Email "  ngControl="EmailCtrl" required  ></ion-input>\n    \n  </ion-item>\n  \n <ion-item >\n   \n    <ion-label color="primary" stacked>Password</ion-label>\n    <ion-input type="password" [(ngModel)]="Rform.Password" name="Password" placeholder="Password "  ngControl="PasswordCtrl" required  ></ion-input>\n  \n  </ion-item>\n \n    <button ion-button [disabled]="!formCtrl.form.valid" (click)="Register()">Register</button> \n	<button ion-button [disabled]="!formCtrl.form.valid" (click)="SignIn()">Sign In</button> \n\n </form>\n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\home\registration.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], RegistrationPage);

//# sourceMappingURL=registration.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(284);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_media__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_scenario_settings_settings__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_scenario_starter_start__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_scenario_starter_opencam__ = __webpack_require__(259);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_scenario_starter_scenario__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_storage__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_video_editor__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_chooser__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_beacon_beacon__ = __webpack_require__(380);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_home_check__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_menu__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_registration__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_scenario_visited_AlreadyVisited__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_scenario_modal_modalpop__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_firebase__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_native_ble__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_scenario_response_response__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_path__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_background_mode__ = __webpack_require__(263);
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
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_24__pages_home_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_beacon_beacon__["a" /* BeaconPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_scenario_response_response__["a" /* ResponsePage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_scenario_starter_scenario__["a" /* ScenarioPage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_scenario_modal_modalpop__["a" /* ModalPopPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_scenario_starter_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_scenario_visited_AlreadyVisited__["a" /* AlreadyVisitedPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_home_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_check__["a" /* CheckPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_scenario_starter_opencam__["a" /* OpenCamPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_scenario_settings_settings__["a" /* SettingsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_11_angularfire2_auth__["b" /* AngularFireAuthModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_24__pages_home_registration__["a" /* RegistrationPage */],
            __WEBPACK_IMPORTED_MODULE_21__pages_beacon_beacon__["a" /* BeaconPage */],
            __WEBPACK_IMPORTED_MODULE_29__pages_scenario_response_response__["a" /* ResponsePage */],
            __WEBPACK_IMPORTED_MODULE_26__pages_scenario_modal_modalpop__["a" /* ModalPopPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_scenario_starter_scenario__["a" /* ScenarioPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_scenario_starter_start__["a" /* StartPage */],
            __WEBPACK_IMPORTED_MODULE_25__pages_scenario_visited_AlreadyVisited__["a" /* AlreadyVisitedPage */],
            __WEBPACK_IMPORTED_MODULE_23__pages_home_menu__["a" /* MenuPage */],
            __WEBPACK_IMPORTED_MODULE_22__pages_home_check__["a" /* CheckPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_scenario_starter_opencam__["a" /* OpenCamPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_scenario_settings_settings__["a" /* SettingsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_19__ionic_native_video_editor__["a" /* VideoEditor */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_media_capture__["a" /* MediaCapture */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_30__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_firebase__["a" /* Firebase */],
            __WEBPACK_IMPORTED_MODULE_28__ionic_native_ble__["a" /* BLE */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_background_mode__["a" /* BackgroundMode */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_media__["a" /* Media */],
            __WEBPACK_IMPORTED_MODULE_18__ionic_native_native_storage__["a" /* NativeStorage */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_check__ = __webpack_require__(131);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_check__["a" /* CheckPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\app\app.html"*/'<!--<ion-nav [root]="rootPage"></ion-nav>-->\n<ion-menu [content]="content" side="left" id="menu">\n\n\n\n <ion-content>\n      <ion-toolbar >\n    <ion-title>Menu </ion-title>\n  </ion-toolbar>\n  \n       <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n	   \n  </ion-content>\n\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #content></ion-nav>\n\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
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
    function BeaconPage(navCtrl, navParams, af, ble) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.ble = ble;
        this.devices = [];
    }
    BeaconPage.prototype.startScanning = function () {
        var _this = this;
        console.log("startScanning");
        this.ble.startScan([]).subscribe(function (device) {
            var adData = new Uint8Array(device.advertising);
            console.log(JSON.stringify(device));
            _this.devices.push(device);
        });
        return new Promise(function (resolve) {
            setTimeout(function () {
                _this.ble.stopScan().then(function () {
                    console.log("Scanning has stopped");
                    resolve(_this.devices);
                });
            }, 3500);
        });
    };
    BeaconPage.prototype.findId = function (CordsArray) {
        var minRssi = -350;
        var RightId;
        var data;
        for (var _i = 0, CordsArray_1 = CordsArray; _i < CordsArray_1.length; _i++) {
            var id = CordsArray_1[_i];
            for (var _a = 0, _b = this.devices; _a < _b.length; _a++) {
                var device = _b[_a];
                if (id.key == device.id) {
                    if (minRssi < device.rssi) {
                        minRssi = device.rssi;
                        RightId = device.id;
                        data = id.val().Data;
                    }
                }
            }
        }
        return data;
    };
    return BeaconPage;
}());
BeaconPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-beacon',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\starter\start.html"*/'<ion-header >\n   <ion-toolbar>\n   	\n<ion-grid>\n  <ion-row>\n  \n	  <ion-title>{{Scenario}}</ion-title> \n\n<button ion-button clear item-end  color="light" icon-right     (click)="FauxRefresh()" [disabled]="search" ><ion-icon  name="play"></ion-icon></button>\n  <button ion-button clear item-end  color="light" icon-right  (click)="StopSearch()"   [disabled]="!search"  ><ion-icon  name="square"></ion-icon></button>\n  \n  <button ion-button clear item-end  color="light" icon-right  (click)="presentPopover($event)"   ><ion-icon  name="settings"></ion-icon></button>\n\n  </ion-row>\n</ion-grid>\n\n	</ion-toolbar>\n\n\n</ion-header>\n\n<ion-content>\n\n\n\n\n\n<ion-scroll scrollY="true">\n </ion-scroll>\n\n  <ion-grid>\n \n    <ion-row>\n	\n      <ion-col *ngFor="let blob of blobs"   class="grid_img" col-4 (click)="pressPhoto(blob,\'Image\')">\n       <img [src]="blob" height="128" width="128" > \n      </ion-col>\n\n    </ion-row>\n\n	   \n    <ion-row>\n  \n      <ion-col *ngFor="let VideoUrl of VideoUrls"   class="grid_img" col-4 (click)="pressPhoto(VideoUrl.url,\'Video\')">\n\n\n        <img [src]="VideoUrl.thumbnail"  height="128" width="128" > \n      \n\n      </ion-col>\n\n    </ion-row>\n	    \n	  <ion-row *ngFor="let sound of Sounds"   class="grid_img" col-4 >\n	    <ion-col >\n\n\n      <audio controls autoplay>\n\n  <source src={{sound}} type="audio/mpeg">\n\n</audio>\n      \n\n      </ion-col>\n	    </ion-row>\n		    \n		<ion-row *ngFor="let AutoSound of AutoSounds"   class="grid_img" col-4>\n	    <ion-col >\n\n\n      <audio controls >\n\n  <source src={{AutoSound}} type="audio/mpeg">\n\n</audio>\n      \n\n      </ion-col>\n	    </ion-row>\n  </ion-grid> \n  \n\n<div   text-center>\n\n<p> {{text}} </p>\n \n</div> \n\n<div *ngFor="let data of formData" text-center>\n  <ion-item no-lines>\n\n   \n\n<p> {{data}} </p>\n \n	 </ion-item>\n</div> \n\n <ion-list no lines >\n\n <button  ion-item  *ngFor="let id of BIDs" (click)="FindData(id)">\n	\n\n    <li>   ID:  {{id}} </li> \n    \n	   </button>\n	\n    </ion-list>\n \n \n	\n<div #map id="map" style="height:80%;"></div>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar  color="my-white">\n   	<ion-grid>\n  <ion-row>\n\n <ion-col >\n	 <button ion-button clear item-end   [disabled]="!Multiples" color="dark" icon-right (click)="Response()" >  <ion-icon name="list-box"></ion-icon></button> \n	\n</ion-col>\n <ion-col >\n <button ion-button clear item-end color="dark" icon-right [disabled]="!visited"(click)="GetPhoto()" ><ion-icon name="camera" ></ion-icon></button>\n  </ion-col >\n   <ion-col >\n <button ion-button clear item-end color="dark" icon-right [disabled]="!visited"(click)="GetVideo()" ><ion-icon name="film"></ion-icon></button>\n  </ion-col >\n     <ion-col >\n<button ion-button clear item-end  color="dark" icon-right [disabled]="!visited" (click)="GetData()"  ><ion-icon  name="folder"></ion-icon></button>\n\n	   </ion-col >\n     </ion-row>\n</ion-grid>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\scenario\starter\start.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_ble__["a" /* BLE */]])
], BeaconPage);

//# sourceMappingURL=beacon.js.map

/***/ }),

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chronologically_chron__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeoPage = (function () {
    function GeoPage(geolocation, navCtrl, navParams, af, ble) {
        this.geolocation = geolocation;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.ble = ble;
    }
    GeoPage.prototype.startgeo = function (accuracy, CordsArray, Currentlatlng, visitedInfo, devices, BIDs) {
        for (var _i = 0, CordsArray_1 = CordsArray; _i < CordsArray_1.length; _i++) {
            var cord = CordsArray_1[_i];
            var data = this.Nearest(accuracy, cord, Currentlatlng, visitedInfo, devices, BIDs);
            if (data != undefined) {
                return data;
            }
        }
    };
    GeoPage.prototype.Nearest = function (accuracy, cord, Currentlatlng, visitedInfo, devices, BIDs) {
        var minRssi = -350; //initializes Rssi as -350
        if (accuracy == undefined) {
            accuracy = 6; //5 digits plus one dot
        }
        var Clat = Currentlatlng.lat().toString().substr(0, accuracy);
        var Clng = Currentlatlng.lng().toString().substr(0, accuracy);
        var lat = cord.val().Lat.toString().substr(0, accuracy);
        var lng = cord.val().Long.toString().substr(0, accuracy);
        var latlng = new google.maps.LatLng(cord.val().Lat, cord.val().Long);
        if (Clat == lat) {
            if (Clng == lng) {
                if (cord.key.substr(0, 6) != "Marker") {
                    for (var _i = 0, devices_1 = devices; _i < devices_1.length; _i++) {
                        var device = devices_1[_i];
                        if (new __WEBPACK_IMPORTED_MODULE_3__chronologically_chron__["a" /* ChronPage */](this.navCtrl, this.navParams, this.af, this.ble).CheckExistence(device.id, visitedInfo) === "-1" || visitedInfo == undefined)
                            if (cord.key == device.id)
                                if (minRssi < device.rssi) {
                                    minRssi = device.rssi;
                                    var data = cord.val().Data;
                                    var temp = {
                                        latlng: latlng,
                                        visited: cord.key
                                    };
                                }
                    }
                    if (temp != undefined) {
                        visitedInfo.push(temp);
                        BIDs.push(cord.key);
                    }
                }
                else {
                    var value = new __WEBPACK_IMPORTED_MODULE_3__chronologically_chron__["a" /* ChronPage */](this.navCtrl, this.navParams, this.af, this.ble).CheckExistence(cord.key, visitedInfo);
                    if (value == "-1") {
                        this.MakeData(visitedInfo, cord, latlng);
                        var data = cord.val().Data;
                    }
                }
            }
        }
        return data;
    };
    GeoPage.prototype.MakeData = function (visitedInfo, cord, latlng) {
        //for visited POIs
        var temp = {
            latlng: latlng,
            visited: cord.key
        };
        visitedInfo.push(temp);
    };
    GeoPage.prototype.cordinates = function () {
        return this.geolocation.getCurrentPosition().then(function (resp) {
            var lat = resp.coords.latitude;
            var lng = resp.coords.longitude;
            var Currentlatlng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
            return Currentlatlng;
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    GeoPage.prototype.CheckExistence = function (key, visitedInfo) {
        var val = "-1";
        for (var _i = 0, visitedInfo_1 = visitedInfo; _i < visitedInfo_1.length; _i++) {
            var visit = visitedInfo_1[_i];
            if (visit.visited == key)
                val = key;
        }
        return val;
    };
    return GeoPage;
}());
GeoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-geo'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_ble__["a" /* BLE */]])
], GeoPage);

//# sourceMappingURL=geo.js.map

/***/ }),

/***/ 379:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VidPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_media_capture__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_video_editor__ = __webpack_require__(56);
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
    //Creates a thumbnail
    VidPage.prototype.VideoThumbnail = function (vidUri, thumbName) {
        return this.videoEditor.createThumbnail({ fileUri: vidUri, outputFileName: thumbName, width: 128, height: 128 }).then(function (result) {
            console.log('success');
            return result;
        }, function (error) {
            console.log('error', error);
        });
    };
    return VidPage;
}());
VidPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-cam'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_media_capture__["a" /* MediaCapture */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_video_editor__["a" /* VideoEditor */]])
], VidPage);

//# sourceMappingURL=vid.js.map

/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BeaconPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(14);
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
            console.log("bluetooth is not enabled");
        });
        this.startScanning();
    };
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
            console.log("scan error");
            console.log(error);
        });
    };
    BeaconPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss(this.deviceId);
    };
    return BeaconPage;
}());
BeaconPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-beacon',template:/*ion-inline-start:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\beacon\beacon.html"*/'\n<ion-header>\n\n<ion-navbar>\n\n<ion-grid>\n  <ion-row>\n <ion-title >Beacons</ion-title> \n  \n<button color="light" ion-button clear item-end   (click)="dismiss()"> Close<ion-icon md="md-close-circle"></ion-icon></button>\n\n\n   </ion-row>\n   </ion-grid>\n\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n \n\n <ion-refresher (ionRefresh)="doRefresh($event)">\n   <ion-refresher-content\n   \n   \n\n    refreshingText="Refreshing...">\n\n    </ion-refresher-content>\n	 </ion-refresher>\n	 \n	 \n  <ion-item>\n    <ion-label fixed>Pull to refresh</ion-label>\n    \n  </ion-item>\n  \n  \n  \n  <ion-item>\n   \n    <ion-label color="primary" stacked>Beacon Id</ion-label>\n    <ion-input  [(ngModel)]="deviceId" name="deviceId" placeholder="Beacon Id"    ></ion-input>\n  </ion-item>\n\n	  \n  <button ion-button    (click)="dismiss()" >Submit</button>\n<ion-list no lines >\n\n <button  ion-item  *ngFor="let beacon of devices" (click)="list(beacon.id)">\n	\n\n    <li>   ID:  {{beacon.id}} </li> \n     <li>   NAME:{{beacon.name}} </li> \n	  <li>  RSSI:{{beacon.rssi}} </li> \n	   </button>\n	\n    </ion-list>\n\n\n	  \n\n\n <!--<ion-list no lines >\n    <button  ion-item  (click)="dismiss(deviceId)">\n     <li>   ID:   </li> \n     <li>   NAME: </li> \n	  <li>  RSSI: </li> \n	 </button>\n    </ion-list> -->\n \n\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\creater\Documents\ionic_apps\Uni-git\src\pages\beacon\beacon.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_ble__["a" /* BLE */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavParams */]])
], BeaconPage);

//# sourceMappingURL=beacon.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__StringManipulation_Root__ = __webpack_require__(137);
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
    function FinderPage(af) {
        this.af = af;
        this.keys = [];
        this.Cords = [];
        this.root = new __WEBPACK_IMPORTED_MODULE_4__StringManipulation_Root__["a" /* RootPage */]().DBroot();
    }
    //Finds and retrieves data from firebase database
    FinderPage.prototype.RetrieveUserPrivileges = function (uid) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(uid).once('value').then(function (snapshot) {
            var prvl = snapshot.val().UserType;
            if (prvl == "Creator")
                return true;
            else
                return false;
        });
    };
    FinderPage.prototype.RetrieveOnce = function (path) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(path).once('value').then(function (snapshot) {
            return snapshot.val();
        });
    };
    FinderPage.prototype.CheckForResponse = function (GPath) {
        return __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref(GPath).once('value').then(function (snapshot) {
            if (snapshot.val() != "True")
                return false;
            return snapshot.val();
        });
    };
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
    FinderPage.prototype.RetrievePath = function (path, key, GameName) {
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
    FinderPage.prototype.RetrieveGameName = function (path, key) {
        var obj;
        this.lst = this.af.list(path + key + "/GameName", { preserveSnapshot: true });
        return this.lst.map(function (snapshots) {
            path = path + key;
            snapshots.forEach(function (snapshot) {
                obj = { GameName: snapshot.key,
                    GamePath: path
                };
            });
            return obj;
        });
    };
    FinderPage.prototype.RetrivePosition = function (GamePath) {
        this.lst = this.af.list(GamePath, { preserveSnapshot: true });
        return this.lst.map(function (snapshots) {
            return snapshots;
        });
    };
    FinderPage.prototype.Nearest = function (CordsArray, Currentlatlng, visited) {
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
    FinderPage.prototype.GetData = function (data, key) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        return storageRef.child(data[key]).getDownloadURL().then(function (url) {
            return url;
        });
    };
    FinderPage.prototype.GetVidData = function (data, key) {
        var Tkey = data[key].toString() + "thumbnail";
        var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref();
        return storageRef.child(data[key]).getDownloadURL().then(function (url) {
            return storageRef.child(Tkey).getDownloadURL().then(function (Turl) {
                var urlobj = { url: url,
                    thumbnail: Turl,
                };
                return urlobj;
            });
        });
    };
    return FinderPage;
}());
FinderPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-finder',
        templateUrl: '../chronologically/chron.html'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], FinderPage);

//# sourceMappingURL=finder.js.map

/***/ })

},[267]);
//# sourceMappingURL=main.js.map