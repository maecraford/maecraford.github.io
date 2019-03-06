

var myButton = document.getElementById("button");
var myImageContainer = document.getElementById("imageContainer");

var addImage = function(){
	var myImage = document.createElement('img');
	myImage.src = "one.png";
	myImageContainer.appendChild(myImage);



}
myButton.onclick = addImage;


var myFunction = function(){

var myNewElement = document.createElement ("li")
myNewElement.className = "myaddedListElement"
myNewElement.innerhtml = "this is a new list element"

myList.appendChild(myNewElement)


}

myList.onClick = myfunction;