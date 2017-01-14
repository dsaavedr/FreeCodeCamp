var key = "234b6aedce614c99b89175711498ee6b"
String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

bodyAppend = function(string) {
  $(".row .info").append(string);
}

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

        console.log(data);

        var icon=data.currently.icon;
        var zone=data.timezone;
        var fcast=data.hourly.summary;
        var temp=data.currently.temperature;
        var temps=temp.toString();
        var tu="F";

        // $("#c-icon").removeClass();

        if (icon=="clear-day") {
          $("#c-icon").addClass("wi wi-day-sunny sunny");
        } else if (icon=="clear-night") {
          $("#c-icon").addClass("wi wi-night-clear night");
        } else if (icon=="partly-cloudy-day") {
          $("#c-icon").addClass("wi wi-day-cloudy");
        } else if (icon=="partly-cloudy-night") {
          $("#c-icon").addClass("wi wi-night-cloudy night");
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

        icon=icon.split("-").join(" ").capitalizeFirstLetter();

        bodyAppend("<div class='icon text-primary text-center'>" + icon + "</div>");
        bodyAppend("<div class='text-center'>" + zone + "</div>");
        bodyAppend("<div class='text-center temp'><span>" + temps + "</span> <a id='degrees' class='text-primary' href='#'>°" + tu + "</a></div>");
        bodyAppend("<div class='container'><div class='well text-center'><b>Forecast: </b>" + fcast + "</div></div>");

        $("#degrees").click(function() {
          if ($(".temp a")[0].innerText=="°F") {
            var x=(temp-32)/1.8;
            x=Math.round(x*100)/100;
            $(".temp span")[0].innerHTML=x;
            $(".temp a")[0].innerText="°C";
          } else {
            $(".temp span")[0].innerHTML=temps;
            $(".temp a")[0].innerText="°F";
          }
        });
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
