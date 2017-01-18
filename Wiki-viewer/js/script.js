search = function() {

  $(".content").html(" ");

  var val = $("#search")[0].value;

  $.ajax({
    url: "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=12&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + val,
    dataType: "jsonp",
    success: function (data) {
      console.log(data);

      result = data.query.pages;

      // $(".mobile").css({
      //   'height': '',
      //   'margin': '',
      //   'display':'',
      //   'justify-content': '',
      //   'align-items': '',
      //   'resize': '',
      //   'overflow': ''
      // });

      $(".mobile").addClass(" mobile-moved");
      // $(".mobile h1").css("margin-top","10px");

      for (var i in result) {
        $("<a target='_blank' href='https://en.wikipedia.org/wiki/" + result[i].title.split(" ").join("_") +
        "'><div class='item col-lg-3'>" +
        "<h3>" + result[i].title + "</h3>" +
        "<p>" + result[i].extract +
        "</div></a>")
          .appendTo(".content");
      }
    }
  });
}

$(document).ready(function() {
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    $("#search").keypress(function(event) {
    if (event.which == 13) {
        search();
    }
});
});
