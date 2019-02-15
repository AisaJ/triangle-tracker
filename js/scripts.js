function triangleCheck() {

  var a = parseInt(document.getElementById("sideA").value);
  var b = parseInt(document.getElementById("sideB").value);
  var c = parseInt(document.getElementById("sideC").value);

  //checks if a dimension entered is 0
  if(a===0 || b===0 || c===0) {
    document.getElementById("show").innerHTML = "Enter a valid number!";
    alert("Value entered must be greater than zero");
    confirm("Please try again Or see instructions.");
  }else if(a+b>c && b+c>a && c+a>b){
    if(a===b && b===c){
      document.getElementById("show").innerHTML = "This is an Equilateral Triangle";
    }else if (a===b || b===c || a===c){
      document.getElementById("show").innerHTML = "This is an Isosceles Triangle";
    }else if(a!==b && b!==c && c!==b){
      document.getElementById("show").innerHTML = "This is a Scalene Triangle";
    }
  }else{
    alert("Not a Triangle!");
  }
}
