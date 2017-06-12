window.onload=function(){
	
//判断浏览器
function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1; //判断是否Opera浏览器
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera; //判断是否IE浏览器
    var isFF = userAgent.indexOf("Firefox") > -1; //判断是否Firefox浏览器
    var isSafari = userAgent.indexOf("Safari") > -1; //判断是否Safari浏览器
    if (isIE) {
        var IE5 = IE55 = IE6 = IE7 = IE8 = false;
        var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        var fIEVersion = parseFloat(RegExp["$1"]);
        IE55 = fIEVersion == 5.5;
        IE6 = fIEVersion == 6.0;
        IE7 = fIEVersion == 7.0;
        IE8 = fIEVersion == 8.0;
        if (IE55) {
            return "IE55";
        }
        if (IE6) {
            return "IE6";
        }
        if (IE7) {
            return "IE7";
        }
        if (IE8) {
            return "IE8";
        }
    }//isIE end
    if (isFF) {
        return "FF";
    }
    if (isOpera) {
        return "Opera";
    }
}//myBrowser() end
//以下是调用上面的函数

if (myBrowser() == "IE55") {
	document.body.innerHTML='请升级您的IE浏览器或者使用chrome浏览器来浏览'
    alert("IE浏览器版本过低，请更新IE浏览器或使用其他浏览器");
    window.location.href="http://http://rj.baidu.com/soft/detail/14744.html?ald";
}
if (myBrowser() == "IE6") {
	document.body.innerHTML='请升级您的IE浏览器或者使用chrome浏览器来浏览'
     alert("IE浏览器版本过低，请更新IE浏览器或使用其他浏览器");
    window.location.href="http://http://rj.baidu.com/soft/detail/14744.html?ald";
}
if (myBrowser() == "IE7") {
	document.body.innerHTML='请升级您的IE浏览器或者使用chrome浏览器来浏览'
	 alert("IE浏览器版本过低，请更新IE浏览器或使用其他浏览器");
    window.location.href="http://http://rj.baidu.com/soft/detail/14744.html?ald";
}
if (myBrowser() == "IE8") {
	document.body.innerHTML='请升级您的IE浏览器或者使用chrome浏览器来浏览'
	 alert("IE浏览器版本过低，请更新IE浏览器或使用其他浏览器");
    window.location.href="http://http://rj.baidu.com/soft/detail/14744.html?ald";

}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
function css(obj, attr) { //对象，属性
    if (obj.currentStyle) {
        return obj.currentStyle[attr] //兼容IE
    } else {
        return getComputedStyle(obj, false)[attr] //兼容标准
    }
}

//topadv
var advEventOff=document.getElementById('adv_event_off');
var advEvent=document.getElementById('adv_event');
advEventOff.onclick=function(){
	var target=100;
	var run=4;
	var time=null;
	clearInterval(time);
	time=setInterval(function(){
		target=target-run
		var now=target/100
		if(now<0||now==0){
			now=0
			advEvent.style.opacity=now
			advEvent.style.filter='alpha(opacity='+now*100+')'
			advEvent.style.display='none'
			clearInterval(time)
		}
		advEvent.style.opacity=now
		advEvent.style.filter='alpha(opacity='+now*100+')'
	},30)
}
	
//address
var addressBox=document.getElementById('address_box');
var addressLayer=document.getElementById('address_layer');
var addressText=document.getElementById('address_text');
var addressCity=addressLayer.getElementsByTagName('a')
addressBox.onmouseover=function(){
	addressLayer.style.display='block';
	addressBox.style.background='#fff'
	clearTimeout(addressBox.time)
}
addressLayer.onmouseover=function(){
	addressLayer.style.display='block';
	addressBox.style.background='#fff'
	clearTimeout(addressBox.time)
}	
addressBox.onmouseout=function(){
	addressBox.time=setTimeout(function(){
		addressLayer.style.display='none';
		addressBox.style.background=''
	},100)
}	
addressLayer.onmouseout=function(){
	addressLayer.style.display='none';
	addressBox.style.background=''
}		
for(i=0;i<addressCity.length;i++){
	addressCity[i].onclick=function(){
		for(y=0;y<addressCity.length;y++){
			addressCity[y].style.background=''
			addressCity[y].style.color='#999'
		}
		this.style.background='#f10215'
		this.style.color='#fff'
		addressText.innerHTML=this.innerHTML
		addressLayer.style.display='none';
		addressBox.style.background=''
	}
}
	
	
//我的京东
var myjdBox=document.getElementById('myjd_box');
var myjd=document.getElementById('myjd');
var myjdLayer=document.getElementById('myjdLayer');

myjdBox.onmouseover=function(){
	myjd.style.background='#fff';
	myjdLayer.style.display='block'
}
myjdBox.onmouseout=function(){
	myjd.style.background='';
	myjdLayer.style.display='none'
}	
	
//客户服务
var customerBox=document.getElementById('customer_box');
var customerService=document.getElementById('customer_service');
var customerLayer=document.getElementById('customer_layer');
	
customerBox.onmouseover=function(){
	customerService.style.background='#fff';
	customerLayer.style.display='block'
}
customerBox.onmouseout=function(){
	customerService.style.background='';
	customerLayer.style.display='none'
}
	
//网站导航
var siteNavBox=document.getElementById('site_nav_box');
var siteNav=document.getElementById('site_nav');
var siteNavLayer=document.getElementById('site_nav_layer');
	
siteNavBox.onmouseover=function(){
	siteNav.style.background='#fff';
	siteNavLayer.style.display='block'
}
siteNavBox.onmouseout=function(){
	siteNav.style.background='';
	siteNavLayer.style.display='none'
}
	
//我的购物车
var shopCarBox=document.getElementById('shop_car_box');
var shopCar=document.getElementById('shop_car');
var shopCarLayer=document.getElementById('shop_car_layer');
	
shopCar.onmouseover=function(){
	shopCar.style.borderBottom='0';
	shopCarLayer.style.display='block'
}
shopCar.onmouseout=function(){
	shopCar.style.borderBottom='1px solid #e3e4e5';
	shopCarLayer.style.display='none'
}	
	
	
	

//搜索框关键词
var searchKey = document.getElementById('key');
var searchArr=['宝贝第一安全椅','磁力片','电蚊香','空调遥控器','福临门大米'];
var searchKeyNum=0
function searchKeyChange(){
	searchKey.time=setInterval(function(){
		searchKey.value=searchArr[searchKeyNum]
		searchKeyNum++
		if(searchKeyNum==5){
			searchKeyNum=0
		}
	},4000)
}
searchKeyChange()
searchKey.onfocus=function(){
	clearInterval(searchKey.time)
	searchKey.value=''
	searchKey.style.outline='0'
}
searchKey.onblur=function(){
	searchKey.value=searchArr[searchKeyNum]
	searchKeyChange()
}
	
	
	
	
//header 左侧导航栏
var bodyALeftMenu=document.getElementById('body_a_left_menu').getElementsByTagName('li')
var bodyALeftMenuLayer=document.getElementById('body_a_left_menu_layer').getElementsByTagName('li')
var bodyALeftMenuLayerImg=document.getElementById('body_a_left_menu_layer').getElementsByTagName('img')
var bodyALeftMenuBLayer=document.getElementById('body_a_left_menu_layer')
var bodyALeft=document.getElementById('body_a_left')
var bodyALefttime=null
for(i=0;i<bodyALeftMenu.length;i++){
	bodyALeftMenu[i].index=i
	bodyALeftMenu[i].onmouseover=function(){
		clearTimeout(bodyALefttime)
		bodyALeftMenuBLayer.style.zIndex='5'
		bodyALeftMenuBLayer.style.display='block'
		for(y=0;y<bodyALeftMenu.length;y++){
			bodyALeftMenu[y].style.background=''
			bodyALeftMenuLayer[y].style.display='none'
		}
		for(z=0;z<bodyALeftMenuLayerImg.length;z++){
			bodyALeftMenuLayerImg[z].src=bodyALeftMenuLayerImg[z].getAttribute('_src')
		}
		this.style.background='#999'
		bodyALeftMenuLayer[this.index].style.display='block'
	}
	bodyALeftMenu[i].onmouseout=function(){
		bodyALeftMenuBLayer.style.display='none'
		bodyALefttime=setTimeout(function(){
			for(i=0;i<bodyALeftMenu.length;i++){
				bodyALeftMenuLayer[i].style.display='none'
				bodyALeftMenu[i].style.background=''
			}
		},50)
	}	
}
bodyALeftMenuBLayer.onmouseover=function(){
	bodyALeftMenuBLayer.style.zIndex='5'
	bodyALeftMenuBLayer.style.display='block'
	clearTimeout(bodyALefttime)
}
bodyALeftMenuBLayer.onmouseout=function(){
	bodyALeftMenuBLayer.style.zIndex='0'
	bodyALeftMenuBLayer.style.display='none'
	bodyALefttime=setTimeout(function(){
			for(i=0;i<bodyALeftMenu.length;i++){
				bodyALeftMenuLayer[i].style.display='none'
				bodyALeftMenu[i].style.background=''
			}
	},50)
}


//banner轮播
var bannerPic=document.getElementById('banner_box').getElementsByTagName('li')
var bannerPicQ=document.getElementById('bannerq').getElementsByTagName('li')
var bannerLeft=document.getElementById('banner_left')
var bannerRight=document.getElementById('banner_right')

for(i=0;i<bannerPic.length;i++){
	bannerPic[i].onmouseover=function(){
		bannerLeft.style.display='block'
		bannerRight.style.display='block'
	}
	bannerPic[i].onmouseout=function(){
		bannerLeft.style.display='none'
		bannerRight.style.display='none'
	}
	bannerLeft.onmouseover=function(){
		bannerLeft.style.display='block'
		bannerRight.style.display='block'
	}
	bannerRight.onmouseover=function(){
		bannerLeft.style.display='block'
		bannerRight.style.display='block'
	}
	bannerLeft.onmouseout=function(){
		bannerLeft.style.display='none'
		bannerRight.style.display='none'
	}
	bannerRight.onmouseout=function(){
		bannerLeft.style.display='none'
		bannerRight.style.display='none'
	}
}

var Bnum=0
var BOldLi=0

function bannerOpacity(){
	var bannerN=0
	var bannerN2=1
	var bannerS=0.1
	clearInterval(this.time2)
	clearInterval(this.time1)
	this.time2=setInterval(function(){
		bannerPicQ[BOldLi].style.background='#fff'
		bannerPic[BOldLi].style.zIndex=0
		bannerPic[BOldLi].style.opacity=bannerN2-bannerS
		bannerPic[BOldLi].style.filter='alpha(opacity='+(bannerN2-bannerS)*100+')'
		bannerS+=0.1
		if(bannerN2-bannerS<=0){
			bannerPic[BOldLi].style.opacity=0
			bannerPic[BOldLi].style.filter='alpha(opacity=0)'
			clearInterval(this.time2)
		}
	},40)
	this.time1=setInterval(function(){
		bannerPic[Bnum].style.zIndex=1
		bannerPicQ[Bnum].style.background='#db192a'
		bannerPic[Bnum].style.opacity=bannerN+bannerS
		bannerPic[Bnum].style.filter='alpha(opacity='+(bannerN2+bannerS)*100+')'
		bannerS+=0.1
		if(bannerN+bannerS>1){
			clearInterval(this.time1)
			bannerPic[Bnum].style.opacity=1
			bannerPic[Bnum].style.filter='alpha(opacity=100)'
		}
	},40)
}

//右键点击
bannerRight.onclick=function(){
	BOldLi=Bnum	
	Bnum++	
	if(Bnum==bannerPicQ.length){
		Bnum=0
	}
	bannerOpacity()
}

//左键点击

bannerLeft.onclick=function(){
	BOldLi=Bnum	
	Bnum--	
	if(Bnum==-1){
		Bnum=bannerPicQ.length-1
	}
	bannerOpacity()
}

//悬标点击
for(i=0;i<bannerPicQ.length;i++){
	bannerPicQ[i].index=i
	bannerPicQ[i].onclick=function(){
		BOldLi=Bnum
		Bnum=this.index
		if(Bnum!=BOldLi){
			bannerOpacity()
		}
	}
}


//body_a_news 选项卡
var bannerANewsCx=document.getElementById('banner_a_news_cx')
var bannerANewsGg=document.getElementById('banner_a_news_gg')
var bodyANewsList=document.getElementById('body_a_news_list')
var bodyANewsList2=document.getElementById('body_a_news_list2')
var bodyANewsA=document.getElementById('banner_a_news_active')
bannerANewsGg.onmouseover=function(){
	bodyANewsA.style.transform='translateX(54px)'
	bodyANewsList2.style.display='block'
	bodyANewsList.style.display='none'
}
bannerANewsCx.onmouseover=function(){
	bodyANewsA.style.transform='translateX(0)'
	bodyANewsList2.style.display='none'
	bodyANewsList.style.display='block'
}


//京东秒杀倒计时


var jdmsHour=document.getElementById('jdms_hour')
var jdmsMinute=document.getElementById('jdms_minute')
var jdmsSecond=document.getElementById('jdms_second')
var iNow=new Date()
var iNew=new Date(2099,10,29,24,59,59)

setInterval(function(){
	iNow=new Date()
	var jdmst=Math.floor((iNew-iNow)/1000)
	var iHours=Math.floor(jdmst%86400/3600)
	var iMinute=Math.floor(jdmst%86400%3600/60)
	var isecond=jdmst%60
	jdmsHour.innerHTML=iHours
	jdmsMinute.innerHTML=iMinute
	jdmsSecond.innerHTML=isecond
	
},1000)

//上浮函数
function moveTop(obj,mSpeed){
	obj.style.transform='translateY('+mSpeed+'px)'
}

//京东秒杀上浮
var jdmsUl=document.getElementById('jdmsul')
var jdmsLi=jdmsUl.getElementsByTagName('li')
var jdmsImg=jdmsUl.getElementsByTagName('img')
var jdmsLR=document.getElementById('jdmslr').getElementsByTagName('a')
var jdmsOnoff=true
for(i=0;i<jdmsLi.length;i++){
	jdmsLi[i].index=i
	jdmsLi[i].onmouseover=function(){
		moveTop(jdmsImg[this.index],-15)
	}
	jdmsLi[i].onmouseout=function(){
		moveTop(jdmsImg[this.index],0)
	}
}

jdmsUl.onmouseover=function(){
	clearTimeout(jdmsUl.time)
	for(i=0;i<2;i++){
		jdmsLR[i].style.display='block'
	}
}
for(i=0;i<2;i++){
		jdmsLR[i].onmouseover=function(){
			clearTimeout(jdmsUl.time)
			jdmsLR[0].style.display='block'
			jdmsLR[1].style.display='block'
		}
	}
jdmsUl.onmouseout=function(){
	jdmsUl.time=setTimeout(function(){
		for(i=0;i<2;i++){
			jdmsLR[i].style.display='none'
		}
	},100)
}
//京东秒杀左右切换
jdmsLR[1].onclick=function(){
	if(jdmsOnoff){
		jdmsOnoff=false
		clearInterval(jdmsLR[1].time)
		var jdmsLeft=jdmsUl.offsetLeft
		if(jdmsLeft==0){
			jdmsUl.style.left=-2000
		}
		if(jdmsLeft==-3000){
			jdmsUl.style.left=-1000
		}
		jdmsLeft=jdmsUl.offsetLeft
		this.time=setInterval(function(){
			jdmsUl.style.left=jdmsUl.offsetLeft-40+'px'
			if(jdmsUl.offsetLeft<=jdmsLeft-1000){
				jdmsUl.style.left=jdmsLeft-1000
				clearInterval(jdmsLR[1].time)
				jdmsOnoff=true
				
			}
		},20)
	}
}

jdmsLR[0].onclick=function(){
	if(jdmsOnoff){
		jdmsOnoff=false
		clearInterval(jdmsLR[0].time)
		var jdmsLeft=jdmsUl.offsetLeft
		if(jdmsLeft==0){
			jdmsUl.style.left=-2000
		}
		if(jdmsLeft==-3000){
			jdmsUl.style.left=-1000
		}
		jdmsLeft=jdmsUl.offsetLeft
		this.time=setInterval(function(){
			jdmsUl.style.left=jdmsUl.offsetLeft+40+'px'
			if(jdmsUl.offsetLeft>=jdmsLeft+1000){
				jdmsUl.style.left=jdmsLeft+1000
				clearInterval(jdmsLR[0].time)
				jdmsOnoff=true
			}
		},20)
	}
}


































}



	
	
	
	
	
	
	
	
	
	
	
