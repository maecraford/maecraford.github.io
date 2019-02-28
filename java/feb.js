

//var myElement = document.getElementById("myElement")

//console.log(myElement)

//myElement.classList.add("newClass")


var box = document.getElementById("box");
var button = document.getElementById("button");
var addingAListElement = function (){

	console.log("test")

	var myNewElement = document.createElement("li");
	myNewElement.className = "important";
	var myNode = document.creteTextNode("some other text!");


	myNewElement.appendChild(mynode)
	myList.appendChild(myNewElement)
}
button.onclick = function(){
	addingAListElement()
}












// Make the DIV element draggable:
dragElement(document.getElementsByClassName("piece"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementsByClassName(elmnt.className)) {
    // if present, the header is where you move the DIV from:
    document.getElementsByClassName(elmnt.className).onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV: 
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
