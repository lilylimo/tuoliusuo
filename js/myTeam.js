//我的团队   JavaScript

//拨打团员电话
$("body").on('tap','.teamSlideImg img',function(){
	var telNumb = $(this).attr("data-tel");
	location.href=telNumb;
})

//顶部  团队筛选导航 切换效果
$("body").on("tap",".teamHead",function(){
	if($(".teamNavBox").hasClass("hide")){
		$(".popbg").fadeIn();
		$(".teamNavBox").fadeIn('',function(){
			$(this).removeClass("hide");
		});
	}else{
		closeTeamBox();
	}
});

//顶部  团队筛选导航 关闭方法
function closeTeamBox(){
	$(".popbg").fadeOut();
	$(".teamNavBox").fadeOut('',function(){
		$(this).addClass("hide");
	});
}

//点击背景 关闭团队筛选导航
$("body").on("tap",".popbg",function(){
	closeTeamBox();
});

//选择团队类型 切换效果
$("body").on("tap",".teamType button",function(){
	$(".teamType button").removeClass("cur");
	$(this).addClass("cur");
});

//萌团选择列表    切换效果
$("body").on("tap",".teamListScroll ul li",function(){
	$(".teamListScroll ul li").removeClass("cur");
	$(this).addClass("cur");
});

//点击确定按钮    关闭团队筛选导航 以及提取数据显示
$("body").on("tap","#teamConfirm",function(){
	closeTeamBox();
	var teamType=$(".teamType button.cur").text();
	var teamName=$(".teamListScroll ul li.cur").text();
	$(".teamHead").text(teamType);
	$(".curTeamName i").text(teamName);
});

//点击重置按钮    重置数据和效果
$("body").on("tap","#teamReset",function(){
	var teamType=$(".teamType button:first-of-type").text();
	var teamName=$(".teamListScroll ul li:first-of-type").text();
	$(".teamHead").text(teamType);
	$(".curTeamName i").text(teamName);
	$(".teamType button:first-of-type").addClass("cur").siblings().removeClass("cur");
	$(".teamListScroll ul li:first-of-type").addClass("cur").siblings().removeClass("cur");
});


