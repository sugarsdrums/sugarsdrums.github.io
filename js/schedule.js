jQuery(function($){
  $.get("/calendar-view.html", function(data){
    $("div.calendar-position").html(data).css("display", "none");
  });
  $(".calendar-view").click(function(){
    $("div.calendar-position").toggle(100)
  });
  //�X�P�W���[���ڍ�
  $(".schedule-item").click(function(){
    $(this).next().toggle(100);
  });
});
