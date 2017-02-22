/**************  抢红包   *****************/
//活动倒计时函数
function updateEndTime(){
	 var date = new Date();
	 var time = date.getTime();  //当前时间距1970年1月1日之间的毫秒数
	 $(".settime").each(function(){
		 var endDate =this.getAttribute("data-time"); //结束时间字符串
		 //转换为时间日期类型
		 var endDate1 = eval('new Date(' + endDate.replace(/\d+(?=-[^-]+$)/, 
		 function (a) { 
		 	return parseInt(a, 10) - 1; 
		 	}).match(/\d+/g) + ')'
		 );
		 var endTime = endDate1.getTime(); //结束时间毫秒数
		 var lag = (endTime - time) / 1000; //当前时间和结束时间之间的秒数
		  if(lag > 0){
			   var second = Math.floor(lag % 60);   
			   var minite = Math.floor((lag / 60) % 60);
			   var hour = Math.floor((lag / 3600) % 24);
			   var day = Math.floor((lag / 3600) / 24);
			   
//			   if(second<10){second = "<i>0</i>" +"<i>"+second+"</i>";}
			   if(minite<10){
				   	minite ="<i>0</i>" +"<i>"+ minite+"</i>";
				}else{
				  	var newminite= minite+"";
				  	minite ="<i>"+newminite.substr(0,1)+"</i><i>"+newminite.substr(1,1)+"</i>";
				}
			   if(hour<10){
			   		hour ="<i>0</i>" + "<i>"+hour+"</i>";
			   }else{
				  	var newhour= hour+"";
				  	hour ="<i>"+newhour.substr(0,1)+"</i><i>"+newhour.substr(1,1)+"</i>";
				  }
			   if(day<10){
			   		day ="<i>0</i>" + "<i>"+day+"</i>";
			   }else{
				  	var newday= day+"";
				  	day ="<i>"+newday.substr(0,1)+"</i><i>"+newday.substr(1,1)+"</i>";
				  }
			  // $(this).html(day+"天"+hour+"时"+minite+"分"+second+"秒");// 
			   $(this).html('<span class="day">'+day+'天</span><span>'+hour+'小时</span><span>'+minite+'分</span>');
		  }else{
		  	// $(this).html("<em>团购已经结束啦！</em>");
		  }
	 });
	 setTimeout("updateEndTime()",1000);
}

$(document).ready(function(){
	updateEndTime();
})

//抢红包  我要抢按钮   打开抢到和没抢到弹层方法  传id
function openGrabPop(id){
	$(".grabPopBg").fadeIn();
	$("#"+id).removeClass("hide");
}
//抢红包  我要抢按钮   关闭抢到和没抢到弹层方法  通用
function closeGrabPop(){
	$(".grabPopBg").fadeOut();
	$(".grabPopBox").addClass("hide");
}
//抢红包  我要抢按钮   点击打开抢到弹层
$("body").on("tap","#grabNow",function(){
	openGrabPop("grabYesPop");   //打开抢到弹层
//	openGrabPop("grabNoPop");    //打开未抢到弹层
});
//抢红包  点击背景   关闭弹层
$("body").on("tap",".grabPopBg",function(){
	closeGrabPop();
});

// 抢到了 列表 滚动效果
(function($){
	$.fn.myScroll = function(options){
	//默认配置
	var defaults = {
		speed:40,  //滚动速度,值越大速度越慢
		rowHeight:24 //每行的高度
	};
	var opts = $.extend({}, defaults, options),intId = [];
	function marquee(obj, step){
		obj.find("ul").animate({
			marginTop: '-=1'
		},0,function(){
				var s = Math.abs(parseInt($(this).css("margin-top")));
				if(s >= step){
					$(this).find("li").slice(0, 1).appendTo($(this));
					$(this).css("margin-top", 0);
				}
			});
		}
		
		this.each(function(i){
			var sh = opts["rowHeight"],speed = opts["speed"],_this = $(this);
			intId[i] = setInterval(function(){
				if(_this.find("ul").height()<=_this.height()){
					clearInterval(intId[i]);
				}else{
					marquee(_this, sh);
				}
			}, speed);

			_this.hover(function(){
				clearInterval(intId[i]);
			},function(){
				intId[i] = setInterval(function(){
					if(_this.find("ul").height()<=_this.height()){
						clearInterval(intId[i]);
					}else{
						marquee(_this, sh);
					}
				}, speed);
			});
		
		});

	}

})(jQuery);

//文字滚动调用
var liheight =  $(".rankingInfo li").height();
$(function(){
	$(".rankingInfo").myScroll({
		speed:40, //数值越大，速度越慢
		rowHeight:liheight //li的高度
	});
});




































