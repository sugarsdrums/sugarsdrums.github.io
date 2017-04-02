jQuery(function($){
  $.ajaxSetup({
    cache: false
  });
  //共通部分の読み込み
  $.get("/sidemenu.html", function(data){
    $(".sidemenu").html(data);
    var d = new Date(), y = d.getFullYear(), m = d.getMonth() + 1;
    if(m < 10){
      m = "0" + m;
    }
    $("#schedule_tag").attr("href", "/schedule/schedule" + y + m + ".html");
  });
  $.get("/footer.html", function(data){
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
});
