function person(job,married){
	this.job=job;
	this.married=married;
	this.speak=function(){
		console.log("hiiiii")
	};
	function speak(){

	}
}

var fluffy = new person("manager","unmarried")