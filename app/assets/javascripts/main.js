console.log("hello");

$(function(){
  $("nav").hide();
});

$(function(){
  $("nav").hide();
  $(".menubtn").click(function(){//メニューボタンをクリックしたとき
      $("nav").toggle(300);//0.3秒で表示したり非表示にしたりする
  });
});