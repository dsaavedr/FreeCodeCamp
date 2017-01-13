var key = "234b6aedce614c99b89175711498ee6b"


function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(assignPossition);
        // console.log("Yass");
    } else {
        console.log("Geolocation is not supported by this browser.");
    }
}

function assignPossition(position) {
  var coords = {
    lat:position.coords.latitude,
    long:position.coords.longitude
  };
  // $.getJSON('https://api.darksky.net/forecast/' + key + "/" + coords.lat + "," + coords.long, function(data) {
  //   var items = [],
  //               $ul;
  //
  //           $.each(data, function (key, val) {
  //               //iterate through the returned data and build a list
  //               items.push('<li id="' + key + '"><span class="name">' + val.entityname + '</span><br><span class="addr">' + val.principaladdress1 + '</span> <span class="city">' + val.principalcity + '</span></li>');
  //           });
  //           $ul = $('<ul />').appendTo('.info');
  //
  //                   //append list items to list
  //                   $ul.append(items);
  // });
  $.ajax({
    url: "https://api.forecast.io/forecast/" + key + "/" + coords.lat + "," + coords.long,
    dataType: "jsonp",
    success: function (data) {
        // console.log('here');
        console.log(data);
        var icon=data.currently.icon

        console.log(icon=="partly-cloudy-night");

        $("#c-icon").removeClass();

        if (icon=="clear-day") {
          $("#c-icon").addClass("wi wi-day-sunny");
        } else if (icon=="clear-night") {
          $("#c-icon").addClass("wi wi-night-clear");
        } else if (icon=="partly-cloudy-day") {
          $("#c-icon").addClass("wi wi-day-cloudy");
        } else if (icon=="partly-cloudy-night") {
          $("#c-icon").addClass("wi wi-night-cloudy");
        } else if (icon=="cloudy") {
          $("#c-icon").addClass("wi wi-cloudy");
        } else if (icon=="rain") {
          $("#c-icon").addClass("wi wi-rain");
        } else if (icon=="sleet") {
          $("#c-icon").addClass("wi wi-sleet");
        } else if (icon=="snow") {
          $("#c-icon").addClass("wi wi-snow");
        } else if (icon=="wind") {
          $("#c-icon").addClass("wi wi-windy");
        } else if (icon=="fog") {
          $("#c-icon").addClass("wi wi-fog");
        }

        $("body").append("<div>Hello</div>" + icon);
    }
  });
}

$(document).ready(function(){
  // $(".info").html("Hello");
  getLocation();
});

// Possible values for icon on Dark Sky API

// clear-day
// clear-night
// partly-cloudy-day
// partly-cloudy-night
// cloudy
// rain
// sleet
// snow
// wind
// fog
