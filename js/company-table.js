$(function(){
  $('.company-table').find('td').filter(function() {
    return $(this).index() === 0;
  }).sortElements(function(a, b) {
    if ($.text([a]) === $.text([b])) return 0;

    return $.text([a]) > $.text([b]) ? 1 : -1;
  }, function() {
    return this.parentNode;
  });
});