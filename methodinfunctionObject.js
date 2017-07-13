function person(job,married){
	this.job=job;
	this.married=married;
	this.speak=function(){
		console.log("hiiiii")
	};
	this.talk=function(){
		console.log("this is talk")
	}
	this.add=function(a,b){
		var sum  = a+b;
		console.log(sum)
	}
}

var fluffy = new person("manager","unmarried")

fluffy.talk();
fluffy.add(1,2)

