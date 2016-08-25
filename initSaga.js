var xPos = 0;
var yPos = 0;
var ctx;

window.onload = function(){
  var canvas = document.getElementById("app");
  ctx = canvas.getContext("2d");
  window.addEventListener( "keydown", doKeyDown, true);
  window.uTick = setInterval(update,1000/30);


}

function update(){
  ctx.clearRect(0, 0, 1366, 768);
  xPos+=1;
  ctx.fillStyle="black";
  ctx.fillRect(xPos,yPos,60,60);
}

function doKeyDown(e) {
  console.log( e.keyCode );
  //Stop Updates if Q is pressed
  if(e.keyCode==81){
    clearInterval(uTick);
  }
}
