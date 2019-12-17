// JavaScript Document
var xmlhttp;
if (window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}// JavaScript Document
vwidth=0;
all=new Array();
all2=new Array();
ColorIndex=["white","red","blue","gray","green"]
 $(document).ready(function(){
	SendBullet("nid",1,1)
	var video = $("#invideo")
	var bull=$("#bullet");
	vwidth=video.width();
	var vheight=video.css("height")
	var time=[3.702104,3.8,3.8,3.9,4.2,4.5,6.6,6.9,7.695584,8.0,8.6,9.54,9.0,12.446404,13.952938]
	var data=["牛逼","牛逼2","牛逼3","牛逼4","牛逼","牛逼2","牛逼3","牛逼4","牛逼2","牛逼3","牛逼4","牛逼","牛逼2","牛逼3","牛逼4"]
	var pos=[1,2,1,2,1,2,1,2,1,2,1,1,1,1,1]
	var color=[0,0,0,1,0,2,0,0,3,0,1,0,0,0,0]
	var index=0;
	bull.width(vwidth);
	bull.css("height",vheight)
	window.onresize=function(){
		resetSize()
	}
	video.on({
		resize:function(){
			console.log("resize");
			resetSize()
		},
		timeupdate:function(){
			if(this.currentTime>time[index]){
				if(pos[index]==1)
					allotBullet(data[index],index,color[index]);
				else if(pos[index]==2)
					allotTopBullet(data[index],index,color[index]);
				index++;
			}
		},
		pause:function(){
			StopAllBullet()
		},
		playing:function(){
			$(".bullet").each(function(){
				MoveBullet($(this),parseInt($(this).css("left").slice(0,-2))*10000/vwidth)
			})
		}
	})
});

function SendBullet(data,pos,color){
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			console.log("连接成功");
		}else{
			console.log("State="+xmlhttp.readyState+"code="+xmlhttp.status)
		}
	}
	xmlhttp.open("POST","http://163.44.168.27:2048",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	var text='data='+data+'&pos='+pos+'&color='+color;
	xmlhttp.send(text);
}

function resetSize(){
	vwidth=$("#invideo").width()
	$("#bullet").width(vwidth)
}

function allotTopBullet(data,id,color){
	for(var i=0;i<8;i++){
		if(!all2[i]||all2[i]==false){
			appendTopBullet(data,i,id,color)
			all2[i]=true
			break
		}
	}
}

function allotBullet(bullet,id,color){
	for(var i=0;i<8;i++){
		if(!all[i]){
			appendBullet(bullet,i,id,color);
			all[i]=$("#"+id);
			break
		}else if(parseInt(all[i].css("right").slice(0,-2))>20){
			appendBullet(bullet,i,id,color);
			all[i]=$("#"+id);
			break
		}
	}
}

function appendBullet(data,low,id,color){
	var newBullet='<span class="bullet" id="'+id+'" style="color:'+ColorIndex[color]+';right:-'+20*data.length+'px;top:'+low*25+'px">'+data+'</span>'
	$("#bullet").append(newBullet)
	MoveBullet($("#"+id),10000)
}

function appendTopBullet(data,low,id,color){
	var newBullet='<span class="bullet" id="'+id+'" style="color:'+ColorIndex[color]+';top:'+low*25+'px">'+data+'</span>'
	$("#bullet").append(newBullet)
	WateTopBullet($("#"+id),5000,low)
}

function WateTopBullet(bullet,times,low){
	setTimeout(function(){
		bullet.remove();
		all2[low]=false;
	},times)
}

function MoveBullet(bullet,speed){
	bullet.animate({right:vwidth+'px'},speed,'linear',function(){
		bullet.remove();
	});
}

function StopAllBullet(){
	$(".bullet").stop()
}