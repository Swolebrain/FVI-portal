var bg = new Image();
bg.src = "./img/banner.png";
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
    //this loop paints as many horizontal copies of the bg image as
    //we need to cover the width of the screen
    while (lastPaint < window.innerWidth){
      ctx.drawImage(bg, lastPaint, 0, bg.width, bg.height);
      lastPaint += bg.width;
    }
    xoffset -= 0.2;
    window.requestAnimationFrame(paint);
  }
  
};

function sizeCanvas(){
  canvas.width = window.innerWidth;
  var titleEnd = $(".hovering").offset().top+$(".hovering").height(); //where the abs positioned div ends
  canvas.height = Math.max(500, titleEnd*1.1);
}