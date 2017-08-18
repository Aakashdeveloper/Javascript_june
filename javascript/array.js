var a = [1,3,4,5,6,7]

var a=[1,3,4,5,"dsf",56,"jhshj","dfffds",5,6,true]


a[0]
1
a[2]
4

//nested
var arr = [1,2,3,[4,5,6,[7,8,9],10,11],12]


arr[0]
1
arr[2]
3
arr[0][0]
undefined
arr[4]
12
arr[3]
(6) [4, 5, 6, Array(3), 10, 11]
arr[3][0]
4
arr[3][1]
5
arr[3][2]
6
arr[3][2][0]
undefined
arr[3][3][0]
7
arr[3][3]
(3) [7, 8, 9]
arr[3][3][0]
7



var a = [1,3,4,5,6,7]
undefined
a.push(8)
7
a
(7) [1, 3, 4, 5, 6, 7, 8]
a.pop(2)
8
a.pop()
7
a
(5) [1, 3, 4, 5, 6]
a.pop()
6
a
(4) [1, 3, 4, 5]



var a =[1,2,3,4,5,6,7,8]

undefined
a.shift(9)
1
a.shift()
2
a.unshift(10)
7
a
(7) [10, 3, 4, 5, 6, 7, 8]




var a =[1,2,3,4,5,6,7,8]

undefined
a.shift(9)
1
a.shift()
2
a.unshift(10)
7
a
(7) [10, 3, 4, 5, 6, 7, 8]


var a =["a","b","c","d","e"]
undefined
a
(5) ["a", "b", "c", "d", "e"]
a.splice(2,0,"f","g")
[]
a
(7) ["a", "b", "f", "g", "c", "d", "e"]
var b =["a","b","c","d","e"]
undefined
b.splice(2,1,"f","g")
["c"]
a
(7) ["a", "b", "f", "g", "c", "d", "e"]
b
(6) ["a", "b", "f", "g", "d", "e"]
var b =["a","b","c","d","e"]
undefined
b.splice(2,2,"f","g")
(2) ["c", "d"]
b
(5) ["a", "b", "f", "g", "e"]


var b =["a","b","e","d","b"]
undefined
b.sort()
(5) ["a", "b", "b", "d", "e"]
var b =["a","b","ae","db","b"]
undefined
b.sort()
(5) ["a", "ae", "b", "b", "db"]




var a = [1,2,3,4]
var b = ["a", "b", "b", "d", "e"]
a.concat(b)



var a = [1,2,3,4]
var b = ["a", "b", "b", "d", "e"]
a.concat(b)
(9) [1, 2, 3, 4, "a", "b", "b", "d", "e"]
var a = [1,2,3,4]
undefined
a.reverse()
(4) [4, 3, 2, 1]

var arr = [1, 2, 3, 4, "a", "b", "b", "d", "e"]
for(i=0;i<=arr.length;i++){
	console.log(arr[i])
}

var arr = [1, 2, 3, 4, "a", "b", "b", "d", "e"]
for(i=arr.length;i>=0;i--){
	console.log(arr[i])
}

for(i=0;i<=10;i++){

}
for(i=10;i>=0;i++){
	
}

var a = "abhi"
for(i=a.length;i>=0;i--){
	console.log(a[i])
}






