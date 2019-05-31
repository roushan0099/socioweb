;(function($) {

    // DOM ready
    $(function() {
        
  
      // Append the mobile icon nav
      $('.nav').append($('<div class="nav-mobile"></div>'));
  
      // Add a <span> to every .nav-item that has a <ul> inside
      $('.nav-item').has('ul').prepend('<span class="nav-click"><i class="nav-arrow"></i></span>');
  
      // Click to reveal the nav
      $('.nav-mobile').click(function(){
        $('.nav-list').toggle();
      });
  
      // Dynamic binding to on 'click'
      $('.nav-list').on('click', '.nav-click', function(){
  
        // Toggle the nested nav
        $(this).siblings('.nav-submenu').toggle();
  
        // Toggle the arrow using CSS3 transforms
        $(this).children('.nav-arrow').toggleClass('nav-rotate');
        var clicks = $(this).data('clicks');
if (!clicks) {
  $(this).siblings('.nav-submenu').attr('style','display: block !important');
} else {
  $(this).siblings('.nav-submenu').removeAttr('style');
}
$(this).data('clicks', !clicks);
  
      });
  
    });
  
  })(jQuery);