window.onload=function(){

	var send = document.getElementsByClassName('send')[0];
	var area = document.getElementsByClassName('area')[0];
	var warning = document.getElementsByClassName('warning')[0];
	var msgBox = document.getElementById('msgBox');
	var timer;
	// 回车发送消息
	area.onkeydown = function(e){
		if(e.keyCode == 13&&e.shiftKey==false){
			send.onclick();
			e.preventDefault();
		}
	}

	// 点击发送按钮发送消息
	send.onclick = function(){
		if (area.value == '') {
			warning.style.display = 'block';
			clearTimeout(timer);
			timer = setTimeout(function(){
				warning.style.display = 'none';
			},1000)
		}else{
			var li = document.createElement('li');
			li.className = 'clearFix';
			li.innerHTML = '<p class="time">'+new Date().toLocaleString()+'</p><p class="content"><span class="conText">'+area.value+'</span><span class="myHead"></span></p>';
			msgBox.appendChild(li);
			li.scrollIntoView();
			area.value ='';
			area.focus();
		}
	}
	//右键菜单	
	var t=document.getElementById('mousemune');
	var mune=t.children[0].children;
	var mune_r=document.getElementById('clik');
	var acs=1;
	mune_r.onclick=function()
	{
		mune_r.children[0].style.display='block';
		acs=0;
	}
	var mune_rs=mune_r.children[0].children;
	console.log()
	for(var i=0;i<mune_rs.length;i++)
	{
		mune_rs[i].onmouseover=function(){
			this.style.backgroundColor='#009bdb';
		}
		mune_rs[i].onmouseout=function(){
			this.style.backgroundColor='#fefffe';
		}
	}
	for(var i=0;i<mune.length;i++)
	{
		mune[i].onmouseover=function(){
			this.style.backgroundColor='#009bdb';
		}
		mune[i].onmouseout=function(){
			this.style.backgroundColor='#fefffe';
		}
	}
	document.oncontextmenu=function(){
		pqs.style.display='none';
		mune_r.children[0].style.display='none';
		count=1;
		return false;
	}
	var wrap=document.getElementById('wrap');
	wrap.oncontextmenu=function(){
		t.style.display='block';
		var x=window.event.clientX;
		var y=window.event.clientY;
		t.style.left=x+10+"px";
		t.style.top=y+10+"px";
	}
	document.onclick=function(){
		if(acs!=0)
		{
			t.style.display='none'
			mune_r.children[0].style.display='none';
		}
		else
			acs=1;
	}
	//表情
	var img =document.getElementById('pic');
	for(var i=1;i<133;i++)
	{
		var divs=document.createElement("div");
		var pic=document.createElement("img");
		divs.className='pics';
		pic.src='img\\QQ\\'+i+'.gif'
		divs.appendChild(pic);
		img.appendChild( divs);
	}
	var pq=document.getElementById('biaoqing');
	var pqs=document.getElementById('bqs');
	var count=1;
	pq.onclick=function(){
		if(count==1)
		{
			pqs.style.display='block';
			count=0;
		}
		else
		{
			pqs.style.display='none';
			count=1;
		}
		
	}
}