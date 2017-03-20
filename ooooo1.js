/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-29 20:16:58
 * @version $Id$
 */

 var photoS=document.getElementById('takePhoto');
 photoS.onclick=function (){
 	var c=0;
 	var nc=prompt("Enter a number that you want");
 	if(isNAN(nc)=true||nc<1||nc/1==0){
 	   alert("输入错误！");
       nc=prompt("Enter a number that you want");}
   if（nc>10）{
 	   alert("你不能太贪心！");
       nc=prompt("Enter a number that you want");}
   else{
      var Photo=function(nc){
	  this.nc=nc;
     }
    Photo.prototype.count = function() {
	 return +=nc;
      }
    c=new Photo(nc);
 alert("you have take photo"+c.count()+"times yet!");
}
}
