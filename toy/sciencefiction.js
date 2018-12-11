//document.getElementById('please').addEventListener('change',check);


var please = "please";
function check (){
  var one = document.getElementById('please').value;
  console.log (one);
  if (please == one){
    randomImg();
  }
}
function randomImg(){
var randomNumber = Math.floor(Math.random() * 17);
var imgName = "img_" + randomNumber;
document.getElementById("imageid").src= "SCIFY/" + imgName + ".jpg";
}
