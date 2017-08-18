function animal(name,age){
	this.name=name;
	this.age=age;
}

var family = new Array();
family[0] =new animal("dog",10);
family[1]=new animal("cat",20);
family[2]=new animal("cow",30)






///////////////////////////////////////////////////////////////////////////////////

var myObj = {
	name:"aakash"
}


console.log(myObj.hasOwnProperty("name"))
console.log(myObj.hasOwnProperty("age"))