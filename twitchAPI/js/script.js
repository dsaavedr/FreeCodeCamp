var url = "https://wind-bow.gomix.me/twitch-api/"
var channels = ["MedryBW", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin"];
var info = {};

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

              if (data.status===null) {
                data.status = "";
              }

              addBox("c",data);
            }

          });
        } else {

          if (data.status===null) {
            data.status = "";
          }

          addBox("s",data.stream.channel);
        }

      }

    });
  }
});

addBox = function(k,d) {
  var c = $("#content")[0];

  if (k=="c") {
    c.innerHTML+=
    "<a href='#'><div class='channel'>" +
      "<img src='" + d.logo + "' alt=''>" +
      "<h2 class='text-right'>" + d.display_name + "</h2>" +
      "<p class='text-right'><b>" + d.status + "</b></p>" +
      "<p class='text-right'>Offline</p>" +
    "</div></a>";
  } else {
    c.innerHTML+=
    "<a href='#'><div class='channel'>" +
      "<img src='" + d.logo + "' alt=''>" +
      "<h2 class='text-right'>" + d.display_name + "</h2>" +
      "<p class='text-right'><b>" + d.status + "</b></p>" +
    "</div></a>";
  }
}
