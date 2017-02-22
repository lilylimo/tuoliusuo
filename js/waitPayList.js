//  上拉加载数据
function pullDownAction(){
	if(Upcount < count){
		mui.later(function() {  
			dataload();
	    }, 1500); 
   }else{
   		pullUpSuccess();
   }
}

function pullUpAction() {//上拉事件  
	setTimeout(function() {  
		var backVal = dataload();
		if(backVal =="success"){
			pullUpSuccess();//上拉加载成功回调执行
		}
    }, 2000);  
} 

