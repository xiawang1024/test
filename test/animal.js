
// json  {attr1:iTarget1,attr2:iTarget2}
// opacity 属性按百分制（100）算
function startMove(obj,json,fn){
	   
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			 var flag=true;
			for(attr in json){
				var current=0;
				if(attr==="opacity"){
					current=Math.round(parseFloat(getStyle(obj,attr))*100);
				}else{
					current=parseInt(getStyle(obj,attr));
				}
				var speed=(json[attr]-current)/10;
				speed=speed>0?Math.ceil(speed):Math.floor(speed);
				if(current!=json[attr]){
					flag=false;
				}
				if(attr==="opacity"){
					obj.style.filter="alpha(opacity:"+(current+speed)+")";
					obj.style[attr]=(current+speed)/100;
				}else{
					obj.style[attr]=current+speed+"px";
				}	
			}
			if(flag){
				clearInterval(obj.timer);
				if(fn){
					fn();
				}
			}
		},16);
	}
function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		}else{
			return window.getComputedStyle(obj,null)[attr];
		}
}