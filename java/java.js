// variables:

//strings- any piece of text you want to save (don't mix the quotes)
//"this is a string"
//'this is a string'
//"this is still 'a' string"
//numbers- negatives, positives, decimals 
//1
//3.5
//-3.5
//booleans- either be true or false; only two values 
//true
//false

//arrays- a collection of values, can save strings or numbers or booleans, you can save lists of things 
//[1, 2, 3]
//["string1", "string2", 3, false]
//[["appels", "pears", "oranges"]["broccoli","celery"]]

//objects- (key, name, value)
//{
	//"fruit": "apple"
//	"cereal": "frosted flakes"
//	"name": "Mae"
//	"location": "TNS"
//	"weather": "cloudy"
//	"food": ["bread", "cereal"]
//}

//function

var myString = "this is a string";
var myNumber = 20;
var myBoolean = "false"
var letterSpacingValue = 1;
console.log(myNumber)

//getting a div via its id:
var myDiv = document.getElementById("wrapper");

//function
var myFunction = function() {

	//myNumber = myNumber + 5;
	//letterSpacingValue = letterSpacingValue + 1;

	if (myBoolean == true) {		
		myBoolean=false;

		myNumber = myNumber + 10;
		//myDiv.style.fontSize = myNumber + "px";

	} else{
		myBoolean = true;
		//myDiv.style.letterSpacing = letterSpacingValue + "px"
		myNumber = myNumber - 8;
	}
	myDiv.style.fontSize = myNumber + "px"
}
console.log(myNumber)
myDiv.onclick = myFunction;

//onmouse
//onmouseover
//onmousemove
//onclick






