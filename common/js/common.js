$(function () {
    $('.sp_nav,.modal_overlay').on('click', function() {
        $('body').toggleClass('open');
    });
    var url = window.location;
    $('nav a[href="'+url+'"]').addClass('current');
});