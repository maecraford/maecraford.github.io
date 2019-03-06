dragElement(document.getElementById("piece"));
dragElement(document.getElementById("piece2"));
dragElement(document.getElementById("piece3"));
dragElement(document.getElementById("piece4"));
dragElement(document.getElementById("piece5"));
dragElement(document.getElementById("piece6"));
dragElement(document.getElementById("piece7"));
dragElement(document.getElementById("piece8"));
dragElement(document.getElementById("piece9"));
dragElement(document.getElementById("piece10"));
dragElement(document.getElementById("piece11"));
dragElement(document.getElementById("piece12"));
dragElement(document.getElementById("piece13"));
dragElement(document.getElementById("piece14"));
dragElement(document.getElementById("piece15"));
dragElement(document.getElementById("piece16"));
dragElement(document.getElementById("piece17"));
dragElement(document.getElementById("piece18"));
dragElement(document.getElementById("piece19"));
dragElement(document.getElementById("piece20"));
dragElement(document.getElementById("piece21"));
dragElement(document.getElementById("piece22"));
dragElement(document.getElementById("piece23"));
dragElement(document.getElementById("piece24"));
dragElement(document.getElementById("piece25"));
dragElement(document.getElementById("piece26"));
dragElement(document.getElementById("piece27"));
dragElement(document.getElementById("piece28"));
dragElement(document.getElementById("piece29"));
dragElement(document.getElementById("piece30"));
dragElement(document.getElementById("piece31"));
dragElement(document.getElementById("piece32"));
dragElement(document.getElementById("piece33"));
dragElement(document.getElementById("piece34"));
dragElement(document.getElementById("piece35"));
dragElement(document.getElementById("piece36"));
dragElement(document.getElementById("piece37"));
dragElement(document.getElementById("piece38"));
dragElement(document.getElementById("piece39"));
dragElement(document.getElementById("piece40"));
dragElement(document.getElementById("piece41"));
dragElement(document.getElementById("piece42"));
dragElement(document.getElementById("piece43"));
dragElement(document.getElementById("piece44"));
dragElement(document.getElementById("piece45"));
dragElement(document.getElementById("piece46"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id)) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id).onmousedown = dragMouseDown;
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