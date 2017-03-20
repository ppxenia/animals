/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-09-30 19:45:55
 * @version $Id$
 */


var PHOTO=document.getElementById('photo'); ;
var Food=document.getElementById('food');
var Notes=document.getElementById('note');
var Clothes=document.getElementById('cloth');
var DS=document.getElementById('doingshow');
var thing=document.getElementById('things');
var doings=document.getElementById('doing');
	var id1=document.getElementById('lr');
	var id2=document.getElementById('br');
	var id3=document.getElementById('rr');
	var id4=document.getElementById('cr');
	var tem;
		var timer=setInterval(function(){
		tem=id1.innerHTML;
		id1.innerHTML=id2.innerHTML;
		id2.innerHTML=id3.innerHTML;
		id3.innerHTML=id4.innerHTML;
		id4.innerHTML=tem;
        },5000);
thing.onmouseover=function(event){
	DS.style.display='none';
	var event=event||window.event;
	var target=event.target||event.srcElement;
	if(target.nodeName.toLocaleLowerCase()=='li'){
		switch(target.id){
			case 'showP':{
				
			    PHOTO.style.display="block";}
			break;
				case 'showF':
				{
				
				Food.style.display="block";}
			break;
				case 'showC':{
				
				Clothes.style.display="block";	
				}
				
			break;
				case 'showN':
				{

				Notes.style.display="block";}	
			break;
	}
	}
}
thing.onmouseout=function(event){
    DS.style.display='block';
	var event =event||window.event;
		var target=event.target||event.srcElement;
	if(target.nodeName.toLocaleLowerCase()=='li'){
		switch(target.id){
			case 'showP':
			PHOTO.style.display="none";
			break;
				case 'showF':
				Food.style.display="none";
			break;
				case 'showC':
				Clothes.style.display="none";
			break;
				case 'showN':
				Notes.style.display="none";
			break;

		}
	}
}
     