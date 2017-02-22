//团购详情

//获取参团闺蜜 li 宽度
$(document).ready(function(){
	getLiWidth();
});
$(window).resize(function(){
	getLiWidth();
});
function getLiWidth(){
	var liwidth=$("body .joinSister li").css("width");
	$("body .joinSister .sisterImg").css("height",liwidth);
}

// 弹出 登录 弹层 方法
function popLogin(){
	$(".loginPopBg").fadeIn();
	$(".loginPopBox").fadeIn();
}

// 关闭    登录 弹层 方法
function closeLoginPop(){
	$(".loginPopBg").fadeOut();
	$(".loginPopBox").fadeOut();
}

//点击参团按钮  弹出 登录 弹层
$("body").on("tap",".startBtnBox",function(){
	popLogin();
});

//点击背景  关闭  登录 弹层
$("body").on("tap",".loginPopBg",function(){
	closeLoginPop();
});

//点击关闭按钮  关闭  登录 弹层
$("body").on("tap",".loginPopBox .closePop",function(){
	closeLoginPop();
});

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
						$('#message').val("重新获取验证码");
						$('#message').removeAttr('disabled');
						return true;
					}else{
						$('#message').val(time+"S后再次发送");
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

//输入手机号码    文本框   获取焦点  下一步按钮变色
$("body").on("input","#code",function(){
	if($(this).val().length==6){
		$("#login").addClass("active");
	}
});

//点击登录按钮
$("body").on("tap","#login",function(){
	if($(this).hasClass("active")){
		//alert("登录事件触发");
		closeLoginPop();
		teamNameText();
	}
});



/*//输入手机号码    文本框   获取焦点  下一步按钮变色
$("body").on("input","#userTel",function(){
	if($(this).val().length==11){
		$("#loginNext").addClass("active");
	}
});

var indexNum = 0;
var timer;
//点击 登录    下一步按钮  到 验证码弹层
$("#loginNext").on("tap",function(){
	//登录  验证手机号码  方法
	var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/; 
	var tel=$("#userTel").val();
	var nval =tel.replace(/\s+/g,"");
	var tel1=tel.substr(0,3);
	var tel2=tel.substr(3,4);
	var tel3=tel.substr(7,4);
	if(!myreg.test(nval)){ 
		mui.toast('请输入有效的手机号码');
		return;
	}else if(nval.length==0){
		mui.toast('请输入手机号码！');
		return;
	 }else if(nval.length!=11){ 
	 	mui.toast('请输入有效的手机号码');
	 	return;
	 } 
	if(myreg.test(nval)){
		var time = 30;
		var timeCode = 380;
		var $input = $(".codelist li input");
		timer = setInterval(timeCountDown,1000);
		function timeCountDown(){
			if(timeCode == 0){
				clearInterval(timer);
				alert("aaaaaa")	;
			}else{
				if(time<=0 ){
					$('#message').text("0秒");
					return true;
				}else{
					$('#message').text(time+"秒");
					if($input.eq(indexNum).val().length>0){
						if(indexNum != 4){
							indexNum = indexNum+1;
							$(".codelist li").removeClass("focus");
							$(".codelist li").eq(indexNum).addClass("focus");
							$input.eq(indexNum).focus();
						}else{
							timeCode = 0;
						}
					}
					time--;
					return false;
				}	
					
			}
			
		}
		timeCountDown();
	}
	
	
	$("#loginPop").animate({"left":"-100%"},500,function(){
		$(this).hide();
	});
	$("#codePop h4 i").text(tel1+" "+tel2+" "+tel3);
	$("#codePop").show().animate({"right":"0%"},500,function(){
		$(".focus input").focus();
	});
	
});
*/
//点击 验证码弹层     返回按钮  到 登录弹层
//$("body").on("tap","#codePop .backlogin",function(){
//	$("#codePop").animate({"right":"-100%"},500,function(){
//		$(this).hide();
//	});
//	$("#loginPop").show().animate({"left":"0%"},500);
//	clearInterval(timer);
//	
//});

//点击图文详情按钮  打开图文详情
$("body").on("tap",".imgdetail",function(){
	if($(this).hasClass("cur")){
		$("#imgdetailPop").slideUp();
		$(this).removeClass("cur");
		mui('#detailScroll').scroll().scrollTo(0,0,500);
	}else{
		$("#imgdetailPop").slideDown();
		$(this).addClass("cur");
	}
});



function teamNameText(e) {
	//e.detail.gesture.preventDefault(); //修复iOS 8.x平台存在的bug，使用plus.nativeUI.prompt会造成输入法闪一下又没了
	var btnArray = ['以后再说', '确定'];
	mui.prompt('请输入您战队的名称：', '分享邀请闺蜜加入您的战队', '您好', btnArray, function(e) {
		if (e.index == 1) {
			console.log("战队名:"+e.value);
			mui.alert("恭喜你创建"+e.value+"战队成功，赶紧分享给闺蜜吧");
		} else {
			shareGroup();//出发分享按钮
		}
	})
};

function shareGroup(){
	$(".sharePopBg").fadeIn();
	$(".shareTip").fadeIn();
	setTimeout(function(){
		$(".sharePopBg").fadeOut();
		$(".shareTip").fadeOut();
	},4000);
};
$(".sharePopBg").on('tap',function(){
	$(".sharePopBg").fadeOut();
	$(".shareTip").fadeOut();
})

// 点击查看规则  打开弹层
$("body").on("tap","#viewRules",function(){
	$(".rulePopBg").fadeIn();
	$(".rulePopBox").fadeIn();
});
// 点击查看规则背景     关闭弹层
function closeRulePop(){
	$(".rulePopBg").fadeOut();
	$(".rulePopBox").fadeOut();
}
$("body").on("tap",".rulePopBg",function(){
	closeRulePop();
});
$("body").on("tap","#closeRule",function(){
	closeRulePop();
});
//-----------------------------------------------------------------------------  2017-01-10
/*	顶部导航右侧二级导航		*/
$("body").on('tap','.minNav',function(){
	$("body").append('<div class="popMinNavBox"><div class="popMinNav"><ul><li><a href="userOrderList.html">团购订单</a></li><li><a href="myCoupon.html">优惠券</a></li><li><a href="">去核销</a></li><li><button class="refresh">刷新</button></li>	</ul></div></div><div class="menuOverBg"></div>');
	$(".popMinNavBox").animate({"width":"130px","height":"170px","opacity": "1"},350);
})
$("body").on('tap','.menuOverBg',function(){
	cloaseMinNav();
})
$("body").on('tap','.popMinNavBox a',function(){
	openWindow($(this).attr("href"));
	cloaseMinNav();
})
function cloaseMinNav(){
	$(".popMinNavBox").animate({"width":"0","height":"0","opacity": "0"},350,function(){
		$(this).remove();
		$(".menuOverBg").remove();
	});
}
$("body").on('tap','.refresh',function(){
	 window.location.reload();//刷新当前页面
})
