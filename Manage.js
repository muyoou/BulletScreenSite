// JavaScript Document
var xmlhttp;
if (window.XMLHttpRequest)
{xmlhttp=new XMLHttpRequest();}
else
{xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");}// JavaScript Document


vwidth=0;
all=new Array();
all2=new Array();
time=new Array();
data=new Array();
pos=new Array();
color=new Array();
ColorIndex=["white","red","orangered","orange","gold","yellow","greenyellow","green","blue","darkblue","deepskyblue","grey"]
RTime=0;
PRTime=0;
maxnum=0;
cho_color=0;
cho_mode=0;

 $(document).ready(function(){
	GetBullet();
	 pandpos();
	 /*
	 setInterval(function(){
		 
	 },5000);
	 */
	var video = $("#invideo")
	var bull=$("#bullet");
	vwidth=video.width();
	var vheight=video.css("height")
	var index=0;
	bull.width(vwidth);
	bull.css("height",vheight)
	window.onresize=function(){
		resetSize()
	}
	
	$(".colorlump").click(function(){
		$("#cosecolor").removeAttr('id')
		$(this).attr('id','cosecolor');
		cho_color=$(this).data('c')
	})
	 
	 $(".bulletmode").click(function(){
		 $("#choosed").removeAttr('id')
		 $(this).attr('id','choosed');
		 cho_mode=$(this).data('m')
	 })
	
	$("#send").click(function(){
		var bdata=$("#bulletText").val();
		SendBullet(0,bdata,cho_mode,cho_color,RTime)
		$("#SucAlert").slideDown()
		setTimeout(function(){
			$("#SucAlert").hide()
		},3000)
		allotBullet(bdata,'mybullet',0)
	})
	
	$(".close").click(function(){
		$("#SucAlert").slideUp() 
	})
	 
	video.on({
		resize:function(){
			console.log("resize");
			resetSize()
		},
		timeupdate:function(){
			PRTime=RTime;
			RTime=this.currentTime
			while(index!=0&&time[index-1]>RTime){
				console.log(index);
				index--;
			} 
			while(RTime>time[index]&&time[index]>PRTime){
				if(pos[index]==1)
					allotBullet(data[index],index,color[index]);
				else if(pos[index]==2)
					allotTopBullet(data[index],index,color[index]);
				console.log(index)
				index++;
			}
		},
		pause:function(){
			StopAllBullet()
		},
		playing:function(){
			console.log("play")
			$(".bullet").each(function(){
				MoveBullet($(this),parseInt($(this).css("left").slice(0,-2))*10000/vwidth)
			})
		}
	})
});

function SendBullet(id,data,pos,color,times){
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			console.log("连接成功");
			console.log("返回："+xmlhttp.responseText)
		}else{
			console.log("State="+xmlhttp.readyState+"code="+xmlhttp.status)
		}
	}
	xmlhttp.open("POST","https://www.tutang.site/Manage/Add.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	var text='id='+id+'&data='+data+'&pos='+pos+'&color='+color+'&time='+times;
	xmlhttp.send(text);
}



function GetBullet(){
	xmlhttp.onreadystatechange=function(){
		if (xmlhttp.readyState==4 && xmlhttp.status==200){
			console.log("连接成功");
			var xmldoc=xmlhttp.responseText;
			xmlMan(xmldoc);
		}else{
			console.log("State="+xmlhttp.readyState+"code="+xmlhttp.status)
		}
	}
	xmlhttp.open("GET","https://www.tutang.site/Manage/Get.php",true);
	xmlhttp.send();
}

function pandpos(){
	$("#pand").css("top",$("#bulletset").offset().top-200+'px');
	$("#pand").css("left",$("#bulletset").offset().left-60+'px');
}

function xmlMan(txt){
	
	if (window.DOMParser)
	{
		parser=new DOMParser();
		xmlDoc=parser.parseFromString(txt,"text/xml");
	}else {
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
		xmlDoc.async=false;
		xmlDoc.loadXML(txt);
	}
	var x=xmlDoc.getElementsByTagName("bullet");
	console.log(xmlDoc);
	for (var i = 0; i <x.length; i++) { 
		data.push(x[i].getElementsByTagName("data")[0].childNodes[0].nodeValue);
		color.push(parseInt(x[i].getElementsByTagName("color")[0].childNodes[0].nodeValue));
		time.push(parseFloat(x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue));
		pos.push(parseInt(x[i].getElementsByTagName("pos")[0].childNodes[0].nodeValue));
	}
	maxnum=xmlDoc.getElementsByTagName("maxnum")[0].childNodes[0].nodeValue;
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
		}else if(parseInt(all[i].css("right").slice(0,-2))>22){
			appendBullet(bullet,i,id,color);
			all[i]=$("#"+id);
			break
		}
	}
}

function appendBullet(data,low,id,color){
	var newBullet='<span class="bullet" id="'+id+'" style="color:'+ColorIndex[color]+';right:-'+22*data.length+'px;top:'+low*27+'px">'+data+'</span>'
	$("#bullet").append(newBullet)
	MoveBullet($("#"+id),10000)
}

function appendTopBullet(data,low,id,color){
	var newBullet='<span class="bullet" id="'+id+'" style="color:'+ColorIndex[color]+';top:'+low*27+'px">'+data+'</span>'
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