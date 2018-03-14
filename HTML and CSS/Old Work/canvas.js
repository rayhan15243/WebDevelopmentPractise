function doFirst() {
	var x = document.getElementById('canvas');
	canvas = x.getContext('2d');
	
	/*canvas.fillStyle="blue";
	canvas.strokeStyle="red";
	canvas.strokeRect(10,10,100,100);
	canvas.fillRect(10,120,100,100);
	canvas.clearRect(20,130,45,65);*/
	
	/*var g = canvas.createLinearGradient(0,0,100,100);
	g.addColorStop(.0,"blue");
	g.addColorStop(1,"red");
	canvas.fillStyle=g;
	canvas.fillRect(0,0,100,100);*/
	
	/*canvas.beginPath();
	canvas.moveTo(50,50);
	canvas.lineTo(70,250);
	canvas.lineTo(300,200);
	canvas.closePath();
	canvas.stroke();*/
	
	/*canvas.shadowOffsetX = 4;
	canvas.shadowOffsetY = 4;
	canvas.shadoowBlur = 6;
	canvas.shadowColor = 'rgba(0,0,255,.5)';
	
	canvas.font="bold 36px Tahoma";
	canvas.textAlign="end";
	canvas.fillText("Rayhan", 300,100);*/
	
	/*canvas.font="bold 22px Tahoma";
	canvas.textAlign="start";
	canvas.fillText("start", 10,30);
	
	canvas.translate(100,150);
	canvas.fillText("after translate", 0,0);
	
	canvas.rotate(1);
	canvas.fillText("after rotate", 0,0);
	
	canvas.scale(1.5,4);
	canvas.fillText("after scale", 0,20);*/
	
	/*canvas.font="bold 22px Tahoma";
	canvas.textAlign="start";
	
	canvas.save();
	canvas.fillText("lets begin!", 10,30);
	
	canvas.rotate(1);
	canvas.fillText("after rotation", 60,10);
	
	canvas.restore();
	canvas.fillText("after restoring!", 10,30);*/

	
	
}
window.addEventListener("load", doFirst, false);