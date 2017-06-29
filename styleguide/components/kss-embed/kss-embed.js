$(function() {
  // activate tabs
  $(".kss-embed").tabs({
    active: 0
  });
  $(".kss-embed__inline").tabs({
    active: 1
  });
  // render html inside iframe
  $(".kss-embed__html").each(function(i) {
    var iframe = $(this).find('.kss-embed__html-iframe');
    var html_code = $(this).find('.kss-embed__html-code').html() + $('head').html();
    $(iframe).attr('srcdoc', html_code);
  });
});
