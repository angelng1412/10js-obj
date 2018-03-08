var svg = document.getElementById("svg");
var clearbtn = document.getElementById("clear");


var drawcircle = function(x, y, r, fill){
    var circleobj = {
	cx: x,
	cy: y,
	r: r,
	fill: fill,
	display: function(e){
	    c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	    c1.setAttribute("cx", this.cx);
	    c1.setAttribute("cy", this.cy);
	    c1.setAttribute("r", this.r);
	    c1.setAttribute("fill", this.fill);
	    svg.appendChild(c1);
	    c1.addEventListener("click", this.changeColor);
	},
	changeColor: function(e){
	    if(this.getAttribute("fill") == "red"){
		e.stopPropagation();
		this.setAttribute("fill", "blue");
	    }
	    else{
		e.stopPropagation();
		svg.removeChild(this);
		var randx = Math.random()*svg.getAttribute("width");
		var randy = Math.random()*svg.getAttribute("height");
		drawcircle(randx, randy, 25, "red"); 
	    }
	}
    }
    circleobj.display(); 
    return circleobj; 
}


var newCircle = function(e){
    drawcircle(e.offsetX, e.offsetY, 25, "red");
}

var clear = function(e){
    while (svg.hasChildNodes()){
	svg.removeChild(svg.firstChild);
    }
}


svg.addEventListener("click", newCircle);
clearbtn.addEventListener("click", clear); 
