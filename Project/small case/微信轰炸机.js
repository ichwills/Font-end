/**
 * 微信轰炸机,请勿滥用
 * 配合AutoJs app使用
 */
setInterval(function () {
  $(".edit_area").html("###"); //需要发送的内容
  $(".edit_area").trigger($.Event("keydown", { keyCode: 13, ctrlKey: true }));
  $(".btn_send").click();
}, 3000);
