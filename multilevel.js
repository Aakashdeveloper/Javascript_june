function robot(name){
	this.name = name;
	this.legs = 2;
}

function human(name){
	this.name = name;
}

human.prototype = new robot();

var amit = new human()
amit.legs