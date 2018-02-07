$(function () {
    $('#global_nav_btn, #global_overlay').on('click', function() {
        $('body').toggleClass('open');
    });

    var url = window.location;
    $('nav a[href="'+url+'"]').addClass('current');

    //スマホメニュー
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

    // アコーディオン 撮影内容選択
    $('.reserve_details .accordion dd').hide(); //詳細非表示
    $('.reserve_details .accordion dt').click(function(){ //dtクリックイベント
      $(this).next('dd').slideDown(); //クリックされたdtの次にあるddにslideDownを実行
      $(this).next('dd').siblings('dd').slideUp(); //クリックされたdtの次にあるdd以外のddにslideUpを実行
    });

    // アコーディオン キャンセル待ち通知登録
    $('.waiting_list .accordion dl dd').hide(); //詳細非表示
    $('.waiting_list .accordion dl dt').click(function(){ //dtクリックイベント
      $(this).next('dd').slideToggle(); //クリックされたdtの次にあるddにslideToggleを実行
      // 矢印箇所
      if ($(this).hasClass('active')) { // activeが存在する場合
        $(this).removeClass('active'); // activeを削除
      }
      else {
        $(this).addClass('active'); // activeを追加
      }
    });

});