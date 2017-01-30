var url = "https://wind-bow.gomix.me/twitch-api/"
var channels = ["MedryBW", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function() {
  for (i=0; i<channels.length; i++) {
    $.ajax({
      url: url + 'streams/' + channels[i],
      dataType: 'jsonp',
      success: function (data) {

        console.log(data);

        if (data.stream===null) {
          var link=data._links.channel;
          link=link.split("/");
          link=link[link.length - 1];
          $.ajax({
            url: url + "channels/" + link,
            dataType: "jsonp",
            success: function(data) {
              console.log(data);
              window.channel = data;
            }
          });
        } else {
          window.channel = data.stream.channel;
        }

      }

    });
  }
});
