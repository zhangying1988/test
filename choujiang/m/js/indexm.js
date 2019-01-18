$(function() {
	function lunLeftFn(obj, time) {
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
	lunLeftFn(".gun-left");
	/*中奖信息上下滚动*/

	/*中奖信息上下滚动*/
	$(function() {
		$(".wininfo-list").slide({
			mainCell: ".wininfo-list-inner ul",
			autoPlay: true,
			effect: "topMarquee",
			vis: 3,
			interTime: 50
		});
	})
	/*红包雨*/
	var img_url = [];
	for(var i = 1; i <= 6; i++) {
		var s_url = 'images/snow_0' + i + '.png';
		img_url.push(s_url);
	}
	$(document).snowfall({
		image: img_url, //img_url 图片地址数组
		flakeCount: 30,
		minSize: 30,
		maxSize: 50,
		maxSpeed: 3,
	});
})
/*footer切换选中当前*/
$(function() {
	$('.footerlist li').click(function() { //点击页尾tab切换
		$(this).addClass('active').siblings().removeClass('active');
	})
	$(".myfoca-list li").bind("click", function() { //选择不同的福卡切换
		$(this).addClass('active').siblings().removeClass('active')
	})
	$(".bgClose").bind("click", function() {
		$(this).parent('.popWraper').hide(); //点击黑色背景关闭弹框
		$(this).parent('.popWraper').find('.popbox').removeAttr("style");
		$(this).parent('.popWraper').find('.topbackdiv').remove();
	})
	$(".popclose").bind("click", function() {
		$(this).parents('.popWraper').hide(); //点击X按钮背景关闭弹框
		$(this).parents('.popWraper').find('.popbox').removeAttr("style");
		$(this).parents('.popWraper').find('.topbackdiv').remove();
	})

	$("#sendFoca").on("click", function() { //我的福卡点击赠送按钮 关闭当前弹框 显示赠送弹框
		$(this).parents('.popWraper').hide(); //点击黑色背景关闭弹框
		$(this).parents('.popWraper').find('.popbox').removeAttr("style");
		$(this).parents('.popWraper').find('.topbackdiv').remove();
		topBox('sendfoca'); //显示赠送输入信息弹框
	})
	$("#confirmSend").on("click", function() { //我的福卡点击 确认赠送按钮 关闭当前弹框 显示赠送成功弹框
		$(this).parents('.popWraper').hide(); //点击黑色背景关闭弹框
		$(this).parents('.popWraper').find('.popbox').removeAttr("style");
		$(this).parents('.popWraper').find('.topbackdiv').remove();
		topBox('sendfoca-succeed'); //显示赠送输入信息弹框
	})
	$("#continueSend").on("click", function() { //转赠福卡  继续赠送按钮 关闭当前弹框 显示赠送弹框
		$(this).parents('.popWraper').hide(); //点击黑色背景关闭弹框
		$(this).parents('.popWraper').find('.popbox').removeAttr("style");
		$(this).parents('.popWraper').find('.topbackdiv').remove();
		topBox('sendfoca'); //显示赠送输入信息弹框
	})

});

function loginPop() { //点击进行登录
	topBox('login_box'); //
}

function seeFoca() { //登录后头部点击查看我的福卡
	topBox('myfoca');

}

function lottery() {
	//	topBox('bless'); //抽奖 随机祝福福 弹框
	//	topBox('collectwufu'); //抽奖 集五福 弹框
	//	topBox('complete-wufu'); //抽奖 集五福集齐 弹框
	topBox('draw-wufu'); //抽奖 瓜分奖金 弹框
}

function sendFoca(obj) { //点击赠送好友按钮
	topBox('sendfoca'); //显示赠送输入信息弹框
}

function topBox(id) { //公用弹框方法
	//	if(!$('body').find('.topbackdiv').length > 0) {
	if(!$('#' + id).find('.topbackdiv').length > 0) {
		$('#' + id).append(' <div class="topbackdiv" ></div>');
		$('.topbackdiv').addClass(id);
		$('#' + id).show();
		var windowHeight = $(window).height();
		var w1 = $('#' + id).width();
		var h1 = $('#' + id).find('.popbox').height();
		var h_header = $('.headerbox').height();
		var h_footer = $('.footer').height();
		$('#' + id).find('.popbox').css({
			//"margin-left": -w1 / 2 + "px",
			"margin-top": (windowHeight - h1) / 2 + "px"
			//		"margin-top": (windowHeight - h1 -h_header) / 1 + "px"
		});
	}
}
//倒计时
function FreshTime() {
	var endtime = new Date("2019/2/15,12:20:12"); //结束时间
	var nowtime = new Date(); //当前时间
	var lefttime = parseInt((endtime.getTime() - nowtime.getTime()) / 1000);
	d = parseInt(lefttime / 24 / 60 / 60);
	h = parseInt((lefttime / (60 * 60)) % 24);
	m = parseInt(lefttime / 60 % 60);
	s = parseInt(lefttime % 60);
	$("#t_s").html(s);
	$("#t_d").html(d);
	$("#t_h").html(h);
	$("#t_m").html(m);
	if(lefttime <= 0) {
		clearInterval(sh);
	}
}
FreshTime();
var sh;
sh = setInterval(FreshTime, 500)