window.onload=function()
{
	var pic=document.getElementById('picScroll');
	var pic1=document.getElementById('picScroll1');
	var i;
	function changeToLeft(){
		if(pic.scrollLeft>pic1.offsetWidth)
		{
			pic.scrollLeft=0;
		}
		else
		{
	  		pic. scrollLeft++;
		}
	}
	//i=setInterval(changeToLeft,10);
	pic. onmouseover=function(){
		clearInterval(i);
	}
	pic. onmouseout=function(){
		i=setInterval(changeToLeft,10);
	}
}

