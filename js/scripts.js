var pingPongNumber = function(year) {
    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      return true;
    } else {
      return false;
    }
  };
  
  $(document).ready(function() {
    $("form#pingpongform").submit(function(event) {
      event.preventDefault();
      var numberz = parseInt($("input#numberz").val());
      var result = pingPongNumber(year);
      $("#result").text(result);
    });
  });