var bg = new Image();
bg.src = "../img/banner.png";
var canvas = document.getElementById("bgcanvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext("2d");
bg.onload = function(){
  var lastPaint = 0;
  while (lastPaint < window.innerWidth){
    ctx.drawImage(this, lastPaint, 0, this.width, this.height);
    lastPaint += this.width;
  }
};