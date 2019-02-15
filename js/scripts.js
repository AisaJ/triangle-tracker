function triangleCheck() {

  var a = parseInt(document.getElementById("sideA").value);
  var b = parseInt(document.getElementById("sideB").value);
  var c = parseInt(document.getElementById("sideC").value);

  var dimension = [a,b,c];

  //checks if a dimension entered is 0
  if(dimension[0]===0 || dimension[1]===0 || dimension[2]===0) {
    document.getElementById("show").innerHTML = "Enter a valid number!";
    alert("Value entered must be greater than zero");
    confirm("Please try again Or see instructions.");
  }else if(a+dimension[1]>dimension[2] && dimension[1]+dimension[2]>dimension[0] && dimension[2]+dimension[0]>dimension[1]){
    if(dimension[0]===dimension[1] && dimension[1]===dimension[2]){
      document.getElementById("show").innerHTML = "This is an Equilateral Triangle";
    }else if (dimension[0]===dimension[1] || dimension[1]===dimension[2] || dimension[0]===dimension[2]){
      document.getElementById("show").innerHTML = "This is an Isosceles Triangle";
    }else if(dimension[0]!==dimension[1] && dimension[1]!==dimension[2] && dimension[2]!==dimension[1]){
      document.getElementById("show").innerHTML = "This is a Scalene Triangle";
    }
  }else{
    alert("Not a Triangle!");
  }
}
