$(function () {
    $('#global_nav_btn, #global_overlay').on('click', function() {
        $('body').toggleClass('open');
    });

    var url = window.location;
    $('nav a[href="'+url+'"]').addClass('current');

    var menuHeight = $("#global_nav_btn").height(); //メニューの高さを取得
    var startPos = 0; //スクロールの基準をstartPosとします
    $(window).scroll(function(){
      var currentPos = $(this).scrollTop(); //スクロール時の位置をcurrentPosとします
      if (currentPos > startPos) { //currentPosがstartPosより大きい時(下にスクロールしている時)
        if($(window).scrollTop() >= 200) { //上に加えて下に200pxスクロールした時
          $("#global_nav_btn").addClass("is-hide"); //メニューに.is-hideを付与
        }
      } else {
        $("#global_nav_btn").removeClass("is-hide"); //それ以外は.is-hideを削除
      }
      startPos = currentPos; //スクロールの基準を揃える
    });

});