var quoteNum = 0;

$(document).ready(function () {
  quoteNum = Math.floor(Math.random()*10+1);
  $(".quote").html(quotes["id"][quoteNum]["quote"]);
  $(".author").html("- " + quotes["id"][quoteNum]["author"]);
  $('.twitter-link').attr('href', 'https://twitter.com/intent/tweet?text=' + quotes["id"][quoteNum]["quote"] + " - " + quotes["id"][quoteNum]["author"]);

  $(".col-sm-4 .quote-btn").on("click", function () {
    var quoteNum = 0;
    quoteNum = Math.floor(Math.random()*10+1);
    $(".quote").html(quotes["id"][quoteNum]["quote"]);
    $(".author").html("- " + quotes["id"][quoteNum]["author"]);
    $('.twitter-link').attr('href', 'https://twitter.com/intent/tweet?text=' + quotes["id"][quoteNum]["quote"] + " - " + quotes["id"][quoteNum]["author"]
                           );
  });
});
