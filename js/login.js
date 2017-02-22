//验证手机号码
var sends = {
	send:function(){
		var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
		var nval =$("#phone").val().replace(/\s+/g,"");
		if(!myreg.test(nval)){ 
			mui.toast('请输入有效的手机号码');
		}else if(nval.length==0){
			mui.toast('请输入手机号码！');
		 }else if(nval.length!=11){ 
		 	mui.toast('请输入有效的手机号码');
		 } 
		if(myreg.test(nval)){
			var time = 30;
				var timer = setInterval(timeCountDown,1000);
				function timeCountDown(){
					if(time==0){
						clearInterval(timer);
						$('#message').removeClass('send1').val("重新获取验证码");
						$('#message').removeAttr('disabled');
						return true;
					}else{
						$('#message').addClass('send1').val(time+"S后再次发送");
						$('#message').attr('disabled','true');
						time--;
						return false;
					}
				}
			timeCountDown();
			
		}
	}
}
$('#message').on('click',function(){
	sends.send();
})

$(".regInfo li input").on("keyup",function(){
	if($(this).val().length>0){
		$(this).addClass("focus");
	}else{
		$(this).removeClass("focus");
	}
})