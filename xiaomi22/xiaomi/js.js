window.onload = function(){
			var cts = document.getElementsByClassName("cts1" )
			var tcts=document.getElementsByClassName("cts2" )
			var divs=document.getElementsByClassName("main0");
			var divst=document.getElementsByClassName("main");
			var lits=document.getElementsByClassName("idx");
			var t=false;
			//实现橙色框功能
			for (var i=0; i<cts.length; i++)
			{
				cts[i].onmouseover = function(){
					this.className = "t_cts1";
					this.nextSibling.className="cts3"
				}

				tcts[i].onmouseout = function(){
					this.className = "cts2";
					this.previousSibling.className="cts1"
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

