jQuery(function($){
  $("h3.schedule").click(function(){
  });
  //�X�P�W���[���ڍ�
  $(".schedule-item").click(function(){
    $(this).next().toggle(100);
  });
});
