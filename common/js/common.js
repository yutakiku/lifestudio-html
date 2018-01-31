$(function () {
    $('.sp_nav,.modal_overlay').on('click', function() {
        $('body').toggleClass('open');
    });

    var url = window.location;
    $('nav a[href="'+url+'"]').addClass('current');

    var menuHeight = $(".sp_nav").height(); //メニューの高さを取得
    var startPos = 0; //スクロールの基準をstartPosとします
    $(window).scroll(function(){
      var currentPos = $(this).scrollTop(); //スクロール時の位置をcurrentPosとします
      if (currentPos > startPos) { //currentPosがstartPosより大きい時(下にスクロールしている時)
        if($(window).scrollTop() >= 200) { //上に加えて下に200pxスクロールした時
          $(".sp_nav").addClass("is-hide"); //メニューに.is-hideを付与
        }
      } else {
        $(".sp_nav").removeClass("is-hide"); //それ以外は.is-hideを削除
      }
      startPos = currentPos; //スクロールの基準を揃える
    });

});