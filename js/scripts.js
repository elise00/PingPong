var total = 0;
for (var i = 1; i <= 300; i += 1) {
  total += i;
    if (i % 15 == 0) {
    document.write("PingPong");
    } else if (i % 3 == 0) {
    document.write("Ping");
    } else if (i % 5 == 0) {
    document.write("Pong");
    } else
    document.write(i);
    document.write('<br>');
}

$(document).ready(function() {
  $("#pingpongform").submit(function(event) {
    $("result").text(result);
    event.preventDefault();
    // var numberz = parseInt($("input#numberz").val());
    // var result = total();

  });
});
// var numberz = [];
//     for (var index = 1; index <= numberz; index +=1) {
//     if (numberz % 3 === 0) {
//         $(result).text("Ping");
//     } else if (numberz % 5 === 0) {
//         $(result).text("Pong");
//     } else  if (numberz % 15 === 0) {
//         $(result).text("Ping Pong");
//     } else {
//         $(result).text("numberz");
//     }
//     }
//   };
