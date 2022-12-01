jQuery(document).ready(function ($) {

    // $('html').click(function() {
    //     $('.site-header .form-holder form').hide();
    // });
    // $('.form-holder').click(function(event) {
    //     event.stopPropagation();
    // });
    // $(".search-btn").click(function() {
    //     $(".site-header .form-holder form").slideToggle();
    //     return !1;
    // });

    // $(".btn-form-close").click(function() {
    //     $(".site-header .form-holder form").slideToggle();
    //     return !1;
    // });

    $('html').click(function() {
        $('.right .header-search-modal').slideUp();
    });

    $('.form-holder').click(function(event) {
        event.stopPropagation();
    });

    $(".search-btn").click(function() {
        $(" .right .header-search-modal").slideToggle(); 
        return false;
    });

    $(".btn-form-close").click(function() {
        $(".right .header-search-modal").slideToggle();
        return false;
    });
});