 
  $(document).ready(function() {
    $("form#pingpongform").submit(function(event) {
      event.preventDefault();
      var numberz = parseInt($("input#numberz").val());
      var result = pingPongNumber(year);
      $("#result").text(result);
    });
  });

  var pingPongNumber = function(input) {
    if (numberz % 3 === 0) {
        $(#result).text("Ping");
    } else if (numberz % 5 === 0) {
        $(#result).text("Pong");
    } else  if (numberz % 15 === 0) {
        $(#result).text("Ping Pong");
    } else {
        $(#result).text("numberz");
    }
  };