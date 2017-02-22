//代参团   JavaScript

//打开队员联系列表  电话簿
$(".userlist").on('tap',function(){
	memberListPop();
})

//关闭队员联系列表  电话簿
$("body").on('tap',".closeList",function(){
	closeuserInfo();
})

//点击参与项目  展开效果
$("body").on('tap',".joinItem ul li span",function(){
	if($(this).hasClass("cur")){
		$(this).removeClass("cur");
		$(this).parent().next().slideUp();
	}else{
		$(this).addClass("cur");
		$(this).parent().next().slideDown();
	}
})

//点击参与商品  选择商品
$("body").on('tap',"#joinName h3",function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	var joinName=$(this).text();
	$(".joinItem ul li:first-of-type span").text(joinName);
	$(".joinItem ul li:first-of-type span").removeClass("cur");
	$(this).parent().slideUp();
})

//点击参团团长    选择商品
$("body").on('tap',"#joinLeader span",function(){
	$(this).addClass("cur").siblings().removeClass("cur");
	var joinLeader=$(this).text();
	$(".joinItem ul li:nth-of-type(2) span").text(joinLeader);
	$(".joinItem ul li:nth-of-type(2) span").removeClass("cur");
	$(this).parent().slideUp();
})








