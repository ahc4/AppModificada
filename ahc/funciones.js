// JavaScript Document
$(document).on("pagecreate","#principal",function(){
  $("p").on("swiperight",function(){
    alert("What's up!!");
  });                       
});

$(document).on("pagecreate","#facebook",function(){
  $("p").on("taphold",function(){
    $(this).hide();
  });                       
});

$(document).on("pagecreate","#twitter",function(){
  $("p").on("tap",function(){
    $(this).hide();
  });                       
});

$(document).on("pagecreate","#instagram",function(){
  $("p").on("swipeleft",function(){
    alert("¡¡Hola!!");
  });                       
});