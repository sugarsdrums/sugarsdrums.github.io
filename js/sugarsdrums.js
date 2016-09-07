jQuery(function($){
  //共通部分の読み込み
  $.get("sidemenu.html", function(data){
    $(".sidemenu").html(data);
  });
  $.get("footer.html", function(data){
    $("footer").html(data);
  });
  //タイトルクリックでトップに戻れるようにしておく
  $(".header").click(function(){
    window.location.href = "/top.html";
  });
  //イメージ
  $(".clickableimage").click(function(){
    var src = $(this).attr("src"), $fl = $("<div id='filter'><img src='" + src + "'/></div>");
    $fl.click(function(){
      $(this).remove();
    });
    $("body").append($fl);
  });
  //スケジュール詳細
  $(".schedule-item").click(function(){
    $(this).next().toggle(100);
  });
});
