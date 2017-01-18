search = function() {
  var val = $("input").value;

  $.ajax({
    url: "http://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&gsrsearch=" + val,
    dataType: "json",
    success: function (data) {
      console.log(data);
    }
  });

}
