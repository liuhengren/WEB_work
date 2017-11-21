window.onload = function(){
			var divs=document.getElementsByClassName("main0");
			var divst=document.getElementsByClassName("main");
			var lits=document.getElementsByClassName("idx");
			var asd=document.getElementsByClassName("bts");
			var t=false;
			//实现橙色框功能
			for (var i=0; i<asd.length; i++)
			{
				asd[i].onmouseover = function(){
					this.children[2].className = "t_cts1";
					this.children[2].nextSibling.className="cts3"
				}

				asd[i].onmouseout = function(){
					this.children[3].className = "cts2";
					this.children[3].previousSibling.className="cts1"
				}
			}
			//实现通过划过不同类型换页功能
			for(var i=0;i<lits.length;i++)
			{
				lits[i].onmouseover = function(){
					find(this);
				}
			}
			function find(a){
			a=a.value;
			a=Number(a);
			if(t){
				divs[a].className="main"
				t=!t;
			}
			else{
				divst[0].className="main0"
				divs[a].className="main"
			}
		}
}

