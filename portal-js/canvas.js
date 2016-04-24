var bg = new Image();
bg.src = "../img/banner.png";
var canvas = document.getElementById("bgcanvas");
window.onresize = sizeCanvas;
sizeCanvas();
var ctx = canvas.getContext("2d");

bg.onload = function(){
  var xoffset = 0;
  var paintCounter = 0;
  paint();
  function paint(){
    
    var lastPaint = xoffset;
    while (lastPaint < window.innerWidth){
      ctx.drawImage(bg, lastPaint, 0, bg.width, bg.height);
      lastPaint += bg.width;
    }
    //if (paintCounter++ % 3 == 0) xoffset -= 1;
    xoffset -= 0.2;
    window.requestAnimationFrame(paint);
  }
  
};

function sizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}