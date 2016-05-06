jQuery(function($){
  //共通部分の読み込み
  $.get("sidemenu.html", function(data){
    $(".sidemenu").html(data);
  });
  $.get("footer.html", function(data){
    $("footer").html(data);
  });
  
  //イメージ
  $(".clickableimage").click(function(){
    var $orgtag = $(this), src = $orgtag.attr("src"), $fl = $("<div id='filter'><img src='" + src + "'/></div>");
    $fl.click(function(){
      $(this).remove();
    });
    $("body").append($fl);
  });
});
