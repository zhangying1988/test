$(function() {
	function lunLeftFn(obj, time) { //公告内容滚动
		time = time ? time : 30;
		var ul = $(obj).find("ul")
		ul.append(ul.children().clone(true))
		var len = ul.children('li').width() * ul.children('li').length / 2
		var times = null;
		times = window.setInterval(function() {
			var t = ul.css('left');
			t = t.replace('px', '');

			if(t > -len) {
				t--;
				ul.css({
					left: t
				})
			} else {
				ul.css({
					left: 0
				})
			}

		}, time)

		ul.hover(function() {
			window.clearInterval(times);
		}, function() {
			times = window.setInterval(function() {
				var t = ul.css('left');
				t = t.replace('px', '');

				if(t > -len) {
					t--;
					ul.css({
						left: t
					})
				} else {
					ul.css({
						left: 0
					})
				}

			}, time)
		})
	}
	lunLeftFn(".gun-left")
	/*中奖信息上下滚动*/
	function lunLeftFn1(obj, time) { //中奖信息滚动
		time = time ? time : 60;
		var ul = $(obj).find("ul")
		ul.append(ul.children().clone(true))
		var len = ul.children('li').height() * ul.children('li').length / 2
		var times = null;
		times = window.setInterval(function() {
			var t = ul.css('top');
			t = t.replace('px', '');

			if(t > -len) {
				t--;
				ul.css({
					top: t
				})
			} else {
				ul.css({
					top: 0
				})
			}

		}, time)

		$(obj).hover(function() {
			window.clearInterval(times);
		}, function() {
			times = window.setInterval(function() {
				var t = ul.css('top');
				t = t.replace('px', '');

				if(t > -len) {
					t--;
					ul.css({
						top: t
					})
				} else {
					ul.css({
						top: 0
					})
				}

			}, time)
		})
	}
	lunLeftFn1(".wininfo-list-left");
	lunLeftFn1(".wininfo-list-right");
	/*红包雨*/
		var img_url = [];
		for(var i = 1; i <= 6; i++) {
			var s_url = 'images/snow_0' + i + '.png';
			img_url.push(s_url);
		}
	
		$(document).snowfall({
			image: img_url, //img_url 图片地址数组
			flakeCount: 25,
			minSize: 50,
			maxSize: 100,
			maxSpeed: 3,
		});

	// 点击导航登录按钮-登陆框
	$('.nav01').click(function() {
		$('#login_box').show();
		topbackdiv()
		return false;
	});

	$("#login_box .popclose").click(function() { //	关闭登录框
		$("#login_box").hide();
		topbackdivClosed();
	});

	$("#myfoca .popclose").click(function() { //关闭查看我的福卡登录框
		$("#myfoca").hide();
		topbackdivClosed();
	});
	$("#sendfoca .popclose").click(function() { //关闭转赠福卡弹框
		$("#sendfoca").hide();
		topbackdivClosed();
	});
	$("#sendfoca-succeed .popclose").click(function() { //关闭转赠福卡成功弹框
		$("#sendfoca-succeed").hide();
		topbackdivClosed();
	});
	$("#bless .popclose").click(function() { //关闭抽到运气奖弹框
		$("#bless").hide();
		topbackdivClosed();
	});
	$("#collectwufu .popclose").click(function() { //关闭抽到五福奖弹框
		$("#collectwufu").hide();
		topbackdivClosed();
	});
	$("#complete-wufu .popclose").click(function() { //关闭集齐五福等待开奖弹框
		$("#complete-wufu").hide();
		topbackdivClosed();
	});
	$("#draw-wufu .popclose").click(function() { //关闭五福开奖瓜分现金弹框
		$("#draw-wufu").hide();
		topbackdivClosed();
	});
	$(".myfoca-list li").bind("click", function() { //选择不同的福卡切换
		$(this).addClass('active').siblings().removeClass('active')
	})

});
function lottery(){//登录后点击试试运气 进行抽奖
	$('#bless').show();//抽到祝福奖
	topbackdiv();
	return false;
}
//function lottery() { //登录后点击试试运气 进行抽奖
//	$('#collectwufu').show(); //抽到五福卡奖
//	topbackdiv();
//	return false;
//}
//function lottery(){//集齐五福等待开奖
//	$('#complete-wufu').show(); //抽到五福卡奖
//	topbackdiv();
//	return false;
//}
//function lottery() { //五福开奖瓜分现金
//	$('#draw-wufu').show(); //抽到五福卡奖
//	topbackdiv();
//	return false;
//}

function loginSubmit() { //登录弹框输入表单信息点击登录 跳转链接
	location.href = "indexpc-login.html";
}

function topbackdiv() { /*弹框黑色背景*/
	$('body').append(' <div class="topbackdiv" ></div>');
}

function topbackdivClosed() { /*弹框黑色背景关闭*/
	$('.topbackdiv').remove();
}

function seeFoca() { //登录后头部点击查看我的福卡
	$('#myfoca').show();
	topbackdiv();
	return false;
}

function sendFoca() { //转赠福卡
	$("#myfoca").hide();
	topbackdivClosed();
	$('#sendfoca').show();
	topbackdiv();
	return false;
}

function confirmSend() { //赠送福卡弹框 确认赠送福卡按钮
	$("#sendfoca").hide();
	topbackdivClosed();
	$('#sendfoca-succeed').show();
	topbackdiv();
	return false;
}

function continueSend() { //赠送成功弹框 继续赠送按钮
	$("#sendfoca-succeed").hide();
	topbackdivClosed();
	$('#sendfoca').show();
	topbackdiv();
	return false;
}
/*右侧悬浮 start*/
$(window).scroll(function() {
	if($(this).scrollTop() > 100) {
		$('.fixed-right').fadeIn();
	} else {
		$('.fixed-right').fadeOut();
	}
});
$(function() {
	$('.tab-up').click(function() {
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
})
/*右侧悬浮*/
//倒计时
function FreshTime(){
    var endtime=new Date("2019/2/15,12:20:12");//结束时间
    var nowtime = new Date();//当前时间
    var lefttime=  parseInt((endtime.getTime()-nowtime.getTime())/1000)  ; 
    d=  parseInt(lefttime/24/60/60);
    h=  parseInt((lefttime/(60*60))%24);
    m=  parseInt(lefttime/60%60);
    s=  parseInt(lefttime%60);
    
    $("#t_s").html(s);
    $("#t_d").html(d);
    $("#t_h").html(h);
    $("#t_m").html(m);
    if(lefttime<=0){
    	clearInterval(sh);
    }
}
FreshTime();
var sh;
sh= setInterval(FreshTime,500) 