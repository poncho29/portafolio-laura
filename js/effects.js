$(document).ready(function(){
  $('.nav a').each(function(index, element){
    $(this).css({
      'top': '-200px'
    });

    $(this).animate({
      top: '0'
    }, 1500 + (index * 500));
  });
});