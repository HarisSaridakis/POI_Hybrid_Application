
<h2>Description</h2> 

<p>
    What this application does is to serve data (image,audio,text) to the user when user gets to a certain POI. User can interact to those POIs by uploading his own data as a reaction (image,video,text,audio). POIs had been set from the administrator as a part of  scenario that user participates in. In more details application consist of two parts one for the single user and one for the administrator. Administrator is able to create scenarios and to modify them if needed. Also administrator can see the interaction of each player.

Scenarios can be of two types geographically and chronologically. In geographically all POIs are available on map, in chronologically user should visit one POI in order for next to be available. </p> 

<h2>Prerequisites</h2> 

<p> Application developed with ionic angular 3.6.0 in Ionic framework and make use of firebase database, firebase auth google maps and beacons.

Plugins were used are listed below

</p> 

<ul>

<li> cordova-plugin-background-mode 0.7.2 "BackgroundMode" </li> <li>cordova-plugin-ble-central 1.1.4 "BLE" </li> <li>cordova-plugin-camera 2.4.1 "Camera" </li> <li>cordova-plugin-device 1.1.4 "Device"</li> <li>cordova-plugin-file 4.3.3 "File"</li> <li>cordova-plugin-filechooser 1.0.1 "File Chooser" </li> <li>cordova-plugin-filepath 1.0.2 "FilePath" </li> <li>cordova-plugin-firebase 0.1.23 "Google Firebase Plugin" </li> <li>cordova-plugin-geolocation 2.1.0 "Geolocation" </li> <li>cordova-plugin-media 3.0.1 "Media" </li> <li>cordova-plugin-media-capture 1.4.3 "Capture" </li> <li>cordova-plugin-nativeaudio 3.0.9 "Cordova Native Audio" </li> <li>cordova-plugin-nativestorage 2.2.2 "NativeStorage" </li> <li>cordova-plugin-splashscreen 4.0.3 "Splashscreen" </li> <li>cordova-plugin-statusbar 2.2.2 "StatusBar" </li> <li>cordova-plugin-video-editor 1.1.3 "VideoEditor" </li> <li>cordova-plugin-whitelist 1.3.2 "Whitelist" </li> <li>cordova.plugins.diagnostic 3.6.5 "Diagnostic"</li>

</ul>

<h2> Getting Started </h2> 
<ul>

<li> Download the installer for Node.js 6 or greater. </li> <li>Install the ionic CLI globally: npm install -g ionic </li> <li>Install all the plugins, details in https://ionicframework.com/docs/native/diagnostic </li> <li>Register on google maps to get the API key </li> <li>Register on Firebase to get the API key </li> </ul>

<h2> Deploying </h2> 

<p>
  ionic serve

</p>
