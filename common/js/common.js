$(function () {
	$('.sub-menu').on({
        'mouseenter': function () {
            $(this).addClass('is-active');
        },
        'mouseleave': function () {
            $(this).removeClass('is-active');
        }
    });

    $('#nav_toggle,#overlay').on('click', function() {
        $('body').toggleClass('open');
    });
    var url = window.location;
    $('.global-nav a[href="'+url+'"]').addClass('active');
});