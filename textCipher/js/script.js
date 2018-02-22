function transform() {
  var str = $("#mainInput")[0].value.toUpperCase();

  var lb = 65,
      ub = 90,
      d;

  var arr = str.split("").map(function(a, i) {
    return a.charCodeAt(0);
  });

  arr.forEach(function(a, i) {
    if(a >= lb && a <= ub) {
      d = ub - arr[i];

      if (d < 13) {
        d = 12 - d;
        arr[i] = lb + d;
      } else {
        arr[i] += 13;
      }
    }
    arr[i] = String.fromCharCode(arr[i]);
  });

  $("#output>.text-main")[0].innerHTML = arr.join("");
}

$(document).ready(function() {
  transform();

  $("input.btn").keypress(function(event) {
    if (event.which == 13) {
        transform();
    }
  });
});
