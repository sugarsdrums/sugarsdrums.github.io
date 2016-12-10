jQuery(function($){
  $.get("/calendar-view.html", function(data){
    $("div.calendar-position").html(data).css("display", "none");
  });
  $(".calendar-view").click(function(){
    $("div.calendar-position").toggle(100)
  });
  //スケジュール詳細
  $(".schedule-item").click(function(){
    $(this).next().toggle(100);
  });
  //更新
  var checkDate = function(){
    return function(){
      var limit = new Date($(this).attr("data-limit"));
      return new Date().getTime() < limit.getTime();
    };
  };
  $("[data-limit]")
    .filter(function(){
      var limit = new Date($(this).attr("data-limit"));
      return limit.getTime() < new Date().getTime();
    }).hide();
});
