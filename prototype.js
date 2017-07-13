function Dog(breed){
	this.breed = breed

}

Dog.prototype.bark = function(){
	console.log("ndjvnkdn")
}


var buddy = new Dog("golden retriever");
buddy.bark()

var snoopy = new Dog("Beagle");



