$(document).ready(function() {
  var explore = function(side1, side2, side3){
    if (side1 === side2 && side2 === side3){
      return "equilateral";
    } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
      return "scalene";
    }else{
      return "isosceles";
    };
  };

  $("#tSides").submit(function(event) {
    var side1 = $("#side1").val();
    var side2 = $("#side2").val();
    var side3 = $("#side3").val();
    console.log(side1);
    $(".tType").text(explore(side1, side2, side3));
    $("h3").show();
    event.preventDefault();
  });
});
