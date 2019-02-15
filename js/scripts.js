function test(){
  var sides =[];

  sides.push(document.getElementById("sideA").value);
  sides.push(document.getElementById("sideB").value);
  sides.push(document.getElementById("sideC").value);

  var [a,b,c] = sides.parseInt();

  if (a.length===0 && b.length ===0 c.length===0){
    document.getElementById("show").innerHTML = "Enter a valid value!";
    alert("Value entered must be greater than zero");
    confirm("Please try again Or see instructions.");
  }else{
    sides(a,b,c);
  }
}
function sides(a,b,c){
  if(a+b>c && b+c>a && c+a>b){
    if(a===b && b===c){
      alert("This is an Equilateral Triangle");
    }else if (a===b || b===c || c===a) {
      alert("This is an Isosceles Triangle");
    }else (a!==b && b!==c && c!==b){
      alert("This is a Scalene Triangle");
    }
  }else{
    alert("Not a Triangle!");
  }
}
