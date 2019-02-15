function triangleCheck() {

  var a = parseInt(document.getElementById("sideA").value);
  var b = parseInt(document.getElementById("sideB").value);
  var c = parseInt(document.getElementById("sideC").value);


  if (a===0 || b===0 || c===0){
    document.getElementById("show").innerHTML = "Enter a valid value!";
    alert("Value entered must be greater than zero");
    confirm("Please try again Or see instructions.");
  }else if(a+b>c && b+c>a && c+a>b){
    if(a===b && b===c){
      alert("This is an Equilateral Triangle");
    }else if (a===b || b===c || c===a) {
      alert("This is an Isosceles Triangle");
    }else if(a!==b && b!==c && c!==b){
      alert("This is a Scalene Triangle");
    }
  }else{
    alert("Not a Triangle!");
  }
}
