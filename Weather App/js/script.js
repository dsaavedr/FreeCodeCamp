function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(assignPossition);
        console.log("Yass");
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function assignPossition(position) {
  var coords = {
    lat:position.coords.latitude,
    long:position.coords.longitude
  };
  $(".info").html("Latitude: " + coords.lat);
}

$(document).ready(function(){
  // $(".info").html("Hello");
  getLocation();
});
