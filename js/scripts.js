function test(){
  var sides =[];

  sides.push(document.getElementById("sideA").value);
  sides.push(document.getElementById("sideB").value);
  sides.push(document.getElementById("sideC").value);

  var [a,b,c] = sides;
  var show = document.getElementById("show");
  if (a.length===0 && b.length ===0 c.length===0){
    show = inner.HTML= "Please entr dimensions!";
  }
}
