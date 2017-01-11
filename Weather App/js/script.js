var key = "234b6aedce614c99b89175711498ee6b"


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
  $(".info").html("Latitude: " + coords.lat + "<br>" + "Longitude: " + coords.long);
  $.getJSON('https://api.darksky.net/forecast/' + key + "/" + coords.lat + "," + coords.long, function(data) {
    var items = [],
                $ul;

            $.each(data, function (key, val) {
                //iterate through the returned data and build a list
                items.push('<li id="' + key + '"><span class="name">' + val.entityname + '</span><br><span class="addr">' + val.principaladdress1 + '</span> <span class="city">' + val.principalcity + '</span></li>');
            });
            $ul = $('<ul />').appendTo('.info');

                    //append list items to list
                    $ul.append(items);
  });
}

$(document).ready(function(){
  // $(".info").html("Hello");
  getLocation();
});
