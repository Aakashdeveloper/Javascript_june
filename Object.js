literal

var dog = {
	color:"black",
	legs:4
}
dog
Object {color: "black", legs: 4}
dog.color
"black"
dog.legs
4
dog["legs"]
4
dog["color"]
"black"
dog.breed = "pug"
"pug"
dog
Object {color: "black", legs: 4, breed: "pug"}
delete dog.color
true
dog
Object {legs: 4, breed: "pug"}


constructor

var cat = new Object();
cat.name="fluffy";
cat.color="white"
cat.name
"fluffy"
cat["color"]
"white"

