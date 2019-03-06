var myButton = document.getElementById("button");
var myImageContainer = document.getElementById("imageContainer");

var addImage = function(){
	var myImage = document.createElement('img');
	myImage.src = "bunny.png";
	myImageContainer.appendChild(myImage);



}
myButton.onclick = addImage;
