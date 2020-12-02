
$(document).ready(function() {
  // if no cookie found...
  if (!$.cookie('day_pass_closed')) {
    // ...display popup-cookie    
    $('.popup-overlay').hide();

    setTimeout(function(){
        $('.popup-overlay').fadeIn('fast');
        $('body').css('overflow', 'hidden');
    },9000);
 
    // create a new date variable
    var date = new Date();
    // set date to be equal to 14 days from current date time
    date.setTime(date.getTime() + 28 * 24 * 60 * 60 * 1000);
    // create cookie on click to expire on newly defined date
    $('.popup-close').click(function() {
      $.cookie('day_pass_closed', true, { expires: date });
      $('body').css('overflow', 'auto');
    });
  }
});
