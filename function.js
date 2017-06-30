var a = 10 

if(a%2==0){
	console.log("num is even")
}else{
	console.log("num is odd")
}



function isEven(a){
	if(a%2==0){
		console.log("num is even")
	}else{
		console.log("num is odd")
	}
}

isEven(52)
//functio or function expression 
function add(a,b){
	return a+b;
}

function minus(a,b){
	return a-b;
}

//function declaration or method
var add = function(a,b){
	return a+b
}

var add = function(a,b){
	 a+b
}


///ES6

var add = (a,b)=>{
	return a+b
}


function testing(a){
	for(i=0;i<=a;i++){
		console.log(a)
	}
}


function cons(){
	console.log(" i am here")
}

for(i=0;i<=2;i++)
{
	cons()
}


function add(a,b,c,d){
	var first = a+b;
	var sec = c+d;
	var third = "first::"+first+"sec::"+sec
	return first
	return sec
}





