function memberListPop(){
	var contactsItem ='<div class="fullScreenPop contactsListBoxPop">'
							+'		<header class="topHead displayBox">'
							+'			<span class="closeList" title="关闭队员列表">开团</span>'
							+'			<h4 class="boxflex">队员列表</h4>'
							+'		</header>'
							+'		<div id="contactsListScreenScroll" class="mui-content mui-scroll-wrapper scrollTp45">'
							+'			<div class="mui-scroll">'
							+'				<div class="contactSortCont">'
							+'				</div>'
							+'			</div>'
							+'		</div>'
							+'	</div>';
    $("body").append(contactsItem+'<div class="initials"><a href="javascript:;">★</a></div><div id="letter"></div>');
    //通讯录滚动条
	mui('#contactsListScreenScroll').scroll({
		scrollY: true,
		indicators: true,//显示滚动条
		bounce: true
	});
	memberList();//会员数据加载
    contactLetterBox();//字母分组
    showuserInfo();//打开弹层
}

function memberList(){
	var addressbookItme = "";
	var alldata = new Array("赵槐良","赵子孜","白胜羽","陈晓媛","陈雨杉","黄宇昕","黄文祥","王文祥","王健威","薛恒祥","刘哲","李强","冯素英","靳丹杰","张超","蒋小小","禹少爷");
	for(var i =0; i<17; i++){
		var prizeName = alldata[i];
		 addressbookItme+='<li class="contactList" data-phone="18888888888"><span class="contactName">'+prizeName+'</span></li>';
	}
	$(".contactSortCont").html('<ul>'+addressbookItme+'</ul>');
}



$("body").on('tap','.contactSortCont li',function(){//选择 通讯录 用户信息 
	var contactName = $(this).text();
	    contactPhone = $(this).attr("data-phone");
	$("#userName").val(contactName).removeClass("txtright");
	$("#userPhone").val(contactPhone).removeClass("txtright");
	closeuserInfo();
})


$("body").on('tap','.backCloseUserInfo',function(){//关闭 用户信息补全
	closeuserInfo();
})

function showuserInfo(){//打开信息补全
	$(".contactsListBoxPop").animate({"left":'0'},300);
	$(".bespeakHead").animate({"left":"-20px"},500,function(){
		$(".infoCompletion input").removeAttr("disabled").blur();
	});
	$("#mui-scroll").animate({"left":"-20px"},500);
	if($(".footSubmitOrder").length>0){
		$(".footSubmitOrder").animate({"left":"-20px"},500);
	}
}
function closeuserInfo(){//关闭信息补全
	$(".contactsListBoxPop").animate({"left":'110%'},300,function(){
		$(this).remove();
	});
	$(".bespeakHead").animate({"left":"0px"},500,function(){
		$(".infoCompletion input").attr("disabled","disabled").blur();
	});
	$("#mui-scroll").animate({"left":"0px"},500);
	if($(".footSubmitOrder").length>0){
		$(".footSubmitOrder").animate({"left":"0px"},500);
	}
}
