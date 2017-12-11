$('.img-thumb').on('mouseenter', function(event){
  $(this).css({
    "filter" : "blur(3px)"
  });
  $(this).next().show();
});

$('.img-thumb').on('mouseleave', function(event){
  $(this).css({
    "filter" : ""
  });
  $(this).next().hide();
})
