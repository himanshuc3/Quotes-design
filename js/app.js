
$(document).ready(function() {

  generaterandomquote();

  $('.button').on('click', function() {
    generaterandomquote();
  });

function generaterandomquote() {

  $.ajax({
    type: 'GET',
    url: 'http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=',//https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1
    success: function(data) {
      var post = data.shift();
      $('#quote-title').text("By " + post.title);
      $('#quote-content').html(post.content);
      $('p').addClass('quoteClass');
    },
    cache: false,
    gobal: true
  });
}

$(document).ajaxStop(function() {
  $('#quote-content').css('display', 'inline');
  // $('#quote-title').css('display', 'inline');
});




});