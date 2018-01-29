$(function () {
    $('.sp_nav,.modal_overlay').on('click', function() {
        $('body').toggleClass('open');
    });

    var url = window.location;
    $('nav a[href="'+url+'"]').addClass('current');

    $(window).on("scroll", function() {
        scrollHeight = $(document).height(); //ドキュメントの高さ 
        scrollPosition = $(window).height() + $(window).scrollTop(); //現在地 
        footHeight = $("footer").innerHeight(); //footerの高さ（＝止めたい位置）
        if ( scrollHeight - scrollPosition  <= footHeight ) { //ドキュメントの高さと現在地の差がfooterの高さ以下になったら
            $(".sp_nav").addClass("is-hide"); //スマホメニューボタン非表示(.sp_navに.is-hide付与)
        } else { //それ以外の場合は
            $(".sp_nav").removeClass("is-hide"); //スマホメニューボタン表示(.sp_navから.is-hide削除)
        }
    });

});