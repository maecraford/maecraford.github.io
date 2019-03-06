

var myArray = [ "oranges", "apples","pears","dragonfriuts", "grapes"];

var myOtherArray =  [ 43,34,5,6,18];

var myOtherOtherArray = ["oragnes", false, 41, [ "second list", "more values"]]

console.log(myArray[0])


var myContainer = document.getElementById("container");

// while loop 

var counter = 0;

while(counter < myArray.length ){

var myListItem = document.createElement("li");

myListItem.innerHTML = myArray[counter] + myOtherArray [counter];


myContainer.appendChild(myListItem)


counter++; // is the same as counter = counter +1;
}

for (var i = 0; i < myArray.length; i++) {
var myListItem = document.createElement("li");
myListItem.innerHTML = myArray[i];
myContainer.appendChild(myListItem)
}