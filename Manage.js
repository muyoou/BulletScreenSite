// JavaScript Document
	
	vwidth=0;
all=new Array();
 $(document).ready(function(){
	var video = $("#invideo")
	var bull=$("#bullet");
	vwidth=video.width();
	var vheight=video.css("height")
	var time=[3.702104,3.8,3.8,3.9,4.2,4.5,6.6,6.9,7.695584,8.0,8.6,9.54,9.0,12.446404,13.952938]
	var data=["牛逼","牛逼2","牛逼3","牛逼4","牛逼","牛逼2","牛逼3","牛逼4","牛逼2","牛逼3","牛逼4","牛逼","牛逼2","牛逼3","牛逼4"]
	var index=0;
	var sb=10000/vwidth;
	bull.width(vwidth);
	bull.css("height",vheight)
	 video.on({
		 timeupdate:function(){
			 console.log(this.currentTime)
			 if(this.currentTime>time[index]){
				allotBullet(data[index],index);
				 
				 index++;
			 }
		 },
		 pause:function(){
			 console.log("暂停")
			 StopAllBullet()
		 },
		 playing:function(){
			 console.log("开始")
			 $(".bullet").each(function(){
				 console.log(sb);
				 MoveBullet($(this),parseInt($(this).css("left").slice(0,-2))*10000/vwidth)
			 })
	 	 }
	 })
});



function allotBullet(bullet,id){
	for(var i=0;i<8;i++){
		if(!all[i]){
			console.log(i)
			appendBullet(bullet,i,id);
			all[i]=$("#"+id);
			break
		}else if(parseInt(all[i].css("right").slice(0,-2))>20){
			appendBullet(bullet,i,id);
			all[i]=$("#"+id);
			break
		}
	}
}

function appendBullet(data,low,id){
	var newBullet='<span class="bullet" id="'+id+'" style="right:-'+20*data.length+'px;top:'+low*25+'px">'+data+'</span>'
	$("#bullet").append(newBullet)
	MoveBullet($("#"+id),10000)
}

function MoveBullet(bullet,speed){
	bullet.animate({right:'800px'},speed,'linear',function(){
		bullet.remove();
	});
}

function StopAllBullet(){
	$(".bullet").stop()
}