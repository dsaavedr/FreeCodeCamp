var url = "https://wind-bow.gomix.me/twitch-api/"

$(document).ready(function() {
  $.ajax({
    url: url + 'streams/MedryBW',
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
});
