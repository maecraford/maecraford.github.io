

var myArray = [ "cold weather", "cat videos","trump memes","coffee", "cowboy paraphernalia"];

var myOtherArray =  [ " / North Korea"," / Brexit"," / vaccines"," / the wall"," / gun violence"];


var myContainer = document.getElementById("container");

// while loop 

var counter = 0;

while(counter < myArray.length ){
	var myListItem = document.createElement("li");
	myListItem.innerHTML = myArray[counter] + myOtherArray [counter];
	myContainer.appendChild(myListItem)
	counter++; // is the same as counter = counter +1;
}