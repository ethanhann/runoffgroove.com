jQuery(document).ready(function() {
    var duration = 500;
    var navbarOffset = 80;
    jQuery('.sidebar a').click(function(e) {
        e.preventDefault();
        var targetElementId = jQuery(this).attr('href');
        var position = jQuery(targetElementId).offset();
        jQuery('html, body').animate({scrollTop: position.top - navbarOffset}, duration);
        return false;
    })
});
