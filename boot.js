var bootStart = function(){

(function() {
  var device_ready = false;
  var mobile_system = 'android';

  var initApp = function() {
    if (device_ready) {
      app();
    }
  };

  var onDeviceReady = function() {
    device_ready = true;
    initApp();
  };


  document.addEventListener("deviceready", onDeviceReady, false);

})();

}