$(document).on("scroll ready", handleScroll);

function handleScroll(){
  if (document.body.scrollTop > 100){
    $("nav").css("opacity", "1");
  }
  else{
    $("nav").css("opacity", "0");
  }
}

$("#formsubmit").on("click", clickHandler);

function clickHandler(){
  $("#myModal .modal-footer span").html("Please Wait...");
  $("#formsubmit").off("click");
  var data = {
    first_name: $("#fname").val(),
    last_name: $("#lname").val(),
    email: $("#email").val(),
    phone1: $("#phone").val(),
    program_id: "tech.fvi.edu"
  }
  $.ajax({
    url: "http://fvi-grad.com:4004/submittechfviform",
    method: 'POST',
    success: function(resp, txt, xhr){
      $("#myModal .modal-footer span").html(resp);
      $("#formsubmit").on("click", clickHandler);
      console.log(resp);
      setTimeout(function(){$("#myModal .modal-footer span").html("");}, 1500);
    },
    data: data,
    error: function(error, otherstuff){
      $("#myModal .modal-footer span").html(error.statusText);
    }
  });
}
