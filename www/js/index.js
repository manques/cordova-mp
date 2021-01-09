/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    // window.open = cordova.InAppBrowser.open;
    // var ref = cordova.InAppBrowser.open('https://www.marutipatola.com', '_blank', 'location=yes');
    
    if (navigator.connection.type == Connection.NONE) {
        navigator.notification.alert('An internet connection is required to continue');
        // offlinePage();
      } else {
        // var options = "location=yes,hidden=yes,beforeload=yes,zoom=no";
        // var ref = cordova.InAppBrowser.open('https://www.marutipatola.com', '_blank', options);
        // window.open = ref;
        // var myCallback = function(event) { alert(event.url); }
        // ref.addEventListener('loadstart', myCallback);
        // ref.removeEventListener('loadstart', myCallback);
        // ref.show();
        openBrowser();
      }
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}



function openBrowser() {
  var url = 'https://www.marutipatola.com';
  var target = '_blank';
  var options = "location=no,zoom=no"
  var ref = cordova.InAppBrowser.open(url, target, options);
  
  ref.addEventListener('loadstart', loadstartCallback);
  ref.addEventListener('loadstop', loadstopCallback);
  ref.addEventListener('loaderror', loaderrorCallback);
  ref.addEventListener('exit', exitCallback);

  function loadstartCallback(event) {
     console.log('Loading started: '  + event.url)
  }

  function loadstopCallback(event) {
     console.log('Loading finished: ' + event.url)
  }

  function loaderrorCallback(error) {
     console.log('Loading error: ' + error.message)
  }

  function exitCallback() {
     console.log('Browser is closed...')
  }
}

function offlinePage() {
  var myWindow = window.open("", "myWindow", "width=200,height=100vh");
  myWindow.document.write("<p>no internet connection!!!!!</p>");
} 