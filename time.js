function updateTime() {
  var timeHolder = document.querySelector("#time")

  var date = new Date()

  timeHolder.innerHTML = date.getSeconds()
  if (date.getSeconds() == 0)
      timeHolder.style.color = "purple"

  else if (date.getSeconds() <30) {
    timeHolder.style.color = "turquoise"
    console.log ("less than 30")
  } else {
    console.log ("more than 30")
    timeHolder.style.color = "goldenrod"
  }
}

updateTime()

setInterval (updateTime, 1000)
