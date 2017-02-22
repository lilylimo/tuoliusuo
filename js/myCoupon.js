//使用说明 弹出层  显示
$("body .openExplanation").on("tap",function(){
	$("body .explainBg").fadeIn();
	$("body .explainBox").animate({"bottom":0},500);
});

//使用说明 弹出层  关闭
function closeExplainBox(){
	$("body .explainBg").fadeOut();
	$("body .explainBox").animate({"bottom":"-999px"},500);
}
//使用说明 弹出层  关闭
$("body .explainBg").on("tap",function(){
	closeExplainBox();
});
//使用说明 弹出层  关闭
$("body .closeBox").on("tap",function(){
	closeExplainBox();
});
//使用说明 弹出层  关闭
$("body .explainClose").on("tap",function(){
	closeExplainBox();
});

//滚动条 滚动 到 红包使用规则顶部
$("body").on("tap","span.ruleTo",function(){
	mui("#ruleScroll").scroll().scrollTo(0,0,500);
});



// 点击查看规则  打开弹层
$("body").on("tap",".couponList",function(){
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
})