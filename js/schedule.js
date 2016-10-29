jQuery(function($){
  $("h3.schedule").click(function(){
  });
  //スケジュール詳細
  $(".schedule-item").click(function(){
    $(this).next().toggle(100);
  });
});
