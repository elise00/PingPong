var total = 0;
for (var currentNumber = 1; currentNumber <= 300; currentNumber += 1) {
  total += currentNumber;
}


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
//   $(document).ready(function() {
//     $("form#pingpongform").submit(function(event) {
//       event.preventDefault();
//       var numberz = parseInt($("input#numberz").val());
//       var result = pingPongNumber(year);
//       $("#result").text(result);
//     });
//   });