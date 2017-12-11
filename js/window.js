var mobile = false;

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  mobile = true;
}

$(function(event){
  get_page('#about');
});

$('#nav a').on('click', function(event){
  var url = $(event.target).attr('href');
  console.log(url);
  get_page(url);
  $('#nav .selected').removeClass('selected');
  $(this).addClass('selected');
  if (mobile){
    $('.nav-top').slideToggle();
  }
});

$('#menu a').on('click', function(event){
  $('.nav-top').slideToggle();
});

function get_page(url) {
  url = url.replace('#', './pages/');
  url += ".html";
  console.log(url);

  $.ajax(url)
    .done(function(response){
      $('#main_content').html(response);
    })
    .fail(function(response){
      console.log(response);
    });
}
