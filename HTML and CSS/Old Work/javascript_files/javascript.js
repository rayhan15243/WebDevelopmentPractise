function getStuff () {
	var list = document.querySelectorAll('#tuna');
	for(var i=0; i<list.length; i++) {
		list[i].onclick=talk;
		
}

}
function talk() {
	alert('WTF!');
}
window.onload=getStuff;									

/*function getStuff () {
	document.querySelector('#tuna').onclick=talk; 
}
function talk() {
	alert('WTF!');
}
window.onload=getStuff;*/

/* querySelector is when it selects something in your webpage 
											that is related to what is in (). It can only return one single element
												*/
										