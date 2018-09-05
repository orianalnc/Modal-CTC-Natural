$(document).on('ready', function(){
    $modal = $('.modal-frame');
    $overlay = $('.modal-overlay');

    $modal.bind('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e){
      if($modal.hasClass('state-leave')) {
        $modal.removeClass('state-leave');
      }
    });

    $('.close').on('click', function(){
      $overlay.removeClass('state-show');
      $modal.removeClass('state-appear').addClass('state-leave');
    });

    jQuery(window).on('load', function(){
      setTimeout(function() {
        $overlay.addClass('state-show');
        $modal.removeClass('state-leave').addClass('state-appear');
      }, 1000); 
    });
   

 
});