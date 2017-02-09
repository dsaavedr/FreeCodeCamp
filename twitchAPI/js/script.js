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

              if (data.display_name!=undefined){
                addBox("c",data);
              } else {
                addBox("z", data);
              }
            }

          });
        } else {

          if (data.status===null) {
            data.status = "";
          }

          addBox("s",data);
        }

      },
    });
  }
});

addBox = function(k,d) {
  var c = $("#content")[0];

  if (k=="c") {
    c.innerHTML+=
    "<a target='_blank' href='https://twitch.tv/" + d.display_name + "'><div class='channel offline'>" +
      "<img src='" + d.logo + "' alt=''>" +
      "<h2 class='text-right'>" + d.display_name + "</h2>" +
      "<p class='text-right'><b>" + d.status + "</b></p>" +
      "<p class='text-right'>Offline</p>" +
    "</div></a>";
  } else if (k=="s") {
    d1=d;
    d=d.stream.channel;
    c.innerHTML+=
    "<a target='_blank' href='https://twitch.tv/" + d.display_name + "'><div class='channel online'>" +
      "<img src='" + d.logo + "' alt=''>" +
      "<h2 class='text-right'>" + d.display_name + "</h2>" +
      "<p class='text-right'><b>" + d1.stream.game + "</b> -   Created at: " + d1.stream.created_at + "</p>" +
      "<p class='text-right'>" + d.status + "</p>" +
    "</div></a>";
  } else {
    c.innerHTML+=
    "<a href='#'><div class='channel offline'>" +
      "<img src='http://placehold.it/300x300' alt=''>" +
      "<h2 class='text-right'>" + d.message + "</h2>" +
      "<p class='text-right'><b>" + d.status + " " + d.error + "</b></p>" +
    "</div></a>";
  }
}
