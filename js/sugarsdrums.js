jQuery(function($){
  //共通部分の読み込み
  $.get("sidemenu.html", function(data){
    $(".sidemenu").html(data);
  });
  $.get("footer.html", function(data){
    $("footer").html(data);
  });
});
