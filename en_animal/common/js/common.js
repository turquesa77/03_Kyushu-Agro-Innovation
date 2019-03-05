// slick: keyVisual -------------------------------------------

$(document).ready(function(){
	$('.keyVisual__slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true, //マウスホバーで一時停止
		infinite: true, //スライドの無限ループの有効化
		slidesToShow: 4, // 表示するスライドの数
		slidesToScroll: 1, // 一度にスクロールするスライドの数
		responsive: [
			{
				breakpoint: 1024,
				settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				}
			},
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});

// slick: visitorPhoto2017 -------------------------------------------

$(document).ready(function(){
	$('.previousPhoto__slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnHover: true,
		infinite: true,
		slidesToShow: 2, // 表示するスライドの数
		slidesToScroll: 1, // 一度にスクロールするスライドの数
		centerMode: true, // 要素を中央寄せ
		responsive: [
			{
				breakpoint: 600,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			},
			{
				breakpoint: 480,
				settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				}
			}
		]
	});
});

// スムーススクロール -------------------------------------------

$(function(){
	// #で始まるアンカーをクリックした場合に処理
	$('a[href^="#"]').click(function() {
		// スクロールの速度
		var speed = 400; // ミリ秒
		// 移動先を取得
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		// 移動先を数値で取得
		var position = target.offset().top;
		// スムーススクロール
		$('body,html').animate({scrollTop:position}, speed, 'swing');
		return false;
	});
});

// ページトップリンク -------------------------------------------

$(function () {
    var topBtn = $('#page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スルスルっとスクロールでトップへもどる
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});