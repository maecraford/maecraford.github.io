    var follower = document.getElementById("follower")
    document.addEventListener("mousemove", handleFollower)

    function handleFollower(evt) {
        var tag = evt.target.tagName.toLowerCase()

        if (tag == "a" || tag == "button") {
            follower.style.animationPlayState = "running"
        } else {
            follower.style.animationPlayState = "paused"
        }

        follower.style.left = evt.pageX - 80 + "px"
        follower.style.top = evt.pageY - 80 + "px"
    }


