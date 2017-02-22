//代开团   JavaScript

//选择开团商品  切换效果
$("body").on('tap',".chooseItem dl",function(){
	$(".chooseItem dl").removeClass("cur");
	$(this).addClass("cur");
})

//打开队员联系列表  电话簿
$(".userlist").on('tap',function(){
	memberListPop();
})

//关闭队员联系列表  电话簿
$("body").on('tap',".closeList",function(){
	closeuserInfo();
})





