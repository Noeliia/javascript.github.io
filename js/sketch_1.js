//1. dibuixem els elements. linea, punt.. formes primitives
//2.les formes primitives les passem a un for/translate.
//3.Construim l'objecte. class/function
//4. Passem variables a l'objecte display(variables)
//5. Array d'objectes

var t=3;


function setup(){
	createCanvas(192,157);
	background(255);
}
function draw(){
	var dist=[2,10,3,10,9];
	background(0,255);
	console.log(dist[int(random(dist.length))]);
	t=t;
	if(t<=3){
		s=+0.09;
	}
	if(t>=15){
		
	}
	for(var px=0; px<width; px=px+(t*2)+dist[0]){
		for(var py=0; py<height; py=py+(t*2)+dist[3]){
	push();
	translate(px,py);
		ellipse(t*2,t*2,t*2,t*2);
		ellipse(t*2,t*2,t*2,t*2);
	pop();
		 }
	}
}