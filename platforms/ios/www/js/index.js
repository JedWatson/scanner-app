var nothing = function() {};

var app = {
    
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('scancode').addEventListener('touchstart', this.scanCode, false);
    },
    
    onDeviceReady: function() {
        // The scope of 'this' is the event.
        console.log('Device is ready.');
    },
    
    scanCode: function() {
        cordova.plugins.barcodeScanner.scan(
            function (result) {
                if (result.cancelled) return;
                navigator.notification.alert(
                    result.text,         // message
                    nothing,             // callback
                    result.format,       // title
                    'OK'                 // buttonName
                );
            }, 
            function (error) {
                navigator.notification.alert(
                    error,               // message
                    nothing,             // callback
                    'Scanning Failed',   // title
                    'OK'                 // buttonName
                );
            }
        );
    }
    
};

app.initialize();