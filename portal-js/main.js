var $mc = $("#main-container");
var mcH = $mc.height();
var topMargin = Math.max( 75, (window.innerHeight - mcH)/2);
$mc.offset({top: topMargin});