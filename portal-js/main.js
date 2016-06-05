$(document).on("scroll ready", handleScroll);

function handleScroll(){
  if (document.body.scrollTop > 100){
    $("nav").css("opacity", "1");
  }
  else{
    $("nav").css("opacity", "0");
  }
}
