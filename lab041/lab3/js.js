window.onload=function(){
	var stars=document.getElementsByClassName('star');
	var s=document.getElementById('pla');
	var pls=["","很不满意","不满意","一般","满意","非常满意"];
	var con=false;
	for(var i=0;i<stars.length;i++)
	{
		stars[i].children[0].onmouseover=function(){starPic(this.name)};
		stars[i].children[0].onmouseout=function(){hide()};
		stars[i].children[0].onclick=function(){qd(this.name);};
	}
	function starPic(which)
	{
		if(which<=2)
		{
			for(var i=0;i<which;i++)
			{
				stars[i].children[0].src="images/star1.png";
			}
		}
		else{
			for(var i=0;i<which;i++)
			{
				stars[i].children[0].src="images/star2.png";
			}
		}
	}
	function hide()
	{
		if(!con)
		{
			for(var i=0;i<stars.length;i++)
			{
				stars[i].children[0].src="images/star0.png"
			}
		}
	}
	function qd(which)
	{
		s.value=pls[which];
		if(which<=2)
		{
			for(var i=0;i<which;i++)
			{
				stars[i].children[0].src="images/star1.png";
			}
		}
		else{
			for(var i=0;i<which;i++)
			{
				stars[i].children[0].src="images/star2.png";
			}
		}
		for(var i=0;i<5-which;i++)
		{
			stars[stars.length-i-1].children[0].src="images/star0.png";
		}
		con=true;
	}
}